const HOTEL = {"name":"Hotel","lat":40.709,"lng":-74.0118};

const DAYS = [
 {
  "id": "d15",
  "short": "Dom",
  "num": 15,
  "color": "#EE352E",
  "ink": "#ffffff",
  "title": "Tribeca, Lower Manhattan e Brooklyn Bridge",
  "sunrise": "6:43",
  "sunset": "16:38",
  "plan": "Si parte a piedi dall'hotel, si scende verso Wall Street e si attraversa il ponte per il tramonto sul lato di Brooklyn.",
  "stops": [
   {
    "id": "hotel15",
    "type": "base",
    "name": "Partenza dall'hotel",
    "t": "08:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "desc": "Colazione in zona oppure da Rigor Hill (prima tappa)."
   },
   {
    "id": "rigor",
    "type": "pasto",
    "name": "Rigor Hill Market",
    "t": "08:20",
    "min": 40,
    "lat": 40.719,
    "lng": -74.005,
    "approx": true,
    "desc": "Mercato-caffè di Tribeca, al 227 West Broadway angolo White Street. La sua cioccolata calda è considerata tra le migliori di Manhattan.",
    "tip": "Le fonti non concordano sugli orari: controlla su Maps prima di andare.",
    "src": [
     [
      "Tasting Table, Best Hot Chocolates in NYC",
      "https://www.tastingtable.com/drinks/national/best-hot-chocolate-nyc"
     ],
     [
      "Tribeca Citizen, Rigor Hill Market",
      "https://tribecacitizen.com/2022/11/19/rigor-hill-market-is-open/"
     ]
    ]
   },
   {
    "id": "leonard",
    "type": "edificio",
    "name": "56 Leonard Street",
    "t": "09:15",
    "min": 15,
    "lat": 40.71767,
    "lng": -74.00637,
    "arch": "Herzog & de Meuron (architetto esecutivo: Costas Kondylis Design)",
    "eng": "WSP Cantor Seinuk",
    "year": "2016",
    "height": "250,2 m",
    "floors": "57",
    "desc": "Torre residenziale di 146 appartamenti. Gli architetti la descrivono come «una pila di stanze singole» e «case nel cielo»: ogni piano è diverso dagli altri.",
    "tech": "Struttura interamente in calcestruzzo. I solai traslano e cambiano da un livello all'altro, creando angoli, sbalzi e balconi diversi per ogni appartamento. Accanto all'ingresso c'è una scultura di Anish Kapoor.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/56-leonard/844"
     ],
     [
      "Herzog & de Meuron",
      "https://www.herzogdemeuron.com/projects/305-56-leonard-street/"
     ],
     [
      "WSP",
      "https://www.wsp.com/en-us/projects/56-leonard"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/56_Leonard_Street_(24249).jpg/960px-56_Leonard_Street_(24249).jpg",
     "p": "https://commons.wikimedia.org/wiki/File:56_Leonard_Street_(24249).jpg",
     "a": "Rhododendrites",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "wtc1",
    "type": "edificio",
    "name": "One World Trade Center e Memoriale 11 settembre",
    "t": "09:50",
    "min": 40,
    "lat": 40.71278,
    "lng": -74.01333,
    "arch": "SOM",
    "eng": "WSP (revisione: Leslie E. Robertson Associates)",
    "year": "2014",
    "height": "541,3 m (1.776 piedi)",
    "floors": "94",
    "desc": "Il grattacielo più alto del Nord America. La forma sfaccettata è composta da otto triangoli isosceli allungati. Ai suoi piedi c'è il memoriale «Reflecting Absence» di Michael Arad e Peter Walker, aperto nel 2011: due vasche di quasi un acro ciascuna, con cascate di 30 piedi (circa 9 m) e i nomi di 2.983 vittime degli attentati del 2001 e del 1993.",
    "tech": "Struttura composita acciaio-calcestruzzo. Nel memoriale cerca il Survivor Tree, un pero trovato gravemente danneggiato a Ground Zero nell'ottobre 2001 e ripiantato nel 2010.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/one-world-trade-center/98"
     ],
     [
      "9/11 Memorial & Museum",
      "https://www.911memorial.org/sites/default/files/inline-files/911%20Memorial%20&%20Museum%20Institutional%20Backgrounder.pdf"
     ],
     [
      "SOM",
      "https://www.som.com/news/skidmore-owings-merrills-one-world-trade-center-opens-today/"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/One_World_Trade_Center_(June_5,_2014).jpg/960px-One_World_Trade_Center_(June_5,_2014).jpg",
     "p": "https://commons.wikimedia.org/wiki/File:One_World_Trade_Center_(June_5,_2014).jpg",
     "a": "GLady",
     "l": "CC0"
    }
   },
   {
    "id": "oculus",
    "type": "edificio",
    "name": "Oculus, stazione del World Trade Center",
    "t": "10:40",
    "min": 25,
    "lat": 40.7114,
    "lng": -74.0114,
    "arch": "Santiago Calatrava",
    "year": "2016",
    "desc": "Il nodo di trasporto del World Trade Center, con 12 linee della metro e la stazione PATH. Calatrava ha descritto la forma come «un uccello liberato dalle mani di un bambino».",
    "tech": "Nervature in acciaio e vetro disposte su un'ellisse. La sala senza colonne misura circa 350 × 115 piedi (107 × 35 m). Il lucernario centrale, lungo 330 piedi, si apre nei giorni miti e ogni 11 settembre. Il punto più alto è a 160 piedi (49 m) dal pavimento.",
    "src": [
     [
      "Santiago Calatrava",
      "https://calatrava.com/projects/world-trade-center-transportation-hub-new-york.html"
     ],
     [
      "Port Authority NY & NJ",
      "https://wtcprod.panynj.gov/en/local/learn-about-wtc/oculus-transportation-hub.html"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Oculus_World_Trade_Center_-_August_18_2016.jpg/960px-Oculus_World_Trade_Center_-_August_18_2016.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:Oculus_World_Trade_Center_-_August_18_2016.jpg",
     "a": "Anthony Quintano",
     "l": "CC BY 2.0"
    }
   },
   {
    "id": "trinity",
    "type": "extra",
    "name": "Trinity Church",
    "t": "11:15",
    "min": 15,
    "lat": 40.7081,
    "lng": -74.0123,
    "arch": "Richard Upjohn",
    "year": "1846",
    "desc": "Considerata uno dei primi e migliori esempi di architettura neogotica. È stato l'edificio più alto di New York fino al 1890. Nel cimitero ci sono le tombe di Alexander ed Eliza Hamilton.",
    "tip": "Chiesa aperta tutti i giorni 8:30-18. Dal 1° novembre il cimitero chiude alle 16.",
    "src": [
     [
      "Trinity Church NYC",
      "https://trinitychurchnyc.org/visit-history/places/trinity-church"
     ]
    ]
   },
   {
    "id": "wallst",
    "type": "extra",
    "name": "Wall Street e New York Stock Exchange",
    "t": "11:35",
    "min": 15,
    "lat": 40.7069,
    "lng": -74.0113,
    "arch": "George B. Post",
    "year": "1901-1903",
    "desc": "La Borsa al 18 di Broad Street, con il portico neoclassico.",
    "tech": "Il frontone, «Integrity Protecting the Works of Man», fu disegnato da J.Q.A. Ward e realizzato da Paul Wayland Bartlett. Le sculture attuali sono copie del 1936.",
    "src": [
     [
      "NYC Landmarks Preservation Commission, LP-1529",
      "https://s-media.nyc.gov/agencies/lpc/lp/1529.pdf"
     ],
     [
      "National Park Service",
      "https://www.nps.gov/places/new-york-stock-exchange.htm"
     ]
    ]
   },
   {
    "id": "bull",
    "type": "extra",
    "name": "Charging Bull e Bowling Green",
    "t": "11:55",
    "min": 10,
    "lat": 40.7056,
    "lng": -74.0134,
    "desc": "Il toro di bronzo all'inizio di Broadway, una delle foto più classiche del Financial District.",
    "tip": "Di solito c'è coda per le foto: arriva presto."
   },
   {
    "id": "keste",
    "type": "pasto",
    "name": "Pranzo da Kesté Pizza e Vino",
    "t": "12:25",
    "min": 60,
    "lat": 40.7092773,
    "lng": -74.0049159,
    "desc": "Pizzeria napoletana al 77 di Fulton Street, a due passi da 8 Spruce Street.",
    "tip": "Domenica aperto dalle 11 (fino alle 21; nelle FAQ del sito 21:30). Alternativa veloce: Joe's Pizza, 124 Fulton Street, pizza al trancio.",
    "src": [
     [
      "Kesté, contatti e orari",
      "https://kestepizzeria.com/contact/"
     ],
     [
      "Joe's Pizza, sedi",
      "https://www.joespizzanyc.com/locations"
     ]
    ]
   },
   {
    "id": "spruce",
    "type": "edificio",
    "name": "8 Spruce Street (New York by Gehry)",
    "t": "13:45",
    "min": 20,
    "lat": 40.71083,
    "lng": -74.00556,
    "arch": "Gehry Partners",
    "eng": "WSP Cantor Seinuk",
    "year": "2011",
    "height": "265,2 m",
    "floors": "76",
    "desc": "Al completamento era il più alto edificio interamente residenziale del Nord America: 903 appartamenti. Nella base ci sono una scuola pubblica dalla materna all'ottavo anno e uffici dell'ospedale New York Downtown.",
    "tech": "Struttura in calcestruzzo. La facciata ondulata in acciaio inossidabile è stata progettata con Digital Project di Gehry Technologies e il costruttore non ha avuto varianti in corso d'opera sulla facciata.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/eight-spruce-street/699"
     ],
     [
      "Il tuo Notion (USA Projects)",
      "https://app.notion.com/p/a3cf2e62d17d82c0994381a204b9e2d6"
     ],
     [
      "WSP",
      "https://www.wsp.com/en-gl/projects/8-spruce-street"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/8_Spruce_Street_2015.jpg/960px-8_Spruce_Street_2015.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:8_Spruce_Street_2015.jpg",
     "a": "Choinowski",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "bbridge",
    "type": "extra",
    "name": "Brooklyn Bridge a piedi",
    "t": "14:20",
    "min": 10,
    "lat": 40.7131,
    "lng": -74.004,
    "arch": "John A. Roebling",
    "year": "1869-1883",
    "desc": "Al completamento era il ponte sospeso più lungo del mondo: campata principale di 1.595,5 piedi (486 m), 6.016 piedi (1,8 km) con le rampe.",
    "tech": "Primo grande uso di cavi in filo d'acciaio al posto del ferro, con stralli diagonali oltre ai pendini verticali. Le torri, alte 268 piedi, sono in calcare sotto il livello dell'acqua e in granito sopra. Le fondazioni furono scavate in cassoni ad aria compressa: Washington Roebling e circa 110 operai si ammalarono di malattia da decompressione, ed Emily Warren Roebling gestì gran parte della corrispondenza e dei rapporti del cantiere.",
    "tip": "Dal 2021 le bici hanno una corsia protetta ricavata dalla carreggiata.",
    "src": [
     [
      "ASCE, Civil Engineering",
      "https://www.asce.org/publications-and-news/civil-engineering-source/civil-engineering-magazine/issues/magazine-issue/article/2022/07/new-yorks-brooklyn-bridge-is-an-engineering-marvel"
     ],
     [
      "NYC DOT",
      "https://www.nyc.gov/html/dot/html/infrastructure/brooklyn-bridge.shtml"
     ]
    ]
   },
   {
    "id": "dumbo",
    "type": "extra",
    "name": "DUMBO, Washington Street",
    "t": "15:00",
    "min": 35,
    "lat": 40.7033,
    "lng": -73.9895,
    "desc": "La vista sul Manhattan Bridge incorniciato tra due edifici in mattoni.",
    "tip": "Il punto è sempre affollato: fai la foto e vai avanti."
   },
   {
    "id": "bbp",
    "type": "tramonto",
    "name": "Brooklyn Bridge Park, Pier 1",
    "t": "15:50",
    "min": 60,
    "lat": 40.702,
    "lng": -73.9965,
    "desc": "Il molo più grande del parco (9,5 acri), con vista panoramica su Lower Manhattan e sul Brooklyn Bridge. Il tramonto è alle 16:38.",
    "tech": "I gradoni del Granite Prospect sono fatti con blocchi di granito recuperati dalla ricostruzione del Roosevelt Island Bridge.",
    "tip": "Il parco è aperto tutti i giorni 6-1. Porta qualcosa di caldo: sul molo tira vento.",
    "src": [
     [
      "Brooklyn Bridge Park",
      "https://brooklynbridgepark.org/places-to-see/pier-1/"
     ],
     [
      "Calendar-365, tramonti NY nov. 2026",
      "https://www.calendar-365.com/calendar/2026/November.html"
     ]
    ]
   },
   {
    "id": "dinner15",
    "type": "pasto",
    "name": "Cena a DUMBO",
    "t": "17:30",
    "min": 75,
    "lat": 40.7036,
    "lng": -73.9895,
    "approx": true,
    "desc": "Zona piena di pizzerie e locali. Prima di scegliere guarda la coda.",
    "tip": "In alternativa, rientrando verso l'hotel: Joe's Pizza al 124 di Fulton Street, pizza al trancio.",
    "src": [
     [
      "Joe's Pizza, sedi",
      "https://www.joespizzanyc.com/locations"
     ]
    ]
   },
   {
    "id": "back15",
    "type": "base",
    "name": "Rientro in hotel",
    "t": "19:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "leg": "{{A}} {{C}} da High St a Fulton St (una fermata), poi 8 min a piedi.",
    "legMode": "metro",
    "desc": "Giornata finita."
   }
  ]
 },
 {
  "id": "d16",
  "short": "Lun",
  "num": 16,
  "color": "#0039A6",
  "ink": "#ffffff",
  "title": "West Side: Hudson Yards, High Line e il fiume",
  "sunrise": "6:44",
  "sunset": "16:37",
  "plan": "Da Hudson Yards si scende sulla High Line fino al Whitney, poi si attraversa il Village e si arriva al fiume per il tramonto.",
  "stops": [
   {
    "id": "hotel16",
    "type": "base",
    "name": "Partenza dall'hotel",
    "t": "08:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "desc": "Colazione in zona."
   },
   {
    "id": "spiral",
    "type": "edificio",
    "name": "The Spiral",
    "t": "08:50",
    "min": 15,
    "lat": 40.75533,
    "lng": -73.999568,
    "arch": "BIG (architetto esecutivo: Adamson Associates)",
    "eng": "WSP (revisione: LERA)",
    "year": "2022",
    "height": "313,9 m",
    "floors": "65",
    "desc": "Torre per uffici in cui i ritiri dei piani formano terrazze verdi che salgono a spirale lungo la facciata.",
    "tech": "Colonne in acciaio, nucleo in calcestruzzo armato e solai in travi d'acciaio. La stabilità al vento è affidata a outrigger in acciaio ai piani 6, 37-38 e 65.",
    "leg": "{{E}} da World Trade Center a 34 St–Penn Station (circa 12 min), poi 8 min a piedi verso ovest.",
    "legMode": "metro",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/the-spiral/23571"
     ],
     [
      "BIG",
      "https://big.dk/projects/the-spiral-4456"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_Spiral_Sep_2021.jpg/960px-The_Spiral_Sep_2021.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:The_Spiral_Sep_2021.jpg",
     "a": "King of Hearts",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "vessel",
    "type": "edificio",
    "name": "Vessel e Hudson Yards",
    "t": "09:20",
    "min": 25,
    "lat": 40.7539,
    "lng": -74.0022,
    "arch": "Heatherwick Studio",
    "year": "2019",
    "floors": "16 livelli",
    "desc": "Struttura percorribile a forma di alveare: 154 rampe di scale, circa 2.500 gradini e 80 pianerottoli.",
    "tech": "Acciaio grezzo saldato e verniciato, con l'intradosso in acciaio lucidato color rame. È stata fabbricata in Italia, a Venezia, da Cimolai.",
    "tip": "Secondo il sito di Hudson Yards l'ingresso è gratuito ma serve un biglietto a fascia oraria. Quelli per il giorno stesso si prendono sul posto dalle 9:30. Per guardarla da fuori non serve.",
    "src": [
     [
      "Heatherwick Studio",
      "https://heatherwick.com/project/vessel/"
     ],
     [
      "Hudson Yards, FAQ Vessel",
      "https://www.hudsonyardsnewyork.com/discover/vessel/faq"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hudson_Yards_Plaza_March_2019_53.jpg/960px-Hudson_Yards_Plaza_March_2019_53.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:Hudson_Yards_Plaza_March_2019_53.jpg",
     "a": "Epicgenius",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "shed",
    "type": "edificio",
    "name": "The Shed",
    "t": "09:50",
    "min": 15,
    "lat": 40.753328,
    "lng": -74.002898,
    "arch": "Diller Scofidio + Renfro, con Rockwell Group",
    "eng": "Thornton Tomasetti",
    "year": "2019",
    "desc": "Centro culturale di otto livelli con un guscio telescopico mobile. Quando il guscio scorre sulla piazza accanto, crea una sala di circa 17.200 piedi quadrati (1.600 m²) per 1.200 persone sedute o 2.700 in piedi.",
    "tech": "Il guscio scorre su binari con una tecnologia derivata dalle gru a portale. Se è aperto, guarda le guide a terra sulla piazza.",
    "src": [
     [
      "Diller Scofidio + Renfro",
      "https://dsrny.com/project/the-shed"
     ],
     [
      "Thornton Tomasetti",
      "https://www.thorntontomasetti.com/project/shed"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/The_Shed_-_Complete_(48206488176).jpg/960px-The_Shed_-_Complete_(48206488176).jpg",
     "p": "https://commons.wikimedia.org/wiki/File:The_Shed_-_Complete_(48206488176).jpg",
     "a": "Ajay Suresh",
     "l": "CC BY 2.0"
    }
   },
   {
    "id": "highline1",
    "type": "extra",
    "name": "High Line, verso sud",
    "t": "10:20",
    "min": 40,
    "lat": 40.7537,
    "lng": -74.0044,
    "arch": "James Corner Field Operations, Diller Scofidio + Renfro, Piet Oudolf (piante)",
    "year": "2009-2019",
    "desc": "Ex ferrovia merci sopraelevata trasformata in parco lineare continuo lungo 1,45 miglia (2,3 km). Si entra a Hudson Yards e si scende verso sud.",
    "tech": "La linea era pienamente operativa dal 1934 e il traffico cessò negli anni '80. Il primo tratto del parco aprì nel 2009, lo Spur sulla 30th Street nel 2019.",
    "src": [
     [
      "The High Line",
      "https://www.thehighline.org/history/"
     ]
    ]
   },
   {
    "id": "chelsea",
    "type": "pasto",
    "name": "Pranzo al Chelsea Market (Los Tacos No.1)",
    "t": "11:30",
    "min": 75,
    "lat": 40.74246,
    "lng": -74.00606,
    "desc": "Mercato coperto nell'ex fabbrica Nabisco, dove nel 1912 fu inventato l'Oreo. All'interno c'è Los Tacos No.1, al 75 di 9th Avenue.",
    "src": [
     [
      "Chelsea Market (Oreo)",
      "https://www.chelseamarket.com/events-all/national-oreo-day-chelsea-market"
     ],
     [
      "Chelsea Market, orari",
      "https://www.chelseamarket.com/visit"
     ],
     [
      "Los Tacos No.1, Chelsea Market",
      "https://www.lostacos1.com/location/los-tacos-chelsea-market/"
     ]
    ],
    "tip": "Mercato aperto tutti i giorni 7-22; Los Tacos No.1 tutti i giorni 11-22."
   },
   {
    "id": "whitney",
    "type": "edificio",
    "name": "Whitney Museum of American Art",
    "t": "13:00",
    "min": 45,
    "lat": 40.7396,
    "lng": -74.0089,
    "arch": "Renzo Piano Building Workshop",
    "eng": "Robert Silman Associates",
    "year": "2015",
    "desc": "Museo di otto piani rivestito in acciaio grigio-azzurro chiaro, tra il fiume Hudson e la High Line. Verso il fiume il volume è pieno e alto, verso la High Line scende a gradoni con terrazze.",
    "tech": "La galleria al quinto piano è di 18.000 piedi quadrati (1.670 m²) senza pilastri. Le terrazze per sculture all'aperto, al sesto e settimo livello, sommano 13.000 piedi quadrati. Il «largo» a sbalzo davanti all'ingresso è uno spazio pubblico tra strada e museo.",
    "src": [
     [
      "Renzo Piano Building Workshop",
      "https://www.rpbw.com/project/the-whitney-museum-of-american-art-at-gansevoort"
     ],
     [
      "Il tuo Notion (USA Projects)",
      "https://app.notion.com/p/a3cf2e62d17d82c0994381a204b9e2d6"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Whitney_Museum_of_American_Art_(49051573133).jpg/960px-Whitney_Museum_of_American_Art_(49051573133).jpg",
     "p": "https://commons.wikimedia.org/wiki/File:Whitney_Museum_of_American_Art_(49051573133).jpg",
     "a": "Ajay Suresh",
     "l": "CC BY 2.0"
    }
   },
   {
    "id": "washsq",
    "type": "extra",
    "name": "Washington Square Park e Greenwich Village",
    "t": "14:15",
    "min": 40,
    "lat": 40.7312,
    "lng": -73.9971,
    "arch": "Stanford White (l'Arco)",
    "year": "1890-1892",
    "desc": "L'arco in marmo sostituì un arco provvisorio in legno del 1889, costruito per il centenario dell'insediamento di Washington. Il modello è l'Arc de Triomphe di Parigi.",
    "tech": "Le due statue di Washington sul lato nord furono aggiunte nel 1918, opera di Hermon MacNeil e Alexander Stirling Calder.",
    "src": [
     [
      "NYC Parks",
      "https://www.nycgovparks.org/parks/washington-square-park/history"
     ]
    ]
   },
   {
    "id": "pier45",
    "type": "extra",
    "name": "Hudson River Park, Pier 45",
    "t": "15:15",
    "min": 15,
    "lat": 40.733,
    "lng": -74.0113,
    "desc": "Il molo di Christopher Street, con vista aperta sul fiume e sul New Jersey. Da qui si cammina verso nord fino a Little Island."
   },
   {
    "id": "little",
    "type": "edificio",
    "name": "Little Island",
    "t": "15:50",
    "min": 60,
    "lat": 40.74194,
    "lng": -74.01028,
    "arch": "Heatherwick Studio",
    "eng": "Mueser Rutledge (con Arup)",
    "year": "2021",
    "desc": "Parco di 2,4 acri (circa 1 ha) sul Pier 55, sostenuto da 132 «vasi» prefabbricati in calcestruzzo a forma di tulipano. Ha più di 400 specie di piante autoctone e un anfiteatro da 687 posti. Il tramonto è alle 16:37.",
    "tech": "I pali di fondazione escono dall'acqua e finiscono in fioriere a quote diverse: insieme formano la topografia del parco. La struttura sollevata lascia arrivare la luce all'ecosistema marino sotto.",
    "tip": "Ingresso gratuito, da novembre a dicembre aperto 6-21. Si entra dal ponte sud, tra la 13th e la 14th Street.",
    "src": [
     [
      "Heatherwick Studio",
      "https://heatherwick.com/project/pier55/"
     ],
     [
      "Little Island, Rules & FAQ",
      "https://littleisland.org/rules-faq/"
     ],
     [
      "Calendar-365, tramonti NY nov. 2026",
      "https://www.calendar-365.com/calendar/2026/November.html"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Little_Island_at_Pier_55.jpg/960px-Little_Island_at_Pier_55.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:Little_Island_at_Pier_55.jpg",
     "a": "Praneeth Thalla",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "minetta",
    "type": "pasto",
    "name": "Cena alla Minetta Tavern",
    "t": "17:30",
    "min": 90,
    "lat": 40.7299881,
    "lng": -74.0007016,
    "desc": "Taverna storica del Village al 113 di MacDougal Street, angolo Minetta Lane.",
    "tip": "Cena tutti i giorni 17-23. Prenotazione al telefono (212) 475-3850 o su Resy. Alternative in zona: Joe's Pizza (7 Carmine Street), Mighty Quinn's West Village (75 Greenwich Avenue, tutti i giorni 11:30-21:30), Raoul's (180 Prince Street, cucina dalle 17:15, prenotazione solo su Resy fino a 30 giorni prima).",
    "src": [
     [
      "Minetta Tavern, orari",
      "https://www.minettatavernny.com/hours-and-location"
     ],
     [
      "Minetta Tavern, prenotazioni",
      "https://www.minettatavernny.com/reservations"
     ],
     [
      "Joe's Pizza, sedi",
      "https://www.joespizzanyc.com/locations"
     ],
     [
      "Mighty Quinn's, sedi e orari",
      "https://www.mightyquinnsbbq.com/see-our-locations-1/"
     ],
     [
      "Raoul's",
      "https://raouls.com/"
     ]
    ]
   },
   {
    "id": "back16",
    "type": "base",
    "name": "Rientro in hotel",
    "t": "19:15",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "leg": "{{A}} {{C}} {{E}} da W 4 St–Washington Sq: la {{E}} arriva a World Trade Center.",
    "legMode": "metro",
    "desc": "Giornata finita."
   }
  ]
 },
 {
  "id": "d17",
  "short": "Mar",
  "num": 17,
  "color": "#00933C",
  "ink": "#ffffff",
  "title": "Central Park, Fifth Avenue e Midtown East",
  "sunrise": "6:45",
  "sunset": "16:37",
  "plan": "Parco al mattino, poi le torri sottili sulla 57th Street, Fifth Avenue e Grand Central. Tramonto a Long Island City e sera a Times Square.",
  "stops": [
   {
    "id": "hotel17",
    "type": "base",
    "name": "Partenza dall'hotel",
    "t": "08:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "desc": "Colazione in zona."
   },
   {
    "id": "gray",
    "type": "pasto",
    "name": "Hot dog da Gray's Papaya",
    "t": "08:30",
    "min": 20,
    "lat": 40.7783878,
    "lng": -73.9815659,
    "desc": "Chiosco storico di hot dog e succhi tropicali al 2090 di Broadway, angolo 72nd Street: l'unica sede rimasta. È proprio all'uscita della stazione 72 St.",
    "tip": "Aperto tutti i giorni dalle 8 (fino alle 23; domenica fino alle 22).",
    "leg": "{{1}} da WTC Cortlandt a 72 St (circa 25 min).",
    "legMode": "metro",
    "src": [
     [
      "CBS New York (unica sede rimasta)",
      "https://www.cbsnews.com/newyork/news/end-of-an-era-grays-papaya-in-greenwich-village-goes-dark-and-vacant/"
     ],
     [
      "Google Maps (posizione e orari)",
      "https://www.google.com/maps"
     ]
    ]
   },
   {
    "id": "bethesda",
    "type": "extra",
    "name": "Bethesda Terrace, Central Park",
    "t": "09:10",
    "min": 35,
    "lat": 40.7743,
    "lng": -73.9712,
    "arch": "Calvert Vaux con Jacob Wrey Mould",
    "desc": "La terrazza sul lago con la fontana dell'Angelo delle Acque, inaugurata nel 1873. La scultrice, Emma Stebbins, fu la prima donna a ricevere l'incarico per una scultura pubblica a New York.",
    "tech": "Il giglio in mano all'angelo simboleggia la purezza dell'acqua portata in città dall'acquedotto Croton. Sotto la terrazza, nell'arcata, c'è il soffitto in piastrelle Minton restaurato negli anni '80.",
    "src": [
     [
      "Central Park Conservancy, Bethesda Terrace",
      "https://www.centralparknyc.org/articles/calvert-vaux-bethesda-terrace"
     ],
     [
      "Central Park Conservancy, Bethesda Fountain",
      "https://www.centralparknyc.org/locations/bethesda-fountain"
     ]
    ]
   },
   {
    "id": "steinway",
    "type": "edificio",
    "name": "Steinway Tower, 111 West 57th Street",
    "t": "10:05",
    "min": 15,
    "lat": 40.765,
    "lng": -73.9776,
    "arch": "SHoP Architects",
    "eng": "WSP",
    "year": "2021",
    "height": "435,3 m",
    "floors": "84",
    "desc": "Tra i grattacieli più snelli del mondo: solo 60 appartamenti. Ingloba la Steinway Hall, costruita nel 1924-25 da Warren & Wetmore e tutelata come landmark.",
    "tech": "In basso la struttura è in calcestruzzo armato, in alto in acciaio. Ha uno smorzatore a massa accordata. La facciata in blocchi di terracotta e i ritiri creano un profilo «sfumato» invece che a gradoni.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/111-west-57th-street/14320"
     ],
     [
      "NYC LPC, Steinway Hall, LP-2551",
      "https://s-media.nyc.gov/agencies/lpc/lp/2551.pdf"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/05_23_2022_Supertall_Building_111_West_57th_Street_from_Roof_NYC.jpg/960px-05_23_2022_Supertall_Building_111_West_57th_Street_from_Roof_NYC.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:05_23_2022_Supertall_Building_111_West_57th_Street_from_Roof_NYC.jpg",
     "a": "Wil540 art",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "53w53",
    "type": "edificio",
    "name": "53 West 53 (torre del MoMA)",
    "t": "10:30",
    "min": 15,
    "lat": 40.76167,
    "lng": -73.97833,
    "arch": "Ateliers Jean Nouvel (esecutivo: AAI Architects, SLCE)",
    "eng": "WSP",
    "year": "2019",
    "height": "320,1 m",
    "floors": "77",
    "desc": "Il primo grattacielo residenziale di Jean Nouvel, con 162 appartamenti, accanto al MoMA.",
    "tech": "Struttura in calcestruzzo, con un reticolo diagonale irregolare visibile in facciata. Si legge bene dalla 53rd Street guardando in alto.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/53-west-53/317"
     ],
     [
      "Il tuo Notion (USA Projects)",
      "https://app.notion.com/p/a3cf2e62d17d82c0994381a204b9e2d6"
     ],
     [
      "WSP",
      "https://www.wsp.com/en-gb/projects/53w53"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/53W53_from_Weehawken_September_2021_001.jpg/960px-53W53_from_Weehawken_September_2021_001.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:53W53_from_Weehawken_September_2021_001.jpg",
     "a": "King of Hearts",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "rockefeller",
    "type": "extra",
    "name": "Rockefeller Center",
    "t": "10:55",
    "min": 20,
    "lat": 40.7587,
    "lng": -73.9787,
    "arch": "The Associated Architects (Reinhard & Hofmeister; Corbett, Harrison & MacMurray; Hood, Godley & Fouilhoux)",
    "year": "anni '30",
    "desc": "Complesso su tre isolati a partire da Fifth Avenue. La costruzione del 30 Rockefeller Plaza iniziò nel marzo 1932. Sopra la pista di pattinaggio c'è il «Prometheus» di Paul Manship.",
    "src": [
     [
      "Rockefeller Center",
      "https://www.rockefellercenter.com/art-and-history/"
     ],
     [
      "NYC LPC, Radio City Music Hall, LP-0995",
      "https://s-media.nyc.gov/agencies/lpc/lp/0995.pdf"
     ]
    ]
   },
   {
    "id": "stpatrick",
    "type": "extra",
    "name": "St. Patrick's Cathedral e Fifth Avenue",
    "t": "11:20",
    "min": 20,
    "lat": 40.7585,
    "lng": -73.976,
    "desc": "Cattedrale neogotica su Fifth Avenue, di fronte al Rockefeller Center, dedicata nel 1879. Poi si cammina verso nord fino alla 57th Street.",
    "arch": "James Renwick Jr.",
    "year": "dedicata nel 1879",
    "src": [
     [
      "National Park Service, National Register",
      "https://npgallery.nps.gov/AssetDetail/NRIS/76001250"
     ],
     [
      "Arcidiocesi di New York",
      "https://www.archny.org/places/spc"
     ]
    ]
   },
   {
    "id": "432",
    "type": "edificio",
    "name": "432 Park Avenue",
    "t": "12:00",
    "min": 15,
    "lat": 40.76167,
    "lng": -73.97194,
    "arch": "Rafael Viñoly Architects (esecutivo: SLCE)",
    "eng": "WSP Cantor Seinuk",
    "year": "2015",
    "height": "425,7 m",
    "floors": "85",
    "desc": "Torre residenziale con un rapporto di snellezza di 1:15 e una griglia uguale su tutti i lati: ogni piano ha 24 finestre da 9,2 m².",
    "tech": "Struttura interamente in calcestruzzo, concepita come sette «edifici indipendenti» sovrapposti dentro la griglia. I vuoti tra un blocco e l'altro aiutano a resistere al vento. Ha uno smorzatore a massa accordata.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/432-park-avenue/13227"
     ],
     [
      "Rafael Viñoly Architects",
      "https://www.vinoly.com/works/432-park-avenue/"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/432_Park_Avenue,_NY_(cropped)2.jpg/960px-432_Park_Avenue,_NY_(cropped)2.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:432_Park_Avenue,_NY_(cropped)2.jpg",
     "a": "Percival Kestreltail",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "270park",
    "type": "edificio",
    "name": "270 Park Avenue (JPMorganChase)",
    "t": "12:30",
    "min": 15,
    "lat": 40.75576,
    "lng": -73.97547,
    "arch": "Foster + Partners (esecutivo: AAI Architects)",
    "eng": "Foster + Partners con Severud Associates",
    "year": "2025",
    "height": "423,1 m",
    "floors": "60-61",
    "desc": "La nuova sede di JPMorganChase, inaugurata a ottobre 2025, per 10.000 dipendenti. Secondo Foster è la più grande torre interamente elettrica della città, con emissioni operative nette pari a zero.",
    "tech": "Una struttura a «colonne a ventaglio» con controventi triangolari solleva la torre di circa 24 m da terra. Al piede ci sono una piazza pubblica su Madison Avenue e marciapiedi più larghi. Le fonti indicano 60 o 61 piani.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/jpmorgan-chase-world-headquarters/34450"
     ],
     [
      "Foster + Partners",
      "https://www.fosterandpartners.com/projects/270-park-avenue"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/270_Park_Avenue_2025.jpg/960px-270_Park_Avenue_2025.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:270_Park_Avenue_2025.jpg",
     "a": "Kidfly182",
     "l": "CC BY 4.0"
    }
   },
   {
    "id": "vanderbilt",
    "type": "edificio",
    "name": "One Vanderbilt",
    "t": "12:55",
    "min": 15,
    "lat": 40.7528,
    "lng": -73.9783,
    "arch": "Kohn Pedersen Fox (KPF)",
    "eng": "Severud Associates",
    "year": "2020",
    "height": "427 m",
    "floors": "62",
    "desc": "Torre per uffici accanto a Grand Central. In cambio di più cubatura, il costruttore SL Green si è impegnato a investire più di 220 milioni di dollari in opere pubbliche: una piazza pedonale su Vanderbilt Avenue e accessi alla metro migliori.",
    "tech": "Struttura composita acciaio-calcestruzzo. Riprende un'idea di William Wilgus, ingegnere capo di Grand Central: vendere i diritti aerei sopra la stazione e collegare gli edifici direttamente a treni e metro.",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/one-vanderbilt-avenue/15833"
     ],
     [
      "KPF",
      "https://www.kpf.com/story/one-vanderbilt"
     ],
     [
      "KPF, progetto",
      "https://www.kpf.com/project/one-vanderbilt"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/One_Vanderbilt_April_2023.jpg/960px-One_Vanderbilt_April_2023.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:One_Vanderbilt_April_2023.jpg",
     "a": "Percival Kestreltail",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "gct",
    "type": "extra",
    "name": "Grand Central Terminal",
    "t": "13:15",
    "min": 50,
    "lat": 40.7527,
    "lng": -73.9772,
    "arch": "Reed & Stem, poi Warren & Wetmore; ingegnere William J. Wilgus",
    "year": "1913",
    "desc": "Stazione Beaux-Arts inaugurata il 2 febbraio 1913 e tutelata come landmark dal 1967. Nell'angolo nord-ovest del soffitto stellato della sala principale c'è un riquadro di circa 23 × 46 cm lasciato sporco di proposito durante il restauro degli anni '90.",
    "tech": "Davanti all'Oyster Bar c'è la Whispering Gallery con le volte in piastrelle Guastavino: se sussurri contro la parete all'inizio di un arco, chi sta nell'angolo opposto ti sente.",
    "src": [
     [
      "NYC LPC, LP-0266",
      "https://s-media.nyc.gov/agencies/lpc/lp/0266.pdf"
     ],
     [
      "Grand Central Terminal",
      "https://grandcentralterminal.com/history/"
     ],
     [
      "MTA",
      "https://away.mta.info/articles/grand-central-terminal-tour-secrets-fun-facts-history/"
     ]
    ]
   },
   {
    "id": "shake17",
    "type": "pasto",
    "name": "Shake Shack",
    "t": "14:10",
    "min": 40,
    "lat": 40.7527,
    "lng": -73.9772,
    "approx": true,
    "desc": "Pranzo veloce. Cerca su Maps la sede aperta più vicina: in zona Grand Central e nel Theater District ce ne sono diverse."
   },
   {
    "id": "chrysler",
    "type": "extra",
    "name": "Chrysler Building",
    "t": "14:55",
    "min": 10,
    "lat": 40.7516,
    "lng": -73.9755,
    "arch": "William Van Alen",
    "year": "1928-1930",
    "desc": "Con i 1.046 piedi (319 m) raggiunti grazie alla guglia, fu per un periodo l'edificio più alto del mondo, prima dell'Empire State Building.",
    "tech": "La guglia, di 185 piedi, fu montata a novembre 1929. Nell'atrio ci sono marmo marocchino, pannelli luminosi in onice, un murale di Edward Trumbull sul soffitto e finiture in acciaio «Nirosta» al cromo-nichel.",
    "tip": "Non ho una fonte aggiornata sull'accesso all'atrio: verifica sul posto.",
    "src": [
     [
      "NYC LPC, LP-0996",
      "https://s-media.nyc.gov/agencies/lpc/lp/0996.pdf"
     ]
    ]
   },
   {
    "id": "hunters",
    "type": "tramonto",
    "name": "Hunter's Point South Park, Queens",
    "t": "15:45",
    "min": 70,
    "lat": 40.7415,
    "lng": -73.9582,
    "approx": true,
    "arch": "Weiss/Manfredi e SWA/Balsley, con Arup",
    "desc": "Parco di 30 acri su un ex waterfront industriale, con vista sullo skyline di Manhattan. Il tramonto è alle 16:37 dietro Manhattan.",
    "tech": "All'estremità sud c'è un belvedere a sbalzo largo 40 piedi, in acciaio e legno. Il prato centrale è progettato per allagarsi, con piante autoctone resistenti al sale.",
    "leg": "{{7}} da Grand Central a Vernon Blvd–Jackson Av (circa 10 min), poi 8 min a piedi.",
    "legMode": "metro",
    "src": [
     [
      "Weiss/Manfredi",
      "https://www.weissmanfredi.com/projects/15-hunter-s-point-south-waterfront-park"
     ],
     [
      "Calendar-365, tramonti NY nov. 2026",
      "https://www.calendar-365.com/calendar/2026/November.html"
     ]
    ]
   },
   {
    "id": "times",
    "type": "extra",
    "name": "Times Square",
    "t": "17:30",
    "min": 45,
    "lat": 40.758,
    "lng": -73.9855,
    "arch": "Choi Ropiha (concorso Van Alen 1999), sviluppato da Perkins Eastman (scalinata TKTS)",
    "year": "2008",
    "desc": "Da vedere dopo il buio. I 24 gradini rossi in vetro sopra il botteghino TKTS si illuminano di notte e sono il punto di osservazione migliore.",
    "tech": "La scalinata è descritta come una delle strutture interamente in vetro più complesse al mondo.",
    "leg": "{{7}} da Vernon Blvd–Jackson Av a Times Sq–42 St (circa 15 min).",
    "legMode": "metro",
    "src": [
     [
      "TDF",
      "https://www.tdf.org/on-stage/tdf-stages/just-steps-away/"
     ]
    ]
   },
   {
    "id": "hill",
    "type": "pasto",
    "name": "Cena da Hill Country Barbecue Market",
    "t": "18:40",
    "min": 90,
    "lat": 40.7441664,
    "lng": -73.9903333,
    "desc": "Barbecue in stile texano al 30 di West 26th Street, nella zona di NoMad.",
    "tip": "Martedì 12-22. Ha riaperto a ottobre 2026 dopo una chiusura temporanea di due mesi: ricontrolla prima di andare. Alternative vicino a Times Square: Joe's Pizza (1435 Broadway) o Mighty Quinn's Midtown West (1407 Broadway, 11-21:30).",
    "src": [
     [
      "OpenTable, Hill Country",
      "https://opentable.com/r/hill-country-barbecue-market-flatiron-new-york"
     ],
     [
      "Joe's Pizza, sedi",
      "https://www.joespizzanyc.com/locations"
     ],
     [
      "Mighty Quinn's, sedi e orari",
      "https://www.mightyquinnsbbq.com/see-our-locations-1/"
     ]
    ]
   },
   {
    "id": "back17",
    "type": "base",
    "name": "Rientro in hotel",
    "t": "20:15",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "leg": "{{R}} {{W}} da 28 St a Rector St (circa 15 min), poi pochi minuti a piedi.",
    "legMode": "metro",
    "desc": "Giornata finita."
   }
  ]
 },
 {
  "id": "d18",
  "short": "Mer",
  "num": 18,
  "color": "#FF6319",
  "ink": "#ffffff",
  "title": "Midtown West, Lower East Side e Williamsburg",
  "sunrise": "6:46",
  "sunset": "16:36",
  "plan": "Quattro edifici entro mezzogiorno, poi il museo sul Bowery, il Williamsburg Bridge a piedi e il tramonto sul fiume.",
  "stops": [
   {
    "id": "hotel18",
    "type": "base",
    "name": "Partenza dall'hotel",
    "t": "08:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "desc": "Colazione in zona."
   },
   {
    "id": "hearst",
    "type": "edificio",
    "name": "Hearst Tower",
    "t": "08:45",
    "min": 15,
    "lat": 40.76656,
    "lng": -73.98353,
    "arch": "Foster + Partners (esecutivo: AAI Architects)",
    "eng": "WSP Cantor Seinuk",
    "year": "2006",
    "height": "182 m",
    "floors": "46",
    "desc": "Torre per uffici costruita dentro l'involucro svuotato dello Hearst Magazine Building (1927-28, Joseph Urban con George B. Post & Sons), tutelato come landmark. Quel basamento era stato pensato fin dall'inizio per una torre mai costruita.",
    "tech": "Struttura interamente in acciaio a diagrid, che ha fatto risparmiare circa 2.000 tonnellate d'acciaio. Circa il 90% dell'acciaio è riciclato. Fu il primo edificio per uffici commerciali di New York con certificazione LEED Gold.",
    "leg": "{{1}} da WTC Cortlandt a 59 St–Columbus Circle (circa 20 min), poi 5 min a piedi.",
    "legMode": "metro",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/hearst-tower/2245"
     ],
     [
      "NYC LPC, LP-1625",
      "https://s-media.nyc.gov/agencies/lpc/lp/1625.pdf"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hearst_Tower_(August_2024).jpg/960px-Hearst_Tower_(August_2024).jpg",
     "p": "https://commons.wikimedia.org/wiki/File:Hearst_Tower_(August_2024).jpg",
     "a": "Dreamword",
     "l": "CC BY 4.0"
    }
   },
   {
    "id": "via57",
    "type": "edificio",
    "name": "VIA 57 West",
    "t": "09:30",
    "min": 20,
    "lat": 40.7706,
    "lng": -73.9936,
    "arch": "BIG (con SLCE Architects)",
    "year": "2016",
    "height": "470 piedi (143 m) all'angolo nord-est",
    "desc": "BIG lo chiama «Courtscraper», un incrocio tra il cortile e il grattacielo. Il volume è basso a sud-ovest, così il vicino Helena Tower non perde la vista sul fiume, e sale fino a 470 piedi all'angolo nord-est.",
    "tech": "Il cortile al centro dell'isolato è riservato ai residenti. Il volume si legge meglio dalla 12th Avenue o da Hudson River Park.",
    "src": [
     [
      "BIG",
      "https://big.dk/projects/via-57-west-2350"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/VIA_57_West_-_exterior.jpg/960px-VIA_57_West_-_exterior.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:VIA_57_West_-_exterior.jpg",
     "a": "Razvan Dinu",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "nyt",
    "type": "edificio",
    "name": "New York Times Building",
    "t": "10:20",
    "min": 15,
    "lat": 40.7561,
    "lng": -73.99,
    "arch": "Renzo Piano Building Workshop con FXFOWLE",
    "eng": "Thornton Tomasetti",
    "year": "2007",
    "height": "318,8 m",
    "floors": "52",
    "desc": "Torre per uffici con una seconda pelle di bastoncini di ceramica davanti a vetrate a tutta altezza.",
    "tech": "Struttura in acciaio. I bastoncini di ceramica riducono il carico termico. Nell'atrio, diviso dal nucleo, c'è un giardino a cielo aperto di 21 × 21 m con sette betulle.",
    "leg": "Lungo la 10th Avenue.",
    "legMode": "walk",
    "src": [
     [
      "CTBUH Skyscraper Center",
      "https://www.skyscrapercenter.com/building/the-new-york-times-building/423"
     ],
     [
      "Renzo Piano Building Workshop",
      "https://www.rpbw.com/project/the-new-york-times-building"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/New_york_times_building.jpg/960px-New_york_times_building.jpg",
     "p": "https://commons.wikimedia.org/wiki/File:New_york_times_building.jpg",
     "a": "Defears",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "moynihan",
    "type": "edificio",
    "name": "Moynihan Train Hall",
    "t": "11:05",
    "min": 25,
    "lat": 40.7508,
    "lng": -73.9944,
    "arch": "SOM",
    "year": "2021",
    "desc": "La nuova sala di Penn Station, aperta il 1° gennaio 2021 nel Farley Building, l'ex ufficio postale del 1913 progettato da McKim, Mead & White, lo stesso studio della Penn Station originale.",
    "tech": "Quattro volte a catenaria, ognuna con più di 500 pannelli in vetro e acciaio, salgono fino a 92 piedi (28 m). I pannelli sono più spessi ai bordi, dove i carichi sono maggiori. Tre grandi capriate originali in acciaio, prima nascoste, ora incorniciano il lucernario.",
    "src": [
     [
      "SOM",
      "https://www.som.com/projects/moynihan-train-hall/"
     ],
     [
      "SOM, inaugurazione",
      "https://www.som.com/news/moynihan-train-hall-monumental-civic-project-that-restores-grandeur-of-train-travel-in-new-york-opens-january-1/"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Moynihan_Train_Hall_interior,_Dec_27_2022_(cropped).jpg/960px-Moynihan_Train_Hall_interior,_Dec_27_2022_(cropped).jpg",
     "p": "https://commons.wikimedia.org/wiki/File:Moynihan_Train_Hall_interior,_Dec_27_2022_(cropped).jpg",
     "a": "D. Benjamin Miller",
     "l": "CC0"
    }
   },
   {
    "id": "newmuseum",
    "type": "edificio",
    "name": "New Museum",
    "t": "12:30",
    "min": 45,
    "lat": 40.722239,
    "lng": -73.993219,
    "arch": "SANAA (2007); ampliamento OMA (Shohei Shigematsu, Rem Koolhaas) con Cooper Robertson",
    "year": "2007 e 2026",
    "desc": "Il volume a scatole sovrapposte di SANAA e, accanto, l'ampliamento di OMA aperto il 21 marzo 2026. L'ampliamento aggiunge circa 5.600 m² e porta il museo a circa 11.150 m².",
    "tech": "L'ampliamento è allineato all'edificio di SANAA e cresce in verticale e all'interno senza alterarne la forma. Ha un atrio con scala e una Sky Room al settimo piano.",
    "tip": "Orario 11-18, chiuso il lunedì, biglietti a fascia oraria da prenotare online. Verifica prima sul sito del museo.",
    "leg": "10 min a piedi a 34 St–Herald Sq, poi {{B}} {{D}} {{F}} {{M}} a Broadway–Lafayette (circa 12 min) e 8 min a piedi.",
    "legMode": "metro",
    "src": [
     [
      "designboom",
      "https://www.designboom.com/architecture/new-museum-oma-expansion-march-2026-nyc-cooper-robertson-sanaa-01-13-2026/"
     ],
     [
      "New York YIMBY (orari)",
      "https://newyorkyimby.com/2026/03/new-museum-opens-with-new-seven-story-expansion-in-bowery-manhattan.html"
     ],
     [
      "Dezeen",
      "https://www.dezeen.com/2026/03/18/oma-new-museum-new-york-extension/"
     ]
    ],
    "photo": {
     "u": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/New_Museum_in_New_York_City_2015.JPG/960px-New_Museum_in_New_York_City_2015.JPG",
     "p": "https://commons.wikimedia.org/wiki/File:New_Museum_in_New_York_City_2015.JPG",
     "a": "MusikAnimal",
     "l": "CC BY-SA 4.0"
    }
   },
   {
    "id": "katz",
    "type": "pasto",
    "name": "Pranzo da Katz's Delicatessen",
    "t": "13:30",
    "min": 50,
    "lat": 40.722233,
    "lng": -73.987429,
    "approx": false,
    "desc": "La gastronomia del 1888 al 205 di East Houston Street, angolo Ludlow Street, famosa per il panino al pastrami.",
    "tip": "Lunedì-giovedì 8-23. All'ingresso si prende un biglietto: non perderlo.",
    "src": [
     [
      "Katz's, orari",
      "https://katzsdelicatessen.com/address"
     ]
    ]
   },
   {
    "id": "wbridge",
    "type": "extra",
    "name": "Williamsburg Bridge a piedi",
    "t": "14:30",
    "min": 10,
    "lat": 40.7172,
    "lng": -73.987,
    "approx": true,
    "year": "1903",
    "desc": "All'apertura, nel 1903, era il ponte sospeso più lungo del mondo: campata principale di 1.600 piedi (488 m), 7.308 piedi (2,2 km) di lunghezza totale. Ha una passerella pedonale e una ciclabile.",
    "src": [
     [
      "NYC DOT",
      "https://www.nyc.gov/html/dot/html/infrastructure/williamsburg-bridge.shtml"
     ]
    ]
   },
   {
    "id": "domino",
    "type": "extra",
    "name": "Domino Park",
    "t": "15:20",
    "min": 30,
    "lat": 40.7146,
    "lng": -73.9672,
    "arch": "James Corner Field Operations",
    "year": "2018",
    "desc": "Parco di 5 acri, lungo un quarto di miglio, sul sito dell'ex raffineria di zucchero Domino.",
    "tech": "L'Artifact Walk espone pezzi recuperati dalla raffineria: 21 colonne originali del magazzino dello zucchero grezzo, gru a portale, coclee, nastri a tazze e serbatoi dello sciroppo. Il parco è rialzato sopra la quota di allagamento FEMA.",
    "src": [
     [
      "Field Operations",
      "https://www.fieldoperations.net/project-details/project/domino-park.html"
     ]
    ]
   },
   {
    "id": "n5",
    "type": "tramonto",
    "name": "North 5th Street Pier & Park",
    "t": "16:05",
    "min": 65,
    "lat": 40.7213,
    "lng": -73.9632,
    "approx": true,
    "desc": "Il molo di Williamsburg con vista sullo skyline di Midtown. Il tramonto è alle 16:36, dietro Manhattan.",
    "tip": "Arriva con 20-30 minuti di anticipo.",
    "src": [
     [
      "Calendar-365, tramonti NY nov. 2026",
      "https://www.calendar-365.com/calendar/2026/November.html"
     ]
    ]
   },
   {
    "id": "joesbk",
    "type": "pasto",
    "name": "Cena da Joe's Pizza Williamsburg",
    "t": "17:30",
    "min": 60,
    "lat": 40.7168896,
    "lng": -73.958936,
    "desc": "Pizza al trancio newyorkese al 216 di Bedford Avenue, vicino alla fermata Bedford Av della linea L.",
    "tip": "Secondo Google Maps aperto fino a tarda notte (lunedì 10:30-3).",
    "src": [
     [
      "Joe's Pizza, sedi",
      "https://www.joespizzanyc.com/locations"
     ],
     [
      "Google Maps (posizione e orari)",
      "https://www.google.com/maps"
     ]
    ]
   },
   {
    "id": "back18",
    "type": "base",
    "name": "Rientro in hotel",
    "t": "18:45",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "leg": "{{L}} da Bedford Av a 14 St–8 Av, poi {{E}} fino a World Trade Center (circa 40 min). In alternativa taxi.",
    "legMode": "metro",
    "desc": "Giornata finita."
   }
  ]
 },
 {
  "id": "d19",
  "short": "Gio",
  "num": 19,
  "color": "#FCCC0A",
  "ink": "#16181b",
  "title": "SoHo, Chinatown, Storefront e partenza",
  "sunrise": "6:47",
  "sunset": "16:35",
  "plan": "Mezza giornata a nord dell'hotel, con Storefront all'apertura di mezzogiorno. Si lascia l'hotel tra le 15:00 e le 15:30.",
  "stops": [
   {
    "id": "hotel19",
    "type": "base",
    "name": "Partenza dall'hotel",
    "t": "08:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "desc": "Lascia i bagagli in hotel se possibile (chiedi alla reception) e parti leggero."
   },
   {
    "id": "balthazar",
    "type": "pasto",
    "name": "Colazione da Balthazar",
    "t": "08:30",
    "min": 60,
    "lat": 40.722668,
    "lng": -73.9982298,
    "desc": "Brasserie francese al 80 di Spring Street, a SoHo.",
    "tip": "Colazione nei giorni feriali 8-11; prenotazioni al (212) 965-1414.",
    "src": [
     [
      "Balthazar, orari",
      "https://balthazarny.com/contact-us/"
     ]
    ]
   },
   {
    "id": "soho",
    "type": "extra",
    "name": "SoHo, Greene Street",
    "t": "09:40",
    "min": 50,
    "lat": 40.7243,
    "lng": -74.0024,
    "desc": "Il cuore del SoHo–Cast Iron Historic District, tutelato dalla Landmarks Preservation Commission: strade di edifici ottocenteschi con facciate in ghisa.",
    "src": [
     [
      "NYC LPC, mappa del distretto",
      "https://www.nyc.gov/assets/lpc/downloads/pdf/maps/HistoricDistrictMaps/Manhattan/SoHo_Cast_Iron.pdf"
     ]
    ]
   },
   {
    "id": "chinatown",
    "type": "extra",
    "name": "Chinatown, Mott Street e Doyers Street",
    "t": "10:50",
    "min": 60,
    "lat": 40.7156,
    "lng": -73.9987,
    "desc": "Le vie principali di Chinatown. Buon momento per una colazione tardiva a base di dumpling.",
    "tip": "Orari dei locali da verificare su Maps."
   },
   {
    "id": "storefront",
    "type": "extra",
    "name": "Storefront for Art and Architecture",
    "t": "12:00",
    "min": 40,
    "lat": 40.7205,
    "lng": -73.9971,
    "arch": "Steven Holl e Vito Acconci",
    "year": "1993",
    "desc": "Galleria di architettura in uno spazio triangolare al 97 di Kenmare Street.",
    "tech": "La facciata è fatta di pannelli incernierati, disposti come un puzzle e in un materiale ibrido di calcestruzzo e fibre riciclate. Quando sono bloccati aperti, la facciata scompare e la galleria si estende sul marciapiede.",
    "tip": "Aperta mercoledì-sabato 12-18.",
    "src": [
     [
      "Steven Holl Architects",
      "https://www.stevenholl.com/project/storefront-for-art-and-architecture/"
     ],
     [
      "Storefront, info visita",
      "https://storefrontnews.org/?p=375"
     ]
    ]
   },
   {
    "id": "quinns",
    "type": "pasto",
    "name": "Pranzo da Mighty Quinn's Battery Park City",
    "t": "13:15",
    "min": 60,
    "lat": 40.7125422,
    "lng": -74.0156663,
    "desc": "Barbecue al 225 di Liberty Street, dentro Brookfield Place, a pochi minuti dall'hotel.",
    "tip": "Lunedì-sabato 11-21.",
    "leg": "Lungo West Broadway, oppure taxi.",
    "legMode": "walk",
    "src": [
     [
      "Mighty Quinn's, sedi e orari",
      "https://www.mightyquinnsbbq.com/see-our-locations-1/"
     ]
    ]
   },
   {
    "id": "leave19",
    "type": "base",
    "name": "Ritiro bagagli e partenza",
    "t": "15:00",
    "lat": 40.709,
    "lng": -74.0118,
    "approx": true,
    "desc": "Lascia l'hotel tra le 15:00 e le 15:30 per il volo delle 21:00."
   }
  ]
 }
];

const OFFLINE_LABELS = [["Tribeca",40.7195,-74.0085],["Financial District",40.7085,-74.009],["SoHo",40.724,-74.001],["Chinatown",40.715,-74],["Lower East Side",40.7175,-73.9835],["Greenwich Village",40.7335,-74.001],["Chelsea",40.745,-74.001],["Hudson Yards",40.754,-74.003],["Midtown",40.7545,-73.984],["Central Park",40.77,-73.973],["Williamsburg",40.718,-73.957],["DUMBO",40.703,-73.989],["Long Island City",40.744,-73.95]];

/* Percorsi a piedi reali tra tappe consecutive: [metri, secondi].
   Fonte: OSRM, profilo pedonale, routing.openstreetmap.de (dati OpenStreetMap), calcolati il 1° novembre 2026. */
const WALK = {"d15":[[1290,1032],[222,178],[1004,803],[265,214],[424,340],[401,325],[312,249],[1046,837],[236,189],[439,355],[2247,1798],[680,544],[713,571],[2953,2362]],"d16":[[5601,4481],[350,280],[249,199],[131,105],[1540,1232],[603,482],[1641,1313],[1369,1095],[1114,891],[1879,1503],[2650,2120]],"d17":[[8405,6725],[1144,906],[1383,1107],[518,415],[522,417],[320,256],[556,445],[845,676],[453,362],[132,106],[0,0],[212,170],[2587,1636],[3741,2560],[1717,1377],[4539,3632]],"d18":[[7091,5672],[1024,819],[2249,1799],[770,616],[3681,2947],[652,524],[727,582],[2906,2325],[962,769],[744,595],[5582,4466]],"d19":[[2039,1631],[424,339],[1291,1032],[630,504],[2458,1966],[619,495]]};
