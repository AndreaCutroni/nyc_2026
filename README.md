# New York, 15–19 novembre 2026

Guida di viaggio personale per cinque giorni a New York, pensata per un ingegnere edile appassionato di architettura. Per ogni giorno ci sono le tappe in ordine con gli orari, una mappa e gli spostamenti a piedi e in metro. Ogni edificio ha una scheda con architetto, ingegnere strutturale, dati tecnici, una foto e le fonti.

**Sito:** https://andreacutroni.github.io/nyc_2026/

## Usarla su iPhone

1. Apri il sito in Safari.
2. Tocca Condividi, poi **Aggiungi alla schermata Home**.
3. Apri l'app dall'icona con il Wi-Fi e aspetta che, nella pagina **i**, sotto "Uso senza rete" compaia "Pronta per l'uso senza rete".
4. Per avere la mappa dettagliata anche senza rete, con il Wi-Fi apri ogni giorno e ingrandisci la mappa lungo il percorso: si salvano solo le zone che visualizzi.

## File

| File | Contenuto |
|---|---|
| `index.html` | Pagina e stili |
| `app.js` | Logica: giorni, schede, mappa, posizione, pagina Informazioni |
| `data.js` | Itinerario: tappe, testi, fonti, foto e percorsi a piedi |
| `boro.js` | Contorni dei distretti di New York per la mappa senza rete |
| `sw.js` | Service worker per l'uso senza rete |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Installazione come app |
| `leaflet.js`, `leaflet.css` | Libreria per la mappa |
| `archivo.woff2` | Carattere tipografico |

Per modificare l'itinerario basta cambiare `data.js`. Dopo una modifica va cambiata anche la riga `VERSION` in `sw.js`, altrimenti i telefoni continuano a usare la copia salvata.

## Fonti e licenze

- **Contenuti:** le fonti sono citate in ogni scheda. Le principali sono CTBUH Skyscraper Center, i siti degli studi di architettura e ingegneria, NYC Landmarks Preservation Commission, MTA e i siti ufficiali di parchi, musei e ristoranti. I dati sono aggiornati all'8 novembre 2026.
- **Foto:** Wikimedia Commons. Autore e licenza (CC BY, CC BY-SA o CC0) sono indicati sotto ogni immagine.
- **Mappa:** © OpenStreetMap contributors. Contorni dei distretti: `boroughs.geojson` dal repository GitHub [dwillis/nyc-maps](https://github.com/dwillis/nyc-maps), semplificato.
- **Percorsi a piedi:** calcolati con OSRM su dati OpenStreetMap (routing.openstreetmap.de).
- **Librerie:** Leaflet (licenza BSD-2-Clause), carattere Archivo (SIL Open Font License).
