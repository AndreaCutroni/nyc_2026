/* Service worker della guida: salva pagina, foto e mappa per l'uso senza rete */
const VERSION = "20261108-1659";
const CORE_CACHE = "nyc26-core-" + VERSION;
const EXTRA_CACHE = "nyc26-extra";       // foto e tile viste: condivise tra le versioni
const CORE = ["./", "index.html", "app.js", "data.js", "boro.js", "leaflet.js", "leaflet.css", "archivo.woff2", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
const EXTRA = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/One_Vanderbilt_April_2023.jpg/960px-One_Vanderbilt_April_2023.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/One_World_Trade_Center_(June_5,_2014).jpg/960px-One_World_Trade_Center_(June_5,_2014).jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/53W53_from_Weehawken_September_2021_001.jpg/960px-53W53_from_Weehawken_September_2021_001.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/432_Park_Avenue,_NY_(cropped)2.jpg/960px-432_Park_Avenue,_NY_(cropped)2.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/VIA_57_West_-_exterior.jpg/960px-VIA_57_West_-_exterior.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/270_Park_Avenue_2025.jpg/960px-270_Park_Avenue_2025.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Whitney_Museum_of_American_Art_(49051573133).jpg/960px-Whitney_Museum_of_American_Art_(49051573133).jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/New_Museum_in_New_York_City_2015.JPG/960px-New_Museum_in_New_York_City_2015.JPG",
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/8_Spruce_Street_2015.jpg/960px-8_Spruce_Street_2015.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/The_Shed_-_Complete_(48206488176).jpg/960px-The_Shed_-_Complete_(48206488176).jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Little_Island_at_Pier_55.jpg/960px-Little_Island_at_Pier_55.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/New_york_times_building.jpg/960px-New_york_times_building.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Oculus_World_Trade_Center_-_August_18_2016.jpg/960px-Oculus_World_Trade_Center_-_August_18_2016.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/56_Leonard_Street_(24249).jpg/960px-56_Leonard_Street_(24249).jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hearst_Tower_(August_2024).jpg/960px-Hearst_Tower_(August_2024).jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Moynihan_Train_Hall_interior,_Dec_27_2022_(cropped).jpg/960px-Moynihan_Train_Hall_interior,_Dec_27_2022_(cropped).jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/05_23_2022_Supertall_Building_111_West_57th_Street_from_Roof_NYC.jpg/960px-05_23_2022_Supertall_Building_111_West_57th_Street_from_Roof_NYC.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_Spiral_Sep_2021.jpg/960px-The_Spiral_Sep_2021.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hudson_Yards_Plaza_March_2019_53.jpg/960px-Hudson_Yards_Plaza_March_2019_53.jpg"
];
const BLANK = Uint8Array.from(atob("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWJiYGBgAAAAAP//XRcpzQAAAAZJREFUAwAADwADJDd96QAAAABJRU5ErkJggg=="), c => c.charCodeAt(0));

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CORE_CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))));
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("nyc26-core-") && k !== CORE_CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

let precaching = null;
async function broadcast(msg) { for (const c of await self.clients.matchAll()) c.postMessage(msg); }
async function precacheExtra() {
  const cache = await caches.open(EXTRA_CACHE);
  let done = 0, failed = 0, i = 0;
  const total = EXTRA.length;
  const worker = async () => {
    while (i < total) {
      const url = EXTRA[i++];
      try {
        if (!(await cache.match(url))) {
          const r = await fetch(url, { mode: "cors" });
          if (r.ok) await cache.put(url, r); else failed++;
        }
      } catch (err) { failed++; }
      done++;
      if (done % 10 === 0 || done === total) broadcast({ type: "progress", done, total, failed });
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);
}

self.addEventListener("message", e => {
  const t = e.data && e.data.type;
  if (t === "skip") self.skipWaiting();
  if (t === "precache") {
    if (!precaching) precaching = precacheExtra().finally(() => { precaching = null; });
    e.waitUntil(precaching);
  }
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Pagina e file della guida: prima la copia salvata
  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      const hit = await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      try { return await fetch(req); }
      catch (err) {
        if (req.mode === "navigate") return (await caches.match("index.html")) || Response.error();
        return Response.error();
      }
    })());
    return;
  }

  // Mappa dettagliata e foto: copia salvata, altrimenti rete (e salvo); senza rete tile trasparente
  const isTile = url.hostname === "tile.openstreetmap.org";
  const isPhoto = url.hostname === "upload.wikimedia.org";
  if (!isTile && !isPhoto) return;
  e.respondWith((async () => {
    const cache = await caches.open(EXTRA_CACHE);
    const hit = await cache.match(req.url);
    if (hit) return hit;
    try {
      let r;
      try { r = await fetch(req.url, { mode: "cors" }); if (r.ok) cache.put(req.url, r.clone()); }
      catch (corsErr) { r = await fetch(req); }   // se il server non permette CORS: mostro senza salvare
      return r;
    } catch (err) {
      if (isTile) return new Response(BLANK, { headers: { "Content-Type": "image/png" } });
      return Response.error();
    }
  })());
});
