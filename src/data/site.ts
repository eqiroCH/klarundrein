// Zentrale Inhalte & Firmendaten. Offene Punkte (vom Kunden bestätigen lassen) stehen im README.

export const company = {
  name: 'Klar und Rein GmbH',
  brand: 'Klar und Rein',
  street: 'Haldenstrasse 11',
  zip: '8134',
  city: 'Adliswil',
  canton: 'ZH',
  uid: 'CHE-362.951.704',
  register: 'Handelsregisteramt des Kantons Zürich',
  founded: 2025,
  // TODO: Name der Geschäftsführung fürs Impressum (solange null, wird die Zeile ausgeblendet)
  manager: null as string | null,
  email: 'info@klarundrein.ch',
  phone: '076 561 17 79',
  // TODO: bestätigen, dass die Nummer auf WhatsApp erreichbar ist
  whatsapp: true,
  instagram: 'https://www.instagram.com/klar.und.rein.gmbh/',
  url: 'https://klarundrein.ch',
  geo: { lat: 47.31067, lng: 8.522645 },
}

const digits = company.phone.replace(/\D/g, '').replace(/^0/, '41')
export const phoneHref = `tel:+${digits}`
export const whatsappHref = company.whatsapp
  ? `https://wa.me/${digits}?text=${encodeURIComponent('Hallo Klar und Rein, ich hätte gerne eine Offerte für ')}`
  : null

/** Einzugsgebiet: Nachbargemeinden zuerst, dann der Rest des Kantons. */
export const areas = [
  'Adliswil',
  'Langnau am Albis',
  'Kilchberg',
  'Rüschlikon',
  'Thalwil',
  'Horgen',
  'Oberrieden',
  'Zürich-Wollishofen',
  'Zürich-Leimbach',
  'Zürich-Enge',
  'Stadt Zürich',
] as const

export type Faq = { q: string; a: string }

export type Service = {
  slug: string
  name: string
  /** Kartentitel wie auf der bisherigen Website */
  cardTitle: string
  /** Kurzzeile fürs Menü */
  teaser: string
  /** Kartentext wie auf der bisherigen Website */
  short: string
  /** Bild in /public/images: <image>.webp (Karte) und <image>-wide(-sm).webp (Seitenkopf) */
  image: string
  imageAlt: string
  metaTitle: string
  metaDescription: string
  h1: string
  lead: string
  intro: string[]
  includesTitle: string
  includes: string[]
  idealFor: string[]
  faqs: Faq[]
}

