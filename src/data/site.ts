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
  manager: 'Arxhend Hoxha' as string | null,
  email: 'info@klarundrein.ch',
  phone: '076 561 17 79',
  // TODO: bestätigen, dass die Nummer auf WhatsApp erreichbar ist
  whatsapp: true,
  instagram: 'https://www.instagram.com/klar.und.rein.gmbh/',
  url: 'https://klarundrein.ch',
  geo: { lat: 47.31067, lng: 8.522645 },
  /** Öffnungszeiten wie im Google-Unternehmensprofil */
  hours: { short: 'Mo–Fr 07:30–18:00', long: 'Montag bis Freitag, 07:30–18:00 Uhr', closed: 'Samstag und Sonntag geschlossen' },
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
  'Oberrieden',
  'Horgen',
  'Au (Wädenswil)',
  'Wädenswil',
  'Richterswil',
  'Wollerau',
  'Zürich-Leimbach',
  'Zürich-Wollishofen',
  'Zürich-Enge',
  'Stadt Zürich',
] as const

export type Faq = { q: string; a: string }

export type ServiceIconName =
  | 'umzug'
  | 'wohnung'
  | 'buero'
  | 'fenster'
  | 'unterhalt'
  | 'treppenhaus'
  | 'hauswartung'
  | 'bau'
  | 'hochdruck'
  | 'fassade'

export type Service = {
  slug: string
  name: string
  /** Kartentitel wie auf der bisherigen Website */
  cardTitle: string
  /** Kurzzeile fürs Menü */
  teaser: string
  /** Symbol für Übersichten (siehe components/ServiceIcon.tsx) */
  icon: ServiceIconName
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
  includes: string[]
  idealFor: string[]
  faqs: Faq[]
}

