(function(){
const LINES = {"1":"#EE352E","2":"#EE352E","3":"#EE352E","4":"#00933C","5":"#00933C","6":"#00933C","7":"#B933AD",
  "A":"#0039A6","C":"#0039A6","E":"#0039A6","B":"#FF6319","D":"#FF6319","F":"#FF6319","M":"#FF6319",
  "G":"#6CBE45","J":"#996633","Z":"#996633","L":"#A7A9AC","N":"#FCCC0A","Q":"#FCCC0A","R":"#FCCC0A","W":"#FCCC0A","S":"#808183"};
const DARK_TEXT = new Set(["N","Q","R","W"]);
const KIND = {edificio:"Edificio", extra:"Da vedere", pasto:"Pasto", tramonto:"Tramonto", base:"Hotel"};
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const bullets = s => esc(s).replace(/\{\{(\w)\}\}/g, (_, l) =>
  `<span class="line" style="--c:${LINES[l]||"#808183"};--ci:${DARK_TEXT.has(l)?"#000":"#fff"}" aria-label="linea ${l}">${l}</span>`);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Visti: solo su questo dispositivo */
let seen = {};
try { seen = JSON.parse(localStorage.getItem("nyc26-seen") || "{}"); } catch(e) {}
const saveSeen = () => { try { localStorage.setItem("nyc26-seen", JSON.stringify(seen)); } catch(e) {} };

/* Mappa: schema dei quartieri sotto, mappa dettagliata sopra (salvata per l'uso senza rete) */
const map = L.map("map", { zoomSnap: .25, renderer: L.svg({padding: .5}) });
map.attributionControl.setPrefix(false);
map.createPane("land").style.zIndex = 150;
const landGroup = L.layerGroup().addTo(map);
Object.values(BORO).forEach(polys => polys.forEach(r =>
  L.polygon(r.map(([x,y]) => [y,x]), { className: "land", interactive: false, pane: "land" }).addTo(landGroup)));
OFFLINE_LABELS.forEach(([n,lat,lng]) =>
  L.marker([lat,lng], { pane: "land", icon: L.divIcon({ className: "", html: `<div class="maplabel">${esc(n)}</div>`, iconSize: [0,0] }), interactive: false, keyboard: false }).addTo(landGroup));
if (location.protocol !== "file:") L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>' }).addTo(map);
map.setView([40.735, -73.99], 12.5);

/* Dove sono */
const note = t => { document.getElementById("mapnote").textContent = t; };
let meM = null, meC = null, watchId = null;
const Locate = L.Control.extend({ options: { position: "topright" }, onAdd() {
  const b = L.DomUtil.create("button", "locate"); b.type = "button"; b.id = "locate";
  b.setAttribute("aria-label", "Mostra la mia posizione"); b.setAttribute("aria-pressed", "false");
  b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4" stroke="currentColor" stroke-width="2"/></svg>';
  L.DomEvent.disableClickPropagation(b); L.DomEvent.on(b, "click", locate); return b; } });
map.addControl(new Locate());
function locate(){
  if (!("geolocation" in navigator)) { note("Questo dispositivo non fornisce la posizione."); return; }
  if (watchId !== null) { if (meM) map.setView(meM.getLatLng(), Math.max(map.getZoom(), 16)); return; }
  note("Cerco la tua posizione…");
  watchId = navigator.geolocation.watchPosition(p => {
    const ll = [p.coords.latitude, p.coords.longitude];
    if (!meM) {
      meC = L.circle(ll, { radius: p.coords.accuracy, className: "me-acc", interactive: false }).addTo(map);
      meM = L.circleMarker(ll, { radius: 7, className: "me", interactive: false }).addTo(map);
      map.setView(ll, Math.max(map.getZoom(), 15));
      document.getElementById("locate").setAttribute("aria-pressed", "true");
      note("Il punto blu è la tua posizione. Tocca di nuovo il pulsante per centrare la mappa.");
    } else { meM.setLatLng(ll); meC.setLatLng(ll).setRadius(p.coords.accuracy); }
  }, err => {
    navigator.geolocation.clearWatch(watchId); watchId = null;
    note(err.code === 1 ? "Posizione non consentita. Attivala in Impostazioni › Privacy e sicurezza › Localizzazione." : "Posizione non disponibile in questo momento. Riprova tra poco.");
  }, { enableHighAccuracy: true, maximumAge: 10000, timeout: 20000 });
}

let dayLayer = L.layerGroup().addTo(map);
let markers = {};

const hav = (a, b) => { const R = 6371, r = Math.PI/180, dl = (b.lat-a.lat)*r, dn = (b.lng-a.lng)*r;
  const h = Math.sin(dl/2)**2 + Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dn/2)**2; return 2*R*Math.asin(Math.sqrt(h)); };
/* Stima a piedi: distanza in linea d'aria × 1,3 (percorso su griglia stradale) a 5 km/h */
const walkKm = (a, b) => hav(a, b) * 1.3;
/* Percorso reale da WALK (OSRM/OpenStreetMap); se manca, ripiego sulla stima */
const walkLeg = (day, i) => {
  const r = (typeof WALK !== "undefined" && WALK[day.id]) ? WALK[day.id][i-1] : null;
  if (r) return { km: r[0] / 1000, min: Math.max(1, Math.round(r[1] / 60)) };
  const km = walkKm(day.stops[i-1], day.stops[i]); return { km, min: walkMin(km) };
};
const walkMin = km => { const m = km / 5 * 60; return m < 10 ? Math.max(1, Math.round(m)) : Math.round(m / 5) * 5; };
let mapApp = "google";
try { mapApp = localStorage.getItem("nyc26-maps") || "google"; } catch(e) {}
const placeUrl = s => mapApp === "apple"
  ? `https://maps.apple.com/?q=${encodeURIComponent(s.type === "base" ? "Hotel" : s.name)}&ll=${s.lat},${s.lng}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.approx && s.type !== "base" ? s.name + ", New York" : s.lat + "," + s.lng)}`;
const dirUrl = (a, b) => mapApp === "apple"
  ? `https://maps.apple.com/?saddr=${a.lat},${a.lng}&daddr=${b.lat},${b.lng}&dirflg=${b.legMode === "metro" ? "r" : "w"}`
  : `https://www.google.com/maps/dir/?api=1&origin=${a.lat},${a.lng}&destination=${b.lat},${b.lng}&travelmode=${b.legMode === "metro" ? "transit" : "walking"}`;
let currentDay = null;

function renderTabs(cur){
  document.getElementById("tabs").innerHTML = DAYS.map(d =>
    `<button class="tab" data-day="${d.id}" aria-pressed="${d.id===cur}" style="--c:${d.color};--ci:${d.ink}" aria-label="${d.short} ${d.num} novembre"><span class="b">${d.num}</span><small>${d.short}</small></button>`).join("");
}

function select(id, opts = {}){
  const day = DAYS.find(d => d.id === id) || DAYS[0];
  currentDay = day.id;
  const root = document.documentElement.style;
  root.setProperty("--day", day.color); root.setProperty("--day-ink", day.ink);
  renderTabs(day.id);

  /* km a piedi: percorsi reali, esclusi i tratti in metro */
  let km = 0;
  for (let i = 1; i < day.stops.length; i++) if (day.stops[i].legMode !== "metro") km += walkLeg(day, i).km;
  const nBuild = day.stops.filter(s => s.type === "edificio").length;
  const full = { d15:"Domenica", d16:"Lunedì", d17:"Martedì", d18:"Mercoledì", d19:"Giovedì" }[day.id];

  document.getElementById("sign").innerHTML = `<div class="wrap">
    <div class="rule" aria-hidden="true"></div>
    <div class="when"><span class="b">${day.num}</span><p>${full} ${day.num} novembre</p></div>
    <h1>${esc(day.title)}</h1>
    <div class="facts"><span><b>${nBuild}</b> edifici</span><span>circa <b>${Math.round(km)} km</b> a piedi</span><span>tramonto <b>${day.sunset}</b></span></div>
    <p class="plan">${esc(day.plan)}</p></div>`;

  /* lista */
  let n = 0;
  const html = [];
  day.stops.forEach((s, i) => {
    const num = s.type === "base" ? "H" : String(++n);
    s._num = num;
    if (i > 0 && s.legMode === "metro") {
      html.push(`<li class="leg metro"><span class="time">metro</span><span class="node"></span><span class="legtxt">${bullets(s.leg)}</span></li>`);
    } else if (i > 0) {
      const w = walkLeg(day, i), d = w.km;
      if (d >= 0.08) html.push(`<li class="leg walk"><span class="time">a piedi</span><span class="node"></span><span class="legtxt"><span><b>${w.min} min</b> (${d.toFixed(1).replace(".", ",")} km)</span>${s.leg ? `<span>${bullets(s.leg)}</span>` : ""}</span></li>`);
      else if (s.leg) html.push(`<li class="leg walk"><span class="time">a piedi</span><span class="node"></span><span class="legtxt">${bullets(s.leg)}</span></li>`);
    }
    const credits = [s.arch && `<dt>Progetto</dt><dd>${esc(s.arch)}</dd>`, s.eng && `<dt>Strutture</dt><dd>${esc(s.eng)}</dd>`, s.year && `<dt>Anno</dt><dd>${esc(s.year)}</dd>`, s.height && `<dt>Altezza</dt><dd>${esc(s.height)}</dd>`, s.floors && `<dt>Piani</dt><dd>${esc(s.floors)}</dd>`].filter(Boolean).join("");
    const srcs = (s.src || []).map(([l,u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(l)}</a>`).join(", ");
    const prev = day.stops[i-1];
    const isDone = !!seen[s.id];
    const metaLine = s.type === "edificio" ? [s.arch && s.arch.split(" (")[0].split(";")[0], s.year].filter(Boolean).map(esc).map(x=>`<span>${x}</span>`).join("") : (s.min ? `<span>sosta prevista ${s.min} min</span>` : "");
    html.push(`<li class="stop ${s.type}${isDone?" is-done":""}" id="s-${s.id}" data-id="${s.id}">
      <span class="time">${s.t}</span><span class="node"><span>${num}</span></span>
      <div class="body"><details>
        <summary${s.photo ? ' class="has-thumb"' : ""}>${s.photo ? `<img class="thumb" src="${esc(s.photo.u)}" alt="" loading="lazy" onerror="this.remove()">` : ""}<span class="kind">${KIND[s.type]}</span><span class="name">${esc(s.name)}</span>${metaLine?`<span class="meta">${metaLine}</span>`:""}</summary>
        <div class="more">
          ${s.photo ? `<figure class="ph"><img src="${esc(s.photo.u)}" alt="${esc(s.name)}" loading="lazy" onerror="this.closest('figure').classList.add('ph-off')"><figcaption>Foto: <a href="${esc(s.photo.p)}" target="_blank" rel="noopener">${esc(s.photo.a)}</a>, ${esc(s.photo.l)}, Wikimedia Commons</figcaption></figure>` : ""}
          ${credits ? `<dl class="credits">${credits}</dl>` : ""}
          <p>${esc(s.desc)}</p>
          ${s.tech ? `<p class="tech">${esc(s.tech)}</p>` : ""}
          ${s.tip ? `<p class="tip">${esc(s.tip)}</p>` : ""}
          ${srcs ? `<p class="src">Fonti: ${srcs}</p>` : ""}
          <div class="actions">
            <a class="chip primary" href="${placeUrl(s)}" target="_blank" rel="noopener">Mappa</a>
            ${prev ? `<a class="chip" href="${dirUrl(prev, s)}" target="_blank" rel="noopener">Percorso</a>` : ""}
            ${s.type !== "base" ? `<button class="chip check" data-seen="${s.id}" type="button" aria-pressed="${isDone}" aria-label="Segna come visto"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Visto</button>` : ""}
          </div>
        </div>
      </details></div></li>`);
  });
  document.getElementById("stops").innerHTML = html.join("");

  /* mappa */
  dayLayer.clearLayers(); markers = {};
  const pts = day.stops.map(s => [s.lat, s.lng]);
  for (let i = 1; i < day.stops.length; i++) {
    const s = day.stops[i];
    L.polyline([pts[i-1], pts[i]], { className: s.legMode === "metro" ? "route-metro" : "route", interactive: false }).addTo(dayLayer);
  }
  const placed = new Set();
  day.stops.forEach(s => {
    const key = s.lat.toFixed(4)+","+s.lng.toFixed(4);
    if (s.type === "base" && placed.has(key)) return;
    placed.add(key);
    const m = L.marker([s.lat, s.lng], { icon: L.divIcon({ className: "", html: `<div class="pin ${s.type}${seen[s.id]?" done":""}" id="p-${s.id}">${s._num}</div>`, iconSize: [0,0] }), title: s.name, zIndexOffset: s.type==="edificio"?500:0 }).addTo(dayLayer);
    m.on("click", () => openStop(s.id, true));
    markers[s.id] = m;
  });
  if (!opts.keepView) map.fitBounds(L.latLngBounds(pts), { padding: [24, 24], animate: !reduced });

  if (location.hash !== "#" + day.id) history.replaceState(null, "", "#" + day.id);
  if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: "auto" });
}

function highlight(id){
  document.querySelectorAll(".pin.active").forEach(p => p.classList.remove("active"));
  const p = document.getElementById("p-" + id); if (p) p.classList.add("active");
}
function openStop(id, scroll){
  const li = document.getElementById("s-" + id); if (!li) return;
  const d = li.querySelector("details"); d.open = true; highlight(id);
  if (scroll) li.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

document.addEventListener("click", e => {
  const tab = e.target.closest(".tab"); if (tab) { select(tab.dataset.day); return; }
  const show = e.target.closest("[data-show]");
  if (show) {
    const m = markers[show.dataset.show];
    document.getElementById("map").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    if (m) { map.flyTo(m.getLatLng(), 16, { animate: !reduced, duration: .6 }); highlight(show.dataset.show); }
    return;
  }
  const ma = e.target.closest("[data-mapapp]");
  if (ma) {
    mapApp = ma.dataset.mapapp; try { localStorage.setItem("nyc26-maps", mapApp); } catch(err) {}
    document.querySelectorAll("[data-mapapp]").forEach(b => b.setAttribute("aria-pressed", b.dataset.mapapp === mapApp));
    const open = [...document.querySelectorAll(".stop details[open]")].map(d => d.closest(".stop").dataset.id);
    select(currentDay, { keepView: true, keepScroll: true });
    open.forEach(id => { const d = document.querySelector("#s-" + id + " details"); if (d) d.open = true; });
    return;
  }
  const sb = e.target.closest("[data-seen]");
  if (sb) {
    const id = sb.dataset.seen; seen[id] = !seen[id]; if (!seen[id]) delete seen[id]; saveSeen();
    sb.setAttribute("aria-pressed", !!seen[id]);
    document.getElementById("s-" + id).classList.toggle("is-done", !!seen[id]);
    const p = document.getElementById("p-" + id); if (p) p.classList.toggle("done", !!seen[id]);
  }
});
document.addEventListener("toggle", e => {
  if (e.target.tagName === "DETAILS" && e.target.open) {
    const id = e.target.closest(".stop").dataset.id; highlight(id);
    const m = markers[id]; if (m && !map.getBounds().pad(-.1).contains(m.getLatLng())) map.panTo(m.getLatLng(), { animate: !reduced });
  }
}, true);
window.addEventListener("hashchange", () => { const id = location.hash.slice(1); if (DAYS.some(d => d.id === id)) select(id); });

/* Giorno iniziale: oggi a New York, se è un giorno del viaggio; altrimenti quello nel link; altrimenti il primo */
const wantInfo = location.hash === "#info";
let start = location.hash.slice(1);
try {
  const ny = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
  const m = ny.match(/^2026-11-(1[5-9])$/); if (m) start = "d" + m[1];
} catch(e) {}
select(DAYS.some(d => d.id === start) ? start : DAYS[0].id);
document.querySelectorAll("[data-mapapp]").forEach(b => b.setAttribute("aria-pressed", b.dataset.mapapp === mapApp));

/* Pagina Informazioni */
function showInfo(on){
  document.getElementById("infopage").hidden = !on;
  document.querySelector("main").hidden = on;
  document.getElementById("sign").hidden = on;
  document.getElementById("infobtn").setAttribute("aria-pressed", on);
  if (on) { if (location.hash !== "#info") history.replaceState(null, "", "#info"); window.scrollTo(0, 0); }
  else { map.invalidateSize(); }
}
document.getElementById("infobtn").addEventListener("click", () => { const on = document.getElementById("infopage").hidden; showInfo(on); if (!on) select(currentDay); });
document.getElementById("infoback").addEventListener("click", () => { showInfo(false); select(currentDay); });
document.getElementById("tabs").addEventListener("click", () => { if (!document.getElementById("infopage").hidden) showInfo(false); }, true);
window.addEventListener("hashchange", () => { if (location.hash === "#info") showInfo(true); });
if (wantInfo) showInfo(true);

/* Uso senza rete */
const off = document.getElementById("offline");
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  const showUpdate = w => { const b = document.getElementById("update"); b.hidden = false; b.onclick = () => { b.textContent = "Aggiornamento…"; w.postMessage({ type: "skip" }); }; };
  navigator.serviceWorker.register("sw.js").then(reg => {
    if (reg.waiting && navigator.serviceWorker.controller) showUpdate(reg.waiting);
    reg.addEventListener("updatefound", () => { const w = reg.installing; w.addEventListener("statechange", () => { if (w.state === "installed" && navigator.serviceWorker.controller) showUpdate(w); }); });
  }).catch(() => { off.textContent = "Questo browser non permette di salvare la guida per l'uso senza rete."; });
  navigator.serviceWorker.addEventListener("message", e => {
    const m = e.data || {}; if (m.type !== "progress") return;
    if (m.done < m.total) off.innerHTML = `Salvataggio per l'uso senza rete: <b>${m.done} di ${m.total}</b> elementi. Tieni la guida aperta con il Wi-Fi.`;
    else if (m.failed) off.innerHTML = `Guida salvata per l'uso senza rete, tranne <b>${m.failed}</b> elementi (foto). Riaprila con il Wi-Fi per completarla.`;
    else off.innerHTML = "<b>Pronta per l'uso senza rete:</b> itinerario e foto sono salvati su questo telefono.";
  });
  navigator.serviceWorker.ready.then(r => { if (navigator.onLine && r.active) r.active.postMessage({ type: "precache" }); });
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => { if (reloading) return; reloading = true; location.reload(); });
}
})();