export const services: Service[] = [
  {
    slug: 'umzugsreinigung-adliswil',
    name: 'Umzugsreinigung',
    cardTitle: 'Umzugsreinigung',
    teaser: 'Endreinigung mit Abnahmegarantie',
    short: 'Für eine ordentliche und problemlose Wohnungsübergabe. Sorgfältige Reinigung mit Abnahmegarantie.',
    image: 'umzug',
    imageAlt: 'Frau packt beim Umzug Kartons in einer hellen Wohnung',
    metaTitle: 'Umzugsreinigung Adliswil mit Abnahmegarantie | Klar und Rein',
    metaDescription:
      'Umzugs- und Endreinigung in Adliswil, Langnau, Kilchberg, Thalwil und Zürich – gründlich und mit Abnahmegarantie. Jetzt kostenlose Offerte anfragen.',
    h1: 'Umzugsreinigung in Adliswil – mit Abnahmegarantie',
    lead: 'Sie ziehen um, wir kümmern uns um die Endreinigung. So geben Sie Ihre Wohnung ohne Stress und ohne Nachreinigung an die Verwaltung zurück.',
    intro: [
      'Bei der Wohnungsabgabe schaut die Verwaltung genau hin: Backofen, Dampfabzug, Fensterfalze, Storen, Kalk im Bad. Genau dort setzen wir an. Wir reinigen Ihre Wohnung oder Ihr Haus nach der in der Schweiz üblichen Abgabe-Checkliste.',
      'Mit unserer Abnahmegarantie sind Sie auf der sicheren Seite: Beanstandet die Verwaltung bei der Übergabe etwas an der Reinigung, reinigen wir kostenlos nach.',
    ],
    includesTitle: 'Das ist in der Umzugsreinigung inbegriffen',
    includes: [
      'Küche komplett: Backofen, Bleche, Kochfeld, Dampfabzug inkl. Filter, Kühlschrank, Schränke innen und aussen',
      'Bad und WC: Lavabo, Dusche, Badewanne, WC, Armaturen und Plättli – inklusive Entkalken',
      'Fenster mit Rahmen und Falzen, Storen bzw. Rollläden',
      'Böden, Sockelleisten, Türen und Türrahmen',
      'Einbauschränke innen und aussen',
      'Heizkörper, Lichtschalter, Steckdosen und Lampen',
      'Balkon oder Sitzplatz',
      'Keller, Estrich und Garage nach Absprache',
    ],
    idealFor: ['Mietwohnungen und Häuser', 'Wohnungsabgabe an die Verwaltung', 'Verkauf oder Übergabe von Eigentum'],
    faqs: [
      {
        q: 'Was kostet eine Umzugsreinigung in Adliswil?',
        a: 'Der Preis hängt von der Grösse der Wohnung, der Anzahl Fenster und dem Zustand ab. Sie erhalten von uns eine kostenlose und unverbindliche Offerte – nach einer kurzen Besichtigung oder anhand von Fotos. So wissen Sie vorher, was die Reinigung kostet.',
      },
      {
        q: 'Was bedeutet Abnahmegarantie?',
        a: 'Beanstandet die Verwaltung bei der Wohnungsabgabe etwas an der Reinigung, reinigen wir die bemängelten Stellen kostenlos nach – bis die Wohnung abgenommen ist.',
      },
      {
        q: 'Muss ich bei der Wohnungsabgabe dabei sein?',
        a: 'Das ist Ihnen überlassen. Auf Wunsch sind wir bei der Abnahme mit der Verwaltung vor Ort und kümmern uns direkt um allfällige Punkte.',
      },
      {
        q: 'Wann sollte ich die Umzugsreinigung buchen?',
        a: 'Am besten, sobald Ihr Abgabetermin feststeht. Besonders Ende Monat und auf die offiziellen Umzugstermine hin sind die Termine schnell vergeben.',
      },
    ],
  },
  {
    slug: 'wohnungsreinigung-adliswil',
    name: 'Wohnungsreinigung',
    cardTitle: 'Wohnungsreinigung',
    teaser: 'Regelmässig oder als Tiefenreinigung',
    short: 'Ob regelmässig oder nach Bedarf. Wir reinigen Ihre Wohnung gründlich und sorgfältig, damit Sie sich wohlfühlen können.',
    image: 'wohnung',
    imageAlt: 'Reinigungskraft wischt den Boden einer hellen Wohnung',
    metaTitle: 'Wohnungsreinigung Adliswil – regelmässig oder einmalig | Klar und Rein',
    metaDescription:
      'Wohnungsreinigung und Tiefenreinigung in Adliswil und Umgebung. Regelmässig oder einmalig, gründlich und zuverlässig. Kostenlose Offerte anfragen.',
    h1: 'Wohnungsreinigung in Adliswil',
    lead: 'Mehr Zeit für sich, ein sauberes Zuhause: Wir reinigen Ihre Wohnung regelmässig oder einmalig – gründlich, zuverlässig und so, wie Sie es wünschen.',
    intro: [
      'Ob wöchentlich, alle zwei Wochen oder einmalig vor einem besonderen Anlass: Wir passen die Wohnungsreinigung Ihrem Alltag an. Sie sagen uns, worauf es Ihnen ankommt, wir kümmern uns darum.',
      'Für Wohnungen, die eine Extraportion Aufmerksamkeit brauchen – etwa nach dem Winter, nach einer längeren Abwesenheit oder vor einem Einzug – bieten wir eine Tiefenreinigung an, bei der wir auch die Stellen reinigen, die im Alltag liegen bleiben.',
    ],
    includesTitle: 'Das gehört zur Wohnungsreinigung',
    includes: [
      'Staubsaugen und feucht Aufnehmen aller Böden',
      'Küche: Arbeitsflächen, Kochfeld, Fronten, Spüle und Geräte aussen',
      'Bad und WC: gründliche Reinigung und Entkalken',
      'Abstauben von Möbeln, Regalen, Ablagen und Lampen',
      'Türen, Lichtschalter und Griffe',
      'Bei der Tiefenreinigung zusätzlich: Schränke innen, Backofen, Kühlschrank, Fenster, Heizkörper und Sockelleisten',
    ],
    idealFor: ['Berufstätige und Familien', 'Seniorinnen und Senioren', 'Einmalige Grund- oder Tiefenreinigung'],
    faqs: [
      {
        q: 'Wie oft kommen Sie zur Wohnungsreinigung?',
        a: 'So oft Sie möchten: wöchentlich, alle zwei Wochen, monatlich oder einmalig. Wir vereinbaren einen festen Rhythmus, der zu Ihnen passt.',
      },
      {
        q: 'Muss ich während der Reinigung zu Hause sein?',
        a: 'Nein. Viele unserer Kundinnen und Kunden übergeben uns einen Schlüssel. Wir gehen mit Ihrem Zuhause und Ihren Sachen sorgfältig um.',
      },
      {
        q: 'Was ist der Unterschied zwischen Wohnungs- und Tiefenreinigung?',
        a: 'Die Wohnungsreinigung hält Ihr Zuhause im Alltag sauber. Bei der Tiefenreinigung reinigen wir zusätzlich Stellen, die sonst liegen bleiben – zum Beispiel Schränke innen, Backofen, Fenster, Heizkörper und Fugen.',
      },
    ],
  },
  {
    slug: 'bueroreinigung-adliswil',
    name: 'Büroreinigung',
    cardTitle: 'Büroreinigungen',
    teaser: 'Unterhaltsreinigung nach Ihren Zeiten',
    short: 'Wir sorgen für saubere Büroräume und passen uns Ihren Terminwünschen an.',
    image: 'buero',
    imageAlt: 'Sauberes Sitzungszimmer mit Holztisch und Bürostühlen',
    metaTitle: 'Büroreinigung Adliswil – Unterhaltsreinigung für Firmen | Klar und Rein',
    metaDescription:
      'Büroreinigung und Unterhaltsreinigung für Büros, Praxen und Geschäftsräume in Adliswil und Umgebung. Flexibel, auch ausserhalb der Bürozeiten.',
    h1: 'Büroreinigung in Adliswil',
    lead: 'Ein sauberes Büro wirkt auf Kundschaft und Team. Wir reinigen Ihre Büro- und Geschäftsräume regelmässig – zuverlässig und dann, wenn es Ihren Betrieb nicht stört.',
    intro: [
      'Wir übernehmen die Unterhaltsreinigung von Büros, Praxen, Ateliers und kleineren Gewerberäumen in Adliswil und im ganzen Kanton Zürich. Den Umfang und die Intervalle legen wir gemeinsam mit Ihnen fest.',
      'Auf Wunsch reinigen wir früh morgens, abends oder am Wochenende – so läuft Ihr Betrieb ungestört weiter. Sie haben eine feste Ansprechperson und klare Absprachen.',
    ],
    includesTitle: 'Das gehört zur Büroreinigung',
    includes: [
      'Arbeitsplätze, Tische und Ablagen',
      'Böden saugen und feucht reinigen',
      'Küche bzw. Pausenraum inklusive Geschirrspüler und Kaffeemaschine aussen',
      'Sanitäranlagen reinigen und Verbrauchsmaterial auffüllen',
      'Abfall und Recycling leeren',
      'Glastüren, Trennwände und Eingangsbereich',
    ],
    idealFor: ['Büros und Agenturen', 'Arzt- und Therapiepraxen', 'Läden, Ateliers und Gewerberäume'],
    faqs: [
      {
        q: 'Reinigen Sie auch ausserhalb der Bürozeiten?',
        a: 'Ja. Wir richten uns nach Ihrem Betrieb und reinigen auf Wunsch früh morgens, abends oder am Wochenende.',
      },
      {
        q: 'Wie oft sollte ein Büro gereinigt werden?',
        a: 'Das hängt von der Grösse und Nutzung ab. Viele Büros lassen ein- bis dreimal pro Woche reinigen, Sanitäranlagen und Küche häufiger. Wir beraten Sie gerne und erstellen eine passende Offerte.',
      },
      {
        q: 'Gibt es einen Vertrag mit langer Laufzeit?',
        a: 'Wir vereinbaren Umfang, Intervall und Preis transparent in einer Offerte. Die Details besprechen wir gerne persönlich mit Ihnen.',
      },
    ],
  },
  {
    slug: 'treppenhausreinigung-adliswil',
    name: 'Treppenhausreinigung',
    cardTitle: 'Treppenhausreinigungen',
    teaser: 'Für Liegenschaften und Verwaltungen',
    short: 'Ein sauberes Treppenhaus hinterlässt einen positiven Eindruck. Böden, Geländer und Eingangsbereiche werden zuverlässig gereinigt.',
    image: 'treppenhaus',
    imageAlt: 'Helles, sauberes Treppenhaus mit Geländer',
    metaTitle: 'Treppenhausreinigung Adliswil für Liegenschaften | Klar und Rein',
    metaDescription:
      'Treppenhausreinigung für Mehrfamilienhäuser, Verwaltungen und Eigentümergemeinschaften in Adliswil und Umgebung. Regelmässig und zuverlässig.',
    h1: 'Treppenhausreinigung in Adliswil',
    lead: 'Das Treppenhaus ist die Visitenkarte jeder Liegenschaft. Wir halten Treppen, Eingänge und Gemeinschaftsräume sauber – im vereinbarten Rhythmus.',
    intro: [
      'Für Verwaltungen, Eigentümergemeinschaften und private Vermieter übernehmen wir die regelmässige Reinigung von Treppenhäusern und Allgemeinflächen in Adliswil und Umgebung.',
      'Sie bestimmen das Intervall – wöchentlich, alle zwei Wochen oder monatlich. Wir sorgen dafür, dass sich Mieterinnen, Mieter und Besuch wohlfühlen.',
    ],
    includesTitle: 'Das gehört zur Treppenhausreinigung',
    includes: [
      'Treppen und Podeste saugen und feucht reinigen',
      'Geländer, Handläufe und Fenstersimse',
      'Eingangsbereich, Hauseingangstüre und Glas',
      'Briefkastenanlage und Klingeltableau',
      'Lift innen inklusive Spiegel und Türen',
      'Keller- und Waschküchengänge nach Absprache',
    ],
    idealFor: ['Liegenschaftsverwaltungen', 'Eigentümergemeinschaften (STWEG)', 'Private Vermieterinnen und Vermieter'],
    faqs: [
      {
        q: 'Wie oft sollte ein Treppenhaus gereinigt werden?',
        a: 'In den meisten Mehrfamilienhäusern hat sich eine wöchentliche oder zweiwöchentliche Reinigung bewährt. Wir passen das Intervall an die Anzahl Parteien und die Nutzung an.',
      },
      {
        q: 'Übernehmen Sie auch einzelne Liegenschaften?',
        a: 'Ja, wir reinigen sowohl einzelne Häuser als auch mehrere Liegenschaften derselben Verwaltung.',
      },
    ],
  },
  {
    slug: 'baureinigung-adliswil',
    name: 'Baureinigung',
    cardTitle: 'Baureinigungen',
    teaser: 'Nach Neubau, Umbau und Renovation',
    short: 'Reinigung nach Bauarbeiten und Renovationen für einen einwandfreien Zustand.',
    image: 'bau',
    imageAlt: 'Reinigungsfachmann mit Drucksprüher nach Bauarbeiten',
    metaTitle: 'Baureinigung Adliswil – nach Bau und Renovation | Klar und Rein',
    metaDescription:
      'Bau- und Bauendreinigung nach Neubau, Umbau oder Renovation in Adliswil und im Kanton Zürich. Staub, Farb- und Kleberreste weg – bezugsbereit.',
    h1: 'Baureinigung in Adliswil',
    lead: 'Nach dem Umbau bleiben Staub, Farbspritzer und Kleberreste. Wir machen Ihre Räume bezugsbereit – vom groben Bauschmutz bis zur Feinreinigung.',
    intro: [
      'Ob Neubau, Umbau, Renovation oder neue Küche: Wir reinigen nach den Handwerkern, damit Sie oder Ihre Mieterschaft direkt einziehen können.',
      'Wir arbeiten mit Bauherrschaften, Handwerksbetrieben und Privatpersonen zusammen und stimmen den Termin auf den Bauablauf ab.',
    ],
    includesTitle: 'Das gehört zur Baureinigung',
    includes: [
      'Grobreinigung: Bauschutt-Reste, Staub und Verpackungsmaterial entfernen',
      'Feinreinigung aller Oberflächen, Schränke und Einbauten',
      'Fenster, Rahmen und Storen inklusive Entfernen von Etiketten und Schutzfolien',
      'Farb-, Mörtel- und Kleberreste von Böden, Plättli und Glas',
      'Sanitäranlagen und Küche bezugsbereit machen',
      'Böden je nach Belag reinigen',
    ],
    idealFor: ['Neubauten und Umbauten', 'Renovierte Wohnungen vor dem Einzug', 'Handwerksbetriebe und Bauherrschaften'],
    faqs: [
      {
        q: 'Wann sollte die Baureinigung stattfinden?',
        a: 'Wenn alle Handwerksarbeiten abgeschlossen sind und kein Staub mehr entsteht. Bei grösseren Projekten empfiehlt sich zusätzlich eine Grobreinigung während der Bauphase.',
      },
      {
        q: 'Entfernen Sie auch Farb- und Kleberreste?',
        a: 'Ja. Wir entfernen Farbspritzer, Kleber-, Silikon- und Mörtelreste schonend und passend zum jeweiligen Material.',
      },
    ],
  },
]