export const services: Service[] = [
  {
    slug: 'umzugsreinigung-adliswil',
    name: 'Umzugsreinigung',
    cardTitle: 'Umzugsreinigung',
    teaser: 'Endreinigung für die Wohnungsabgabe',
    icon: 'umzug',
    short: 'Für eine ordentliche und problemlose Wohnungsübergabe. Sorgfältige Reinigung – auf Wunsch mit Abnahmegarantie.',
    image: 'umzug',
    imageAlt: 'Frau packt beim Umzug Kartons in einer hellen Wohnung',
    metaTitle: 'Umzugsreinigung Adliswil – Abnahmegarantie auf Wunsch | Klar und Rein',
    metaDescription:
      'Umzugs- und Endreinigung in Adliswil, Langnau, Kilchberg, Thalwil und Zürich – gründlich, auf Wunsch mit Abnahmegarantie. Jetzt kostenlose Offerte anfragen.',
    h1: 'Umzugsreinigung in Adliswil – Abnahmegarantie auf Wunsch',
    lead: 'Sie ziehen um, wir kümmern uns um die Endreinigung. So geben Sie Ihre Wohnung ohne Stress an die Verwaltung zurück.',
    intro: [
      'Bei der Wohnungsabgabe schaut die Verwaltung genau hin: Backofen, Dampfabzug, Fensterfalze, Storen, Kalk im Bad. Genau dort setzen wir an. Wir reinigen Ihre Wohnung oder Ihr Haus nach der in der Schweiz üblichen Abgabe-Checkliste.',
      'Auf Wunsch bieten wir eine Abnahmegarantie: Wir sind bei der Wohnungsabgabe dabei und reinigen direkt vor Ort nach, falls die Verwaltung etwas beanstandet.',
    ],
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
        a: 'Auf Wunsch sind wir bei der Wohnungsabgabe mit der Verwaltung vor Ort. Beanstandet sie etwas an der Reinigung, reinigen wir die Stellen direkt nach – bis die Wohnung abgenommen ist. Ob Sie die Abnahmegarantie möchten, halten wir in der Offerte fest.',
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
    icon: 'wohnung',
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
    icon: 'buero',
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
    slug: 'fensterreinigung-adliswil',
    name: 'Fensterreinigung',
    cardTitle: 'Fensterreinigung',
    teaser: 'Glas, Rahmen, Falze und Storen',
    icon: 'fenster',
    short: 'Streifenfreie Fenster innen und aussen – inklusive Rahmen, Falze und auf Wunsch Storen.',
    image: 'fenster',
    imageAlt: 'Fenster wird mit einem Abzieher streifenfrei gereinigt',
    metaTitle: 'Fensterreinigung Adliswil – streifenfrei, innen & aussen | Klar und Rein',
    metaDescription:
      'Fensterreinigung in Adliswil und Umgebung: Glas, Rahmen, Falze und Storen, innen und aussen. Für Wohnungen, Häuser, Büros und Läden. Kostenlose Offerte.',
    h1: 'Fensterreinigung in Adliswil',
    lead: 'Klare Sicht ohne Streifen: Wir reinigen Ihre Fenster innen und aussen – samt Rahmen, Falzen und Fenstersimsen.',
    intro: [
      'Saubere Fenster machen jeden Raum heller. Wir reinigen Glasflächen streifenfrei und vergessen dabei auch Rahmen, Falze und Simse nicht – dort, wo sich Staub und Schmutz am liebsten sammeln.',
      'Ob einmalig im Frühling, vor einem Anlass oder regelmässig im Abo: Wir reinigen Fenster in Wohnungen, Häusern, Büros und Ladenlokalen in Adliswil und im ganzen Kanton Zürich.',
    ],
    includes: [
      'Glasflächen innen und aussen streifenfrei',
      'Fensterrahmen, Falze und Dichtungen',
      'Fenstersimse und Fensterbänke',
      'Storen, Lamellen und Rollläden nach Absprache',
      'Glastüren, Glasgeländer und Wintergärten',
      'Schaufenster und Eingangsbereiche für Geschäfte',
    ],
    idealFor: ['Wohnungen und Häuser', 'Büros, Praxen und Läden', 'Einmalig oder regelmässig'],
    faqs: [
      {
        q: 'Wie oft sollten Fenster gereinigt werden?',
        a: 'In Wohnungen reicht meist zwei- bis viermal pro Jahr. Schaufenster und Eingangsbereiche von Geschäften reinigen wir je nach Lage auch monatlich oder wöchentlich.',
      },
      {
        q: 'Reinigen Sie auch Storen und Rollläden?',
        a: 'Ja, auf Wunsch reinigen wir Lamellenstoren, Rollläden und Fensterläden gleich mit. Wir halten das in der Offerte fest.',
      },
      {
        q: 'Was kostet eine Fensterreinigung?',
        a: 'Das hängt von der Anzahl und Grösse der Fenster und von Storen oder Sprossen ab. Sie erhalten eine kostenlose Offerte – gerne auch anhand von Fotos.',
      },
    ],
  },
  {
    slug: 'unterhaltsreinigung-adliswil',
    name: 'Unterhaltsreinigung',
    cardTitle: 'Unterhaltsreinigung',
    teaser: 'Regelmässig nach festem Plan',
    icon: 'unterhalt',
    short: 'Regelmässige Reinigung nach festem Plan – für Firmen, Praxen und Liegenschaften.',
    image: 'unterhalt',
    imageAlt: 'Boden eines hellen Gangs wird mit dem Wischmopp gereinigt',
    metaTitle: 'Unterhaltsreinigung Adliswil – regelmässig nach Plan | Klar und Rein',
    metaDescription:
      'Unterhaltsreinigung in Adliswil und im Kanton Zürich: regelmässige Reinigung von Büros, Praxen, Geschäften und Liegenschaften nach festem Plan. Offerte anfragen.',
    h1: 'Unterhaltsreinigung in Adliswil',
    lead: 'Immer sauber, ohne dass Sie daran denken müssen: Wir reinigen Ihre Räume regelmässig nach einem festen, gemeinsam vereinbarten Plan.',
    intro: [
      'Bei der Unterhaltsreinigung legen wir gemeinsam fest, was wie oft gereinigt wird – täglich, wöchentlich oder in einem anderen Rhythmus. So bleiben Büros, Praxen, Geschäfte und Gemeinschaftsflächen dauerhaft gepflegt.',
      'Sie haben eine feste Ansprechperson, klare Absprachen und auf Wunsch Reinigungszeiten ausserhalb Ihrer Öffnungs- oder Bürozeiten.',
    ],
    includes: [
      'Individueller Reinigungsplan mit festen Intervallen',
      'Böden saugen und feucht reinigen',
      'Sanitäranlagen reinigen und Verbrauchsmaterial auffüllen',
      'Küchen, Pausenräume und Oberflächen',
      'Abfall und Recycling entsorgen',
      'Regelmässige Qualitätskontrolle und klare Ansprechperson',
    ],
    idealFor: ['Büros und Praxen', 'Läden und Gewerberäume', 'Liegenschaften und Verwaltungen'],
    faqs: [
      {
        q: 'Was ist der Unterschied zur Grundreinigung?',
        a: 'Die Unterhaltsreinigung hält Räume im Alltag sauber und findet regelmässig statt. Eine Grund- oder Tiefenreinigung ist ein einmaliger, gründlicher Einsatz – zum Beispiel vor dem Start der Unterhaltsreinigung.',
      },
      {
        q: 'Können die Reinigungszeiten angepasst werden?',
        a: 'Ja. Wir reinigen früh morgens, abends oder am Wochenende, damit Ihr Betrieb ungestört weiterläuft.',
      },
    ],
  },
  {
    slug: 'treppenhausreinigung-adliswil',
    name: 'Treppenhausreinigung',
    cardTitle: 'Treppenhausreinigungen',
    teaser: 'Für Liegenschaften und Verwaltungen',
    icon: 'treppenhaus',
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
    slug: 'hauswartung-adliswil',
    name: 'Hauswartung',
    cardTitle: 'Hauswartung',
    teaser: 'Treppenhaus, Umgebung, Winterdienst',
    icon: 'hauswartung',
    short: 'Rundum gepflegte Liegenschaften – vom Treppenhaus über die Umgebung bis zum Winterdienst.',
    image: 'hauswartung',
    imageAlt: 'Hauswart pflegt den Rasen vor einem Wohnhaus',
    metaTitle: 'Hauswartung Adliswil – Treppenhaus, Umgebung, Winterdienst | Klar und Rein',
    metaDescription:
      'Hauswartung in Adliswil und Umgebung für Verwaltungen, STWEG und Vermieter: Treppenhausreinigung, Umgebungspflege, Winterdienst und Kontrollgänge aus einer Hand.',
    h1: 'Hauswartung in Adliswil',
    lead: 'Eine Ansprechperson für Ihre Liegenschaft: Wir kümmern uns um Sauberkeit, Umgebung und Winterdienst – zuverlässig und im vereinbarten Rhythmus.',
    intro: [
      'Für Verwaltungen, Eigentümergemeinschaften und private Vermieter übernehmen wir die Hauswartung von Mehrfamilienhäusern und Geschäftsliegenschaften in Adliswil und Umgebung.',
      'Den Umfang stellen wir individuell zusammen – von der regelmässigen Treppenhausreinigung über die Umgebungspflege bis zum Winterdienst. So bleibt Ihre Liegenschaft das ganze Jahr gepflegt.',
    ],
    includes: [
      'Reinigung von Treppenhaus, Lift, Keller und Waschküche',
      'Umgebungspflege: Rasen, Hecken, Laub und Wege',
      'Winterdienst: Schneeräumung und Streuen',
      'Bereitstellen der Abfall- und Recyclingcontainer',
      'Regelmässige Kontrollgänge',
      'Kleinere Unterhaltsarbeiten nach Absprache',
    ],
    idealFor: ['Liegenschaftsverwaltungen', 'Eigentümergemeinschaften (STWEG)', 'Private Vermieterinnen und Vermieter'],
    faqs: [
      {
        q: 'Was gehört alles zur Hauswartung?',
        a: 'Das legen wir gemeinsam fest. Typisch sind Treppenhausreinigung, Umgebungspflege, Winterdienst und das Bereitstellen der Abfallcontainer. Den genauen Umfang halten wir in der Offerte fest.',
      },
      {
        q: 'Übernehmen Sie auch den Winterdienst?',
        a: 'Ja, auf Wunsch räumen wir Zugänge und Wege von Schnee und streuen bei Glätte.',
      },
    ],
  },
  {
    slug: 'baureinigung-adliswil',
    name: 'Baureinigung',
    cardTitle: 'Baureinigungen',
    teaser: 'Nach Neubau, Umbau und Renovation',
    icon: 'bau',
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
  {
    slug: 'hochdruckreinigung-adliswil',
    name: 'Hochdruckreinigung',
    cardTitle: 'Hochdruckreinigung',
    teaser: 'Terrassen, Plätze und Einfahrten',
    icon: 'hochdruck',
    short: 'Terrassen, Plattenwege, Einfahrten und Garagen – wieder wie neu, ohne Moos und Algen.',
    image: 'hochdruck',
    imageAlt: 'Platz wird mit einem Hochdruck-Flächenreiniger gereinigt',
    metaTitle: 'Hochdruckreinigung Adliswil – Terrassen, Plätze, Einfahrten | Klar und Rein',
    metaDescription:
      'Hochdruckreinigung in Adliswil und im Kanton Zürich: Terrassen, Plattenwege, Einfahrten, Garagen und Balkone von Moos, Algen und Schmutz befreien. Offerte anfragen.',
    h1: 'Hochdruckreinigung in Adliswil',
    lead: 'Moos, Algen und hartnäckiger Schmutz verschwinden: Wir reinigen Aussenflächen gründlich und schonend – passend zum jeweiligen Belag.',
    intro: [
      'Mit der Zeit setzen sich auf Terrassen, Wegen und Einfahrten Moos, Algen und Schmutz fest. Das sieht nicht nur unschön aus, sondern macht Flächen auch rutschig.',
      'Wir reinigen mit Hochdruck und Flächenreinigern und passen Druck und Verfahren an das Material an – ob Stein, Beton, Platten oder Holz.',
    ],
    includes: [
      'Terrassen, Sitzplätze und Balkone',
      'Plattenwege, Einfahrten und Vorplätze',
      'Garagen, Tiefgaragen und Abstellplätze',
      'Mauern, Treppen und Sockel',
      'Entfernen von Moos, Algen und Grünbelag',
      'Gartenmöbel und Aussenbereiche nach Absprache',
    ],
    idealFor: ['Haus- und Wohnungsbesitzer', 'Verwaltungen und STWEG', 'Gewerbe und Gastronomie'],
    faqs: [
      {
        q: 'Ist Hochdruck für jeden Belag geeignet?',
        a: 'Nicht jeder Belag verträgt denselben Druck. Wir prüfen die Fläche vorher und wählen Druck, Düse und Verfahren passend zum Material.',
      },
      {
        q: 'Wann ist der beste Zeitpunkt?',
        a: 'Ideal sind Frühling und Herbst – vor der Gartensaison oder bevor Laub und Nässe die Flächen rutschig machen.',
      },
    ],
  },
  {
    slug: 'fassadenreinigung-adliswil',
    name: 'Fassadenreinigung',
    cardTitle: 'Fassadenreinigung',
    teaser: 'Schonend je nach Material',
    icon: 'fassade',
    short: 'Saubere Fassaden ohne Algen und Grünbelag – schonend gereinigt, passend zum Material.',
    image: 'fassade',
    imageAlt: 'Fachkraft reinigt eine Glasfassade',
    metaTitle: 'Fassadenreinigung Adliswil – Algen & Schmutz entfernen | Klar und Rein',
    metaDescription:
      'Fassadenreinigung in Adliswil und im Kanton Zürich: Algen, Grünbelag und Schmutz schonend entfernen – für Einfamilienhäuser, Mehrfamilienhäuser und Geschäftsliegenschaften.',
    h1: 'Fassadenreinigung in Adliswil',
    lead: 'Eine gepflegte Fassade wertet das ganze Gebäude auf. Wir entfernen Schmutz, Algen und Grünbelag – schonend und passend zum Material.',
    intro: [
      'Wetter, Verkehr und Feuchtigkeit hinterlassen Spuren: Grauschleier, Algen und Grünbelag lassen Fassaden schnell alt aussehen.',
      'Vor der Reinigung prüfen wir die Fassade und wählen ein schonendes Verfahren – für Putz, Klinker, Holz, Metall oder Glas. So wird das Gebäude sauber, ohne die Oberfläche zu belasten.',
    ],
    includes: [
      'Besichtigung und Prüfung der Fassade',
      'Entfernen von Algen, Grünbelag und Grauschleier',
      'Schonende Verfahren je nach Material',
      'Reinigung von Sockeln, Vordächern und Eingangsbereichen',
      'Glasfassaden und Fensterfronten',
      'Abdecken und Schützen der Umgebung',
    ],
    idealFor: ['Einfamilienhäuser', 'Mehrfamilienhäuser', 'Geschäftsliegenschaften'],
    faqs: [
      {
        q: 'Wie wird die Fassade gereinigt?',
        a: 'Je nach Material und Verschmutzung mit Niederdruck oder Hochdruck und passenden Reinigungsmitteln. Wir prüfen die Fassade vorher und schlagen das geeignete Verfahren vor.',
      },
      {
        q: 'Was kostet eine Fassadenreinigung?',
        a: 'Das hängt von Fläche, Höhe, Material und Zugänglichkeit ab. Nach einer kurzen Besichtigung erhalten Sie eine kostenlose Offerte.',
      },
    ],
  },
]

export const generalFaqs: Faq[] = [
  {
    q: 'In welchen Orten reinigt Klar und Rein?',
    a: 'Unser Sitz ist an der Haldenstrasse 11 in Adliswil. Wir reinigen in Adliswil und den umliegenden Gemeinden wie Langnau am Albis, Kilchberg, Rüschlikon, Thalwil, Oberrieden und Horgen, am linken Zürichseeufer bis Wädenswil, Richterswil und Wollerau, in der Stadt Zürich sowie im ganzen Kanton Zürich.',
  },
  {
    q: 'Wann ist Klar und Rein erreichbar?',
    a: 'Wir sind von Montag bis Freitag zwischen 07:30 und 18:00 Uhr für Sie da – telefonisch, per WhatsApp oder über das Anfrageformular. Samstag und Sonntag ist geschlossen.',
  },
  {
    q: 'Was kostet eine Reinigung?',
    a: 'Das hängt von der Art der Reinigung, der Grösse und dem Zustand ab. Sie erhalten von uns immer eine kostenlose und unverbindliche Offerte – so wissen Sie vorher genau, was es kostet.',
  },
  {
    q: 'Was bedeutet Abnahmegarantie bei der Umzugsreinigung?',
    a: 'Die Abnahmegarantie gibt es auf Wunsch: Wir sind bei der Wohnungsabgabe dabei und reinigen direkt nach, falls die Verwaltung etwas beanstandet – bis die Wohnung abgenommen ist.',
  },
  {
    q: 'Wie komme ich zu einer Offerte?',
    a: 'Füllen Sie das Anfrageformular aus, rufen Sie uns an oder schreiben Sie uns auf WhatsApp. Für eine genaue Offerte schauen wir die Räume kurz an oder Sie senden uns ein paar Fotos.',
  },
  {
    q: 'Welche Reinigungen bietet Klar und Rein an?',
    a: 'Umzugsreinigung (auf Wunsch mit Abnahmegarantie), Wohnungs- und Tiefenreinigung, Büroreinigung, Fensterreinigung, Unterhaltsreinigung, Treppenhausreinigung, Hauswartung, Baureinigung, Hochdruckreinigung und Fassadenreinigung – für Privat- und Geschäftskunden in Adliswil und im ganzen Kanton Zürich.',
  },
  {
    q: 'Reinigen Sie auch regelmässig für Firmen und Verwaltungen?',
    a: 'Ja. Wir übernehmen die regelmässige Unterhaltsreinigung von Büros, Praxen und Geschäften sowie Treppenhausreinigung und Hauswartung für Liegenschaften.',
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

/** Versprechen (ersetzt die Vorlagen-Bewertungen der alten Seite, bis echte Google-Bewertungen da sind) */
export const promises = [
  { title: 'Abnahmegarantie auf Wunsch', text: 'Bei der Umzugsreinigung sind wir auf Wunsch bei der Übergabe dabei und reinigen direkt nach, falls etwas beanstandet wird.' },
  { title: 'Pünktlich & zuverlässig', text: 'Wir kommen zum vereinbarten Termin und halten uns an klare Absprachen.' },
  { title: 'Flexibel nach Absprache', text: 'Umfang, Termin und Reinigungsmittel richten sich nach Ihnen – mit unserem Material oder Ihrem eigenen.' },
  { title: 'Kostenlose Offerte', text: 'Sie wissen vorher genau, was die Reinigung kostet – transparent und unverbindlich.' },
]

export const steps = [
  { title: 'Anfrage', text: 'Formular, Anruf oder WhatsApp – sagen Sie uns kurz, was gereinigt werden soll.' },
  { title: 'Offerte', text: 'Nach kurzer Besichtigung oder anhand von Fotos erhalten Sie eine klare, kostenlose Offerte.' },
  { title: 'Reinigung', text: 'Wir kommen pünktlich zum vereinbarten Termin und reinigen genau nach Ihren Wünschen.' },
  { title: 'Abnahme', text: 'Sie prüfen das Ergebnis. Bei der Umzugsreinigung sind wir auf Wunsch bei der Abnahme dabei.' },
]

/** Weiche Trennstellen («…reinigung», «…wartung», «Abnahmegarantie»), damit lange Wörter auf kleinen Kacheln sauber umbrechen */
export const soft = (word: string) => word.replace(/(.)(reinigung|wartung)/, '$1\u00AD$2').replace(/(Abnahme)(garantie)/, '$1\u00AD$2')
