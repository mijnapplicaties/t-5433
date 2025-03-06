
import { Beach } from "../types/beach";

export const beaches: Beach[] = [
  {
    id: "b1",
    name: "Playa Del Viento",
    location: "Lago Nahuel Huapi, Villa Los Coihues",
    description: {
      en: "A beautiful sandy beach on Nahuel Huapi Lake, known for windy conditions that make it perfect for windsurfing and kitesurfing enthusiasts. Located just minutes from Camping Los Coihues.",
      es: "Una hermosa playa de arena en el lago Nahuel Huapi, conocida por sus condiciones de viento que la hacen perfecta para los entusiastas del windsurf y el kitesurf. Ubicada a minutos del Camping Los Coihues.",
      fr: "Une belle plage de sable sur le lac Nahuel Huapi, connue pour ses conditions venteuses qui en font un endroit parfait pour les amateurs de planche à voile et de kitesurf. Située à quelques minutes du Camping Los Coihues.",
      de: "Ein schöner Sandstrand am Nahuel Huapi See, bekannt für windige Bedingungen, die ihn perfekt für Windsurfer und Kitesurfer machen. Nur wenige Minuten vom Camping Los Coihues entfernt."
    },
    imageUrl: "/lovable-uploads/7cd264e6-e8b5-4596-afba-7ee9212621d5.png",
    beachType: "sandy",
    waterTemp: {
      summer: 16,
      winter: 8
    },
    activities: ["swimming", "kayaking", "sunbathing", "picnic"],
    facilities: ["parkingAvailable"],
    distanceFromCampsite: 1.5,
    travelTime: 15,
    transportation: ["walking", "bus"],
    bestTimeToVisit: "December-February"
  },
  {
    id: "b2",
    name: "Playa Con Viento",
    location: "Lago Nahuel Huapi, Km 18 Av. Bustillo",
    description: {
      en: "True to its name ('Beach With Wind'), this beach offers consistent winds perfect for sailing and windsurfing activities. It features a mix of sand and pebbles with spectacular mountain views.",
      es: "Fiel a su nombre, esta playa ofrece vientos constantes, perfectos para actividades de vela y windsurf. Presenta una mezcla de arena y guijarros con espectaculares vistas a la montaña.",
      fr: "Fidèle à son nom ('Plage avec vent'), cette plage offre des vents constants parfaits pour les activités de voile et de planche à voile. Elle présente un mélange de sable et de galets avec des vues spectaculaires sur la montagne.",
      de: "Getreu seinem Namen ('Strand mit Wind') bietet dieser Strand konstante Winde, die perfekt für Segel- und Windsurfaktivitäten sind. Er hat eine Mischung aus Sand und Kieseln mit spektakulärer Bergkulisse."
    },
    imageUrl: "/lovable-uploads/766c5132-06c1-4fd6-a836-f12e481271c2.png",
    beachType: "mixed",
    waterTemp: {
      summer: 17,
      winter: 9
    },
    activities: ["swimming", "kayaking", "fishing", "viewpoint"],
    facilities: ["parkingAvailable", "foodVendors"],
    distanceFromCampsite: 6,
    travelTime: 25,
    transportation: ["bus", "taxi"],
    bestTimeToVisit: "November-March"
  },
  {
    id: "b3",
    name: "Playa Sin Viento",
    location: "Lago Nahuel Huapi, Km 14 Av. Bustillo",
    description: {
      en: "A sheltered beach ('Beach Without Wind') offering calm waters, ideal for families with children and swimming. Located in a protected bay area with beautiful surroundings.",
      es: "Una playa protegida que ofrece aguas tranquilas, ideal para familias con niños y para nadar. Ubicada en un área de bahía protegida con hermosos alrededores.",
      fr: "Une plage abritée ('Plage sans vent') offrant des eaux calmes, idéale pour les familles avec enfants et la baignade. Située dans une zone de baie protégée avec un bel environnement.",
      de: "Ein geschützter Strand ('Strand ohne Wind'), der ruhiges Wasser bietet, ideal für Familien mit Kindern und zum Schwimmen. Liegt in einer geschützten Bucht mit wunderschöner Umgebung."
    },
    imageUrl: "/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png",
    beachType: "sandy",
    waterTemp: {
      summer: 18,
      winter: 10
    },
    activities: ["swimming", "picnic", "sunbathing", "kayaking"],
    facilities: ["parkingAvailable", "restrooms", "foodVendors"],
    distanceFromCampsite: 12,
    travelTime: 35,
    transportation: ["bus", "taxi"],
    bestTimeToVisit: "December-February"
  },
  {
    id: "b4",
    name: "Playa Muñoz",
    location: "Lago Nahuel Huapi, Km 12 Av. Bustillo",
    description: {
      en: "A tranquil beach with pristine blue waters surrounded by mountains, perfect for relaxation and enjoying the peaceful atmosphere. The clear waters invite swimming and the beach offers a great spot for photography.",
      es: "Una playa tranquila con aguas azules prístinas rodeada de montañas, perfecta para relajarse y disfrutar de la atmósfera pacífica. Las aguas cristalinas invitan a nadar y la playa ofrece un gran lugar para la fotografía.",
      fr: "Une plage tranquille aux eaux bleues cristallines entourée de montagnes, parfaite pour se détendre et profiter de l'atmosphère paisible. Les eaux claires invitent à la baignade et la plage offre un excellent endroit pour la photographie.",
      de: "Ein ruhiger Strand mit klarem blauen Wasser, umgeben von Bergen, perfekt zum Entspannen und Genießen der friedlichen Atmosphäre. Das klare Wasser lädt zum Schwimmen ein und der Strand bietet einen großartigen Ort für Fotografien."
    },
    imageUrl: "/lovable-uploads/a0c71abe-f096-41d5-a92c-c9b50cc7752f.png",
    beachType: "sandy",
    waterTemp: {
      summer: 17,
      winter: 9
    },
    activities: ["swimming", "picnic", "sunbathing", "viewpoint"],
    facilities: ["parkingAvailable"],
    distanceFromCampsite: 5,
    travelTime: 20,
    transportation: ["bus", "taxi"],
    bestTimeToVisit: "December-March"
  },
  {
    id: "b5",
    name: "Playa Bonita",
    location: "Lago Nahuel Huapi, Km 7.5 Av. Bustillo",
    description: {
      en: "As its name suggests ('Beautiful Beach'), this is one of the most scenic beaches in Bariloche. It offers crystal clear waters and is surrounded by native forest, providing a picture-perfect setting.",
      es: "Como su nombre lo indica, esta es una de las playas más pintorescas de Bariloche. Ofrece aguas cristalinas y está rodeada de bosque nativo, proporcionando un entorno perfecto para fotografías.",
      fr: "Comme son nom l'indique ('Belle Plage'), c'est l'une des plages les plus pittoresques de Bariloche. Elle offre des eaux cristallines et est entourée de forêt native, offrant un cadre parfait pour les photos.",
      de: "Wie der Name schon sagt ('Schöner Strand'), ist dies einer der malerischsten Strände in Bariloche. Er bietet kristallklares Wasser und ist von einheimischem Wald umgeben, was eine bildschöne Kulisse bietet."
    },
    imageUrl: "/lovable-uploads/bdd46388-2e54-44ed-8cb1-f449f800bd97.png",
    beachType: "sandy",
    waterTemp: {
      summer: 17,
      winter: 9
    },
    activities: ["swimming", "picnic", "sunbathing", "kayaking", "viewpoint"],
    facilities: ["parkingAvailable", "restrooms", "foodVendors"],
    distanceFromCampsite: 10,
    travelTime: 30,
    transportation: ["bus", "taxi"],
    bestTimeToVisit: "December-March"
  },
  {
    id: "b6",
    name: "Playa Serena",
    location: "Lago Nahuel Huapi, Villa Los Coihues",
    description: {
      en: "A tranquil beach ('Serene Beach') offering peaceful surroundings and relatively warmer waters. Perfect for a quiet day by the lake with the family.",
      es: "Una playa tranquila que ofrece un entorno pacífico y aguas relativamente más cálidas. Perfecta para un día tranquilo junto al lago con la familia.",
      fr: "Une plage tranquille ('Plage Sereine') offrant un environnement paisible et des eaux relativement plus chaudes. Parfaite pour une journée calme au bord du lac avec la famille.",
      de: "Ein ruhiger Strand ('Ruhiger Strand'), der eine friedliche Umgebung und relativ wärmeres Wasser bietet. Perfekt für einen ruhigen Tag am See mit der Familie."
    },
    imageUrl: "/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png",
    beachType: "pebbly",
    waterTemp: {
      summer: 19,
      winter: 11
    },
    activities: ["swimming", "kayaking", "fishing", "picnic", "sunbathing"],
    facilities: ["parkingAvailable", "restrooms"],
    distanceFromCampsite: 3,
    travelTime: 20,
    transportation: ["walking", "bus", "taxi"],
    bestTimeToVisit: "December-February"
  },
  {
    id: "b7",
    name: "Bahia Lopez",
    location: "Circuito Chico, Km 33 Av. Bustillo",
    description: {
      en: "A stunning bay with clear waters and mountain views. Located along the famous Circuito Chico route, this beach offers a perfect combination of forest and lake scenery.",
      es: "Una bahía impresionante con aguas claras y vistas a las montañas. Ubicada a lo largo de la famosa ruta del Circuito Chico, esta playa ofrece una combinación perfecta de bosque y paisaje lacustre.",
      fr: "Une baie magnifique aux eaux claires et aux vues sur les montagnes. Située le long de la célèbre route du Circuito Chico, cette plage offre une combinaison parfaite de forêt et de paysage lacustre.",
      de: "Eine atemberaubende Bucht mit klarem Wasser und Bergblick. An der berühmten Circuito Chico-Route gelegen, bietet dieser Strand eine perfekte Kombination aus Wald- und Seelandschaft."
    },
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    beachType: "rocky",
    waterTemp: {
      summer: 16,
      winter: 8
    },
    activities: ["swimming", "kayaking", "viewpoint", "picnic"],
    facilities: ["parkingAvailable"],
    distanceFromCampsite: 18,
    travelTime: 45,
    transportation: ["bus", "taxi"],
    bestTimeToVisit: "December-February"
  },
  {
    id: "b8",
    name: "Villa Tacul",
    location: "Circuito Chico, Km 29 Av. Bustillo",
    description: {
      en: "A hidden gem with turquoise waters surrounded by cypress trees. This small beach offers one of the most picturesque settings in the Bariloche area, with clear water perfect for swimming.",
      es: "Una joya escondida con aguas turquesas rodeada de cipreses. Esta pequeña playa ofrece uno de los entornos más pintorescos de la zona de Bariloche, con agua clara perfecta para nadar.",
      fr: "Un joyau caché aux eaux turquoise entouré de cyprès. Cette petite plage offre l'un des cadres les plus pittoresques de la région de Bariloche, avec une eau claire parfaite pour la baignade.",
      de: "Ein verstecktes Juwel mit türkisfarbenem Wasser, umgeben von Zypressen. Dieser kleine Strand bietet eine der malerischsten Kulissen im Gebiet von Bariloche, mit klarem Wasser perfekt zum Schwimmen."
    },
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    beachType: "mixed",
    waterTemp: {
      summer: 17,
      winter: 9
    },
    activities: ["swimming", "kayaking", "viewpoint", "picnic", "sunbathing"],
    facilities: ["parkingAvailable"],
    distanceFromCampsite: 20,
    travelTime: 50,
    transportation: ["bus", "taxi"],
    bestTimeToVisit: "December-February"
  }
];