export const generalFaqs: Faq[] = [
  {
    q: 'In welchen Orten reinigt Klar und Rein?',
    a: 'Unser Sitz ist an der Haldenstrasse 11 in Adliswil. Wir reinigen in Adliswil und den umliegenden Gemeinden wie Langnau am Albis, Kilchberg, Rüschlikon, Thalwil, Horgen und Oberrieden, in der Stadt Zürich sowie im ganzen Kanton Zürich.',
  },
  {
    q: 'Was kostet eine Reinigung?',
    a: 'Das hängt von der Art der Reinigung, der Grösse und dem Zustand ab. Sie erhalten von uns immer eine kostenlose und unverbindliche Offerte – so wissen Sie vorher genau, was es kostet.',
  },
  {
    q: 'Was bedeutet Abnahmegarantie bei der Umzugsreinigung?',
    a: 'Beanstandet die Verwaltung bei der Wohnungsabgabe etwas an der Reinigung, reinigen wir kostenlos nach, bis die Wohnung abgenommen ist.',
  },
  {
    q: 'Bringen Sie Reinigungsmittel und Geräte mit?',
    a: 'Ja, wir bringen alle nötigen Reinigungsmittel, Geräte und Materialien mit. Sie müssen nichts vorbereiten.',
  },
  {
    q: 'Wie komme ich zu einer Offerte?',
    a: 'Füllen Sie das Anfrageformular aus, rufen Sie uns an oder schreiben Sie uns auf WhatsApp. Für eine genaue Offerte schauen wir die Räume kurz an oder Sie senden uns ein paar Fotos.',
  },
  {
    q: 'Reinigen Sie auch regelmässig für Firmen und Verwaltungen?',
    a: 'Ja. Neben Umzugs- und Wohnungsreinigungen übernehmen wir die regelmässige Unterhaltsreinigung von Büros, Praxen und Treppenhäusern.',
  },
]

/** Glas-Kacheln im Hero (Texte der bisherigen Website) */
export const heroCards = [
  {
    title: 'Reinigungsdienste für Privathaushalte',
    text: 'Gründliche Reinigung für ein makelloses Wohnumfeld.',
    to: '/wohnungsreinigung-adliswil',
  },
  {
    title: 'Unterhaltsreinigung für Büros und Treppenhäuser',
    text: 'Sauberkeit und Ordnung für Büros und Treppenhäuser, auf die Sie sich verlassen können.',
    to: '/bueroreinigung-adliswil',
  },
  {
    title: 'Tiefenreinigung',
    text: 'Spezialisierte Tiefenreinigung für Ihre individuellen Anforderungen.',
    to: '/wohnungsreinigung-adliswil',
  },
]

/** Kennzahlen der bisherigen Website. TODO: Bedeutung von Esma bestätigen lassen */
export const stats = [
  { value: '120+', label: 'Qualitätsdienstleistungen' },
  { value: '15', label: 'Von vielen vertraut' },
]

/** Versprechen (ersetzt die Vorlagen-Bewertungen der alten Seite, bis echte Google-Bewertungen da sind) */
export const promises = [
  { title: 'Abnahmegarantie', text: 'Bei der Umzugsreinigung reinigen wir kostenlos nach, falls die Verwaltung etwas beanstandet.' },
  { title: 'Pünktlich & zuverlässig', text: 'Wir kommen zum vereinbarten Termin und halten uns an klare Absprachen.' },
  { title: 'Alles inklusive', text: 'Reinigungsmittel, Geräte und Material bringen wir mit. Sie müssen nichts vorbereiten.' },
  { title: 'Kostenlose Offerte', text: 'Sie wissen vorher genau, was die Reinigung kostet – transparent und unverbindlich.' },
]

export const steps = [
  { title: 'Anfrage', text: 'Formular, Anruf oder WhatsApp – sagen Sie uns kurz, was gereinigt werden soll.' },
  { title: 'Offerte', text: 'Nach kurzer Besichtigung oder anhand von Fotos erhalten Sie eine klare, kostenlose Offerte.' },
  { title: 'Reinigung', text: 'Wir kommen pünktlich zum vereinbarten Termin und bringen alles Nötige mit.' },
  { title: 'Abnahme', text: 'Sie prüfen das Ergebnis. Bei der Umzugsreinigung gilt unsere Abnahmegarantie.' },
]

/** Weiche Trennstelle vor «reinigung», damit lange Wörter auf kleinen Kacheln sauber umbrechen */
export const soft = (word: string) => word.replace(/(.)(reinigung)/, '$1­$2')
