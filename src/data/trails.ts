import { Trail } from '../types/trail';

export const trails: Trail[] = [
  {
    id: "1",
    name: "Refugio Frey desde Lago Gutierrez",
    type: "day-hike",
    difficulty: "moderate",
    distance: 10,
    duration: 5,
    elevation: 1800,
    requiresReservation: true,
    description: {
      en: "The trail starts in Villa Los Coihues and takes approximately 1 hour longer than starting from Cerro Catedral. It shares the same route with the trails to Playa Muñoz and Cascada de los Duendes, before continuing to the refuge. It's a trail surrounded by forest, with panoramic views of Lake Gutiérrez, which then ascends through the valley until reaching Refugio Frey. Distance: 10 km. Estimated duration: 4-5 hours. How to get there from Camping Los Coihues: On foot: You can access it by walking from the camping, following the marked trail.",
      es: "El sendero comienza en Villa Los Coihues y toma aproximadamente 1 hora más que si se inicia desde Cerro Catedral. Comparte el mismo recorrido con los senderos hacia Playa Muñoz y Cascada de los Duendes, para luego continuar hacia el refugio. Es un sendero rodeado de bosque, con vistas panorámicas al Lago Gutiérrez, que luego asciende por el valle hasta alcanzar el Refugio Frey. Distancia: 10 km. Duración estimada: 4-5 horas. Cómo llegar desde Camping Los Coihues: A pie: Se puede acceder caminando desde el camping, siguiendo el sendero marcado.",
      fr: "Le sentier commence à Villa Los Coihues et prend environ 1 heure de plus que si l'on part de Cerro Catedral. Il partage le même itinéraire que les sentiers vers Playa Muñoz et Cascada de los Duendes, avant de continuer vers le refuge. C'est un sentier entouré de forêt, avec des vues panoramiques sur le lac Gutiérrez, qui monte ensuite par la vallée jusqu'au Refugio Frey. Distance: 10 km. Durée estimée: 4-5 heures. Comment s'y rendre depuis Camping Los Coihues: À pied: On peut y accéder en marchant depuis le camping, en suivant le sentier balisé.",
      de: "Der Weg beginnt in Villa Los Coihues und dauert etwa 1 Stunde länger als wenn man von Cerro Catedral startet. Er teilt die gleiche Route mit den Wegen nach Playa Muñoz und Cascada de los Duendes, bevor es zum Refugio weitergeht. Es ist ein Weg umgeben von Wald, mit Panoramablick auf den Lago Gutiérrez, der dann durch das Tal bis zum Refugio Frey aufsteigt. Entfernung: 10 km. Geschätzte Dauer: 4-5 Stunden. Anfahrt vom Camping Los Coihues: Zu Fuß: Sie können zu Fuß vom Camping aus zugreifen, indem Sie dem markierten Weg folgen."
    },
    imageUrl: "/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightAlpineLake", "highlightMountainRefuge", "highlightClimbingArea"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "high-mountain"
  },
  {
    id: "2",
    name: "Cerro Llao Llao",
    type: "day-hike",
    difficulty: "easy",
    distance: 2.6,
    duration: 1,
    elevation: 1080,
    requiresReservation: false,
    description: {
      en: "Taking bus 20, get off at the last stop at Hotel Llao Llao. From there, walk along route 20 for 20 minutes to the beginning of the trail. From there it's a 1-hour hike with gentle climbing through a forest of coihues and cypresses for 2.6 km. The effort is rewarded with a spectacular view from the summit, where you can admire Lake Moreno, Nahuel Huapi, and the Andes Mountains. After enjoying the viewpoint, the trail descends and allows you to complete the circuit in a circular manner, passing through more stretches of forest and small beaches on the shores of the lake.",
      es: "Tomando el bus 20, bajarse en la última parada en Hotel Llao Llao. De ahí caminas por la ruta 20 minutos hasta el comienzo del sendero. De ahí es 1 hr de caminata de leve subida en bosque de coihues y cipreses de 2,6 km. El esfuerzo se ve recompensado con una vista espectacular desde la cumbre, donde se pueden admirar el Lago Moreno, el Nahuel Huapi y la Cordillera de los Andes. Después de disfrutar del mirador, el sendero desciende y permite completar el circuito de manera circular, pasando por más tramos de bosque y pequeñas playas a orillas del lago.",
      fr: "Prenez le bus 20 et descendez au dernier arrêt à l'Hôtel Llao Llao. De là, marchez le long de la route pendant 20 minutes jusqu'au début du sentier. Ensuite, c'est une randonnée d'une heure avec une légère montée à travers une forêt de coihues et de cyprès sur 2,6 km. L'effort est récompensé par une vue spectaculaire depuis le sommet, où vous pouvez admirer le lac Moreno, le Nahuel Huapi et la Cordillère des Andes. Après avoir profité du panorama, le sentier descend et vous permet de compléter le circuit de manière circulaire, en passant par d'autres portions de forêt et de petites plages au bord du lac.",
      de: "Nehmen Sie den Bus 20 und steigen Sie an der letzten Haltestelle am Hotel Llao Llao aus. Von dort aus gehen Sie 20 Minuten entlang der Route bis zum Beginn des Wanderwegs. Von dort aus ist es eine einstündige Wanderung mit leichtem Anstieg durch einen Wald aus Coihues und Zypressen auf 2,6 km. Die Anstrengung wird mit einer spektakulären Aussicht vom Gipfel belohnt, wo Sie den Lago Moreno, den Nahuel Huapi und die Anden bewundern können. Nach dem Genießen des Aussichtspunkts führt der Weg bergab und ermöglicht es Ihnen, den Rundweg zu vollenden, wobei Sie weitere Waldstücke und kleine Strände am Seeufer passieren."
    },
    imageUrl: "/lovable-uploads/a210f1ff-a5c5-4288-a37a-33d461911db7.png",
    startingPoint: "Hotel Llao Llao (50 min by bus from Los Coihues)",
    highlights: ["highlightPanoramicViews", "highlightNativeForest", "highlightLakeViews"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 12,
    travelTime: 50,
    busLines: "Linea 50 (Desde Coihues) conectando Linea 20 (Av. Bustillo) (50 min)",
    category: "easy-mountain"
  },
  {
    id: "3",
    name: "Refugio Frey-Jakob Circuit",
    type: "multi-day",
    difficulty: "hard",
    distance: 35,
    duration: 3,
    elevation: 1600,
    requiresReservation: true,
    description: {
      en: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso. Desde la zona del refugio Frey, se bordea la laguna Toncek hacia el sur, hacia la subida de la laguna Schmoll. Esta pendiente de rocas está bien señalizada y sigue con algunas idas y vueltas el arroyo que baja desde Schmoll a Toncek. Esta subida es importante y tiene muchos escalones entre rocas. Desde hace un tiempo se está trabajando en proteger el humedal (mallín) de la laguna. Para eso se hizo un trayecto de piedras para atravesar el humedal por un sendero delineado sin aumentar la erosión. Por favor usálo prestando atención a no desviarte. Desde laguna Schmoll comienza otro escalón importante. Este sector tiene rocas un poco más grandes para trepar y finaliza en \"cancha de fútbol\". Unos pocos pasos después se llega al filo del cerro Catedral con vistas panorámicas hacia el valle del Rucaco y de fondo el cerro Tronador. La bajada por la ladera del Catedral hacia el valle debe hacerse con mucho cuidado. Al principio cada paso es como un gran escalón y después empieza una parte de piedras y arena suelta donde el pie se hunde y se desliza. Después de cuatro horas de haber salido del Frey, pisar el suelo firme en el bosque sobre el contorno del valle es un respiro. Sombra, agua, resguardo, descanso. Dejar el bosque del Rucaco atrás significa cerrar un libro de cuentos. Al salir de la zona boscosa se deja la protección del sol y del viento y el sendero empieza a subir cada vez con más pendiente. Se trata de la subida a Brecha Negra y desde su filo comienza otra bajada algo particular. Con los mismos cuidados que el descenso anterior, prestando atención a cada paso y teniendo en cuenta las señales de pintura, se vuelve a entrar en un bosque de lengas y después se cruza el arroyo que nace en la laguna Jakob. Sumale cuatro horas más al recorrido. Desde la zona de Jakob, a sólo 40 minutos está la laguna de los Témpanos. Regresar desde laguna Jakob, bordeando el arroyo Casa de Piedra hasta el Tambo Báez cerca de Colonia Suiza suele hacerse en 5 horas. Recorrido total, desde Villa Catedral hasta Tambo Báez: 35km. Solamente desde el refugio Frey al refugio San Martín - Jakob: 9km. ¿Qué vas a ver? Laguna Toncek, Laguna Schmoll, Panorámicas hacia el valle del Rucaco con vista al cerro Tronador, Panorámicas desde el filo de Brecha Negra, Valles, lagunas y filos. Hours: 6-8 horas. Height: 1600 m.",
      es: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso. Desde la zona del refugio Frey, se bordea la laguna Toncek hacia el sur, hacia la subida de la laguna Schmoll. Esta pendiente de rocas está bien señalizada y sigue con algunas idas y vueltas el arroyo que baja desde Schmoll a Toncek. Esta subida es importante y tiene muchos escalones entre rocas. Desde hace un tiempo se está trabajando en proteger el humedal (mallín) de la laguna. Para eso se hizo un trayecto de piedras para atravesar el humedal por un sendero delineado sin aumentar la erosión. Por favor usálo prestando atención a no desviarte. Desde laguna Schmoll comienza otro escalón importante. Este sector tiene rocas un poco más grandes para trepar y finaliza en \"cancha de fútbol\". Unos pocos pasos después se llega al filo del cerro Catedral con vistas panorámicas hacia el valle del Rucaco y de fondo el cerro Tronador. La bajada por la ladera del Catedral hacia el valle debe hacerse con mucho cuidado. Al principio cada paso es como un gran escalón y después empieza una parte de piedras y arena suelta donde el pie se hunde y se desliza. Después de cuatro horas de haber salido del Frey, pisar el suelo firme en el bosque sobre el contorno del valle es un respiro. Sombra, agua, resguardo, descanso. Dejar el bosque del Rucaco atrás significa cerrar un libro de cuentos. Al salir de la zona boscosa se deja la protección del sol y del viento y el sendero empieza a subir cada vez con más pendiente. Se trata de la subida a Brecha Negra y desde su filo comienza otra bajada algo particular. Con los mismos cuidados que el descenso anterior, prestando atención a cada paso y teniendo en cuenta las señales de pintura, se vuelve a entrar en un bosque de lengas y después se cruza el arroyo que nace en la laguna Jakob. Sumale cuatro horas más al recorrido. Desde la zona de Jakob, a sólo 40 minutos está la laguna de los Témpanos. Regresar desde laguna Jakob, bordeando el arroyo Casa de Piedra hasta el Tambo Báez cerca de Colonia Suiza suele hacerse en 5 horas. Recorrido total, desde Villa Catedral hasta Tambo Báez: 35km. Solamente desde el refugio Frey al refugio San Martín - Jakob: 9km. ¿Qué vas a ver? Laguna Toncek, Laguna Schmoll, Panorámicas hacia el valle del Rucaco con vista al cerro Tronador, Panorámicas desde el filo de Brecha Negra, Valles, lagunas y filos. Hours: 6-8 horas. Height: 1600 m.",
      fr: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso. Desde la zona del refugio Frey, se bordea la laguna Toncek hacia el sur, hacia la subida de la laguna Schmoll. Esta pendiente de rocas está bien señalizada y sigue con algunas idas y vueltas el arroyo que baja desde Schmoll a Toncek. Esta subida es importante y tiene muchos escalones entre rocas. Desde hace un tiempo se está trabajando en proteger el humedal (mallín) de la laguna. Para eso se hizo un trayecto de piedras para atravesar el humedal por un sendero delineado sin aumentar la erosión. Por favor usálo prestando atención a no desviarte. Desde laguna Schmoll comienza otro escalón importante. Este sector tiene rocas un poco más grandes para trepar y finaliza en \"cancha de fútbol\". Unos pocos pasos después se llega al filo del cerro Catedral con vistas panorámicas hacia el valle del Rucaco y de fondo el cerro Tronador. La bajada por la ladera del Catedral hacia el valle debe hacerse con mucho cuidado. Al principio cada paso es como un gran escalón y después empieza una parte de piedras y arena suelta donde el pie se hunde y se desliza. Después de cuatro horas de haber salido del Frey, pisar el suelo firme en el bosque sobre el contorno del valle es un respiro. Sombra, agua, resguardo, descanso. Dejar el bosque del Rucaco atrás significa cerrar un libro de cuentos. Al salir de la zona boscosa se deja la protección del sol y del viento y el sendero empieza a subir cada vez con más pendiente. Se trata de la subida a Brecha Negra y desde su filo comienza otra bajada algo particular. Con los mismos cuidados que el descenso anterior, prestando atención a cada paso y teniendo en cuenta las señales de pintura, se vuelve a entrar en un bosque de lengas y después se cruza el arroyo que nace en la laguna Jakob. Sumale cuatro horas más al recorrido. Desde la zona de Jakob, a sólo 40 minutos está la laguna de los Témpanos. Regresar desde laguna Jakob, bordeando el arroyo Casa de Piedra hasta el Tambo Báez cerca de Colonia Suiza suele hacerse en 5 horas. Recorrido total, desde Villa Catedral hasta Tambo Báez: 35km. Solamente desde el refugio Frey al refugio San Martín - Jakob: 9km. ¿Qué vas a ver? Laguna Toncek, Laguna Schmoll, Panorámicas hacia el valle del Rucaco con vista al cerro Tronador, Panorámicas desde el filo de Brecha Negra, Valles, lagunas y filos. Hours: 6-8 horas. Height: 1600 m.",
      de: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso. Desde la zona del refugio Frey, se bordea la laguna Toncek hacia el sur, hacia la subida de la laguna Schmoll. Esta pendiente de rocas está bien señalizada y sigue con algunas idas y vueltas el arroyo que baja desde Schmoll a Toncek. Esta subida es importante y tiene muchos escalones entre rocas. Desde hace un tiempo se está trabajando en proteger el humedal (mallín) de la laguna. Para eso se hizo un trayecto de piedras para atravesar el humedal por un sendero delineado sin aumentar la erosión. Por favor usálo prestando atención a no desviarte. Desde laguna Schmoll comienza otro escalón importante. Este sector tiene rocas un poco más grandes para trepar y finaliza en \"cancha de fútbol\". Unos pocos pasos después se llega al filo del cerro Catedral con vistas panorámicas hacia el valle del Rucaco y de fondo el cerro Tronador. La bajada por la ladera del Catedral hacia el valle debe hacerse con mucho cuidado. Al principio cada paso es como un gran escalón y después empieza una parte de piedras y arena suelta donde el pie se hunde y se desliza. Después de cuatro horas de haber salido del Frey, pisar el suelo firme en el bosque sobre el contorno del valle es un respiro. Sombra, agua, resguardo, descanso. Dejar el bosque del Rucaco atrás significa cerrar un libro de cuentos. Al salir de la zona boscosa se deja la protección del sol y del viento y el sendero empieza a subir cada vez con más pendiente. Se trata de la subida a Brecha Negra y desde su filo comienza otra bajada algo particular. Con los mismos cuidados que el descenso anterior, prestando atención a cada paso y teniendo en cuenta las señales de pintura, se vuelve a entrar en un bosque de lengas y después se cruza el arroyo que nace en la laguna Jakob. Sumale cuatro horas más al recorrido. Desde la zona de Jakob, a sólo 40 minutos está la laguna de los Témpanos. Regresar desde laguna Jakob, bordeando el arroyo Casa de Piedra hasta el Tambo Báez cerca de Colonia Suiza suele hacerse en 5 horas. Recorrido total, desde Villa Catedral hasta Tambo Báez: 35km. Solamente desde el refugio Frey al refugio San Martín - Jakob: 9km. ¿Qué vas a ver? Laguna Toncek, Laguna Schmoll, Panorámicas hacia el valle del Rucaco con vista al cerro Tronador, Panorámicas desde el filo de Brecha Negra, Valles, lagunas y filos. Hours: 6-8 horas. Height: 1600 m."
    },
    imageUrl: "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["highlightTwoMountainRefuges", "highlightAlpineLakes", "highlightHighMountainPasses"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 15,
    category: "high-mountain"
  },
  {
    id: "4",
    name: "Cerro Otto & Piedra de Habsburgo",
    type: "day-hike",
    difficulty: "moderate",
    distance: 3,
    duration: 1,
    elevation: 1405,
    requiresReservation: false,
    description: {
      en: "To reach Cerro Otto from Camping Los Coihues, you can take bus 50 on the main avenue and get off at the stop near the Lower Cable Car Station, at kilometer 5 of Avenida de los Pioneros. From there, you can go up by cable car or walk to the summit. If you go by car, follow Route 82 and then take Avenida de los Pioneros to the cable car access, where you can leave the vehicle or continue to the summit along the gravel road.",
      es: "Para llegar al Cerro Otto desde Camping Los Coihues, puedes tomar el colectivo 50 en la avenida principal y bajarte en la parada cercana a la Estación Inferior del Teleférico, en el kilómetro 5 de la Avenida de los Pioneros. Desde allí, puedes subir en teleférico o hacer la caminata hasta la cumbre. Si vas en auto, sigue la Ruta 82 y luego toma la Avenida de los Pioneros hasta el acceso al teleférico, donde puedes dejar el vehículo o continuar hasta la cumbre por el camino de ripio.",
      fr: "Pour rejoindre le Cerro Otto depuis le Camping Los Coihues, vous pouvez prendre le bus 50 sur l'avenue principale et descendre à l'arrêt près de la station inférieure du téléphérique, au kilomètre 5 de l'Avenida de los Pioneros. De là, vous pouvez monter en téléphérique ou marcher jusqu'au sommet. Si vous y allez en voiture, suivez la Route 82 puis prenez l'Avenida de los Pioneros jusqu'à l'accès au téléphérique, où vous pouvez laisser le véhicule ou continuer jusqu'au sommet par la route de gravier.",
      de: "Um den Cerro Otto vom Camping Los Coihues aus zu erreichen, können Sie den Bus 50 auf der Hauptstraße nehmen und an der Haltestelle in der Nähe der unteren Seilbahnstation am Kilometer 5 der Avenida de los Pioneros aussteigen. Von dort aus können Sie mit der Seilbahn hinauffahren oder zum Gipfel wandern. Wenn Sie mit dem Auto fahren, folgen Sie der Route 82 und nehmen Sie dann die Avenida de los Pioneros bis zum Zugang zur Seilbahn, wo Sie das Fahrzeug abstellen oder auf dem Schotterweg bis zum Gipfel weiterfahren können."
    },
    imageUrl: "/lovable-uploads/291df6e4-5c22-4747-85e4-d706e969db6b.png",
    startingPoint: "Cerro Otto base (20 min drive)",
    highlights: ["highlightPanoramicViews", "highlightHistoricSite", "highlightRestaurantAtSummit"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 20,
    busLines: "Linea 50 (25 min)",
    category: "easy-mountain"
  },
  {
    id: "5",
    name: "Lago Gutiérrez",
    type: "day-hike",
    difficulty: "easy",
    distance: 0.3, // 300m
    duration: 0.08, // 5 minutes (0.08 hours)
    elevation: 800,
    requiresReservation: false,
    description: {
      en: "A scenic lakeside trail that starts directly from Camping Los Coihues. Perfect for a morning walk with beautiful views of Lago Gutiérrez and surrounding mountains.",
      es: "Un pintoresco sendero junto al lago que comienza directamente desde Camping Los Coihues. Perfecto para una caminata matutina con hermosas vistas del Lago Gutiérrez y las montañas circundantes.",
      fr: "Un sentier pittoresque sur la rive du lac qui commence directement du Camping Los Coihues. Idéal pour une promenade matinale avec des vues magnifiques du Lago Gutiérrez et des montagnes circondantes.",
      de: "Ein schöner Wasserweg am Ufer des Lages, der direkt aus dem Camping Los Coihues beginnt. Perfekt für eine morgendliche Wanderung mit schönen Blicken auf den Lago Gutiérrez und die umliegenden Berge."
    },
    imageUrl: "/lovable-uploads/bdd46388-2e54-44ed-8cb1-f449f800bd97.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightLakeViews", "highlightBeachAccess", "highlightBirdWatching"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "6",
    name: "Mirador Lago Gutiérrez",
    type: "day-hike",
    difficulty: "easy",
    distance: 3.9,
    duration: 1,
    elevation: 950,
    requiresReservation: false,
    description: {
      en: "A short but rewarding hike with panoramic views of Lake Gutiérrez. Easy access from Camping Los Coihues.",
      es: "Una caminata corta pero gratificante con vistas panorámicas del Lago Gutiérrez. Fácil acceso desde Camping Los Coihues.",
      fr: "Une randonnée courte mais récompensante avec des vues panoramiques du Lago Gutiérrez. Accès facile depuis le Camping Los Coihues.",
      de: "Une kurze aber belohnte Wanderung mit schiczen Blicken auf den Lago Gutiérrez. Einfaches Zugang von Camping Los Coihues."
    },
    imageUrl: "/lovable-uploads/93c2508f-ddf6-4b0b-bf08-0fc63590f9ae.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightLakeViews", "highlightEasyAccess", "highlightFamilyFriendly"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "easy-mountain"
  },
  {
    id: "7",
    name: "Cascada de los Duendes",
    type: "day-hike",
    difficulty: "easy",
    distance: 3.1,
    duration: 0.75, // 45 minutes (0.75 hours)
    elevation: 900,
    requiresReservation: false,
    description: {
      en: "A charming waterfall trail with access to beautiful Gutiérrez lake beaches. Perfect starter trail directly from the campsite, following a gentle path through the native forest. Great for families and beginners.",
      es: "Un encantador sendero a la cascada con acceso a hermosas playas del lago Gutiérrez. Sendero perfecto para comenzar, directamente desde el camping, siguiendo un camino suave a través del bosque nativo. Ideal para familias y principiantes.",
      fr: "Un charmant sentier menant à une cascade avec accès aux belles plages du lac Gutiérrez. Sentier parfait pour débuter, directement depuis le camping, suivant un chemin doux à travers la forêt native. Idéal pour les familles et les débutants.",
      de: "Ein charmanter Wasserfall-Wanderweg mit Zugang zu schönen Stränden am Gutiérrez-See. Perfekter Anfängerpfad direkt vom Campingplatz aus, der einem sanften Weg durch den heimischen Wald folgt. Ideal für Familien und Anfänger."
    },
    imageUrl: "/lovable-uploads/1f998a53-3c5b-429f-8ea5-709a0af96d94.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightWaterfall", "highlightLakeBeaches", "highlightNativeForest", "highlightFamilyFriendly"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "8",
    name: "Cerro Campanario",
    type: "day-hike",
    difficulty: "easy", // Changed from "moderate" to "easy"
    distance: 1,
    duration: 1,
    elevation: 1080,
    requiresReservation: false,
    description: {
      en: "Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza.",
      es: "Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza.",
      fr: "Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza.",
      de: "Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi und Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza."
    },
    imageUrl: "/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png",
    startingPoint: "Base of Cerro Campanario (25 min bus ride)",
    highlights: ["highlightPanoramicViews", "highlightChairliftOption", "highlightMountainCafe"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 10,
    travelTime: 25,
    busLines: "Linea 50 (desde Coihues) + Linea 20 (Av. Bustillo) (40 min)",
    category: "easy-mountain"
  },
  {
    id: "9",
    name: "Circuito Chico - Lago Moreno",
    type: "day-hike",
    difficulty: "easy",
    distance: 8,
    duration: 3,
    elevation: 150,
    requiresReservation: false,
    description: {
      en: "A scenic lakeside trail following the famous Circuito Chico route. Beautiful views of Lago Moreno and surrounding mountains.",
      es: "Un pintoresco sendero junto al lago siguiendo la famosa ruta del Circuito Chico. Hermosas vistas del Lago Moreno y las montañas circundantes.",
      fr: "Un sentier pittoresque au bord du lac suivant la célèbre route du Circuito Chico. Belles vues sur le Lago Moreno et les montagnes environnantes.",
      de: "Ein malerischer Seeuferweg entlang der berühmten Circuito Chico Route. Schöne Aussichten auf den Lago Moreno und die umliegenden Berge."
    },
    imageUrl: "/lovable-uploads/2d1500b3-3ff7-49f4-8523-acf161b6f388.png",
    startingPoint: "Circuito Chico entrance (35 min bus ride)",
    highlights: ["highlightLakeViews", "highlightForestTrail", "highlightPhotographySpots"],
    transportation: ["bus", "taxi", "private-transfer"],
    distanceFromCampsite: 15,
    travelTime: 35,
    busLines: "Line 20",
    category: "walking-path"
  },
  {
    id: "10",
    name: "Colonia Suiza",
    type: "day-hike",
    difficulty: "easy",
    distance: 0, // Changed from 6 to 0 to hide distance information
    duration: 1,
    elevation: 850,
    requiresReservation: false,
    description: {
      en: "To reach Colonia Suiza from Camping Los Coihues, you can take bus 50 to downtown Bariloche and then transfer to bus 10, which takes you directly to Colonia Suiza. If going by car, follow Route 82 until connecting with Provincial Route 79, a gravel road that will take you to your destination in about 7 km. You can also go by bicycle or walking along the Old Road to Colonia Suiza, a forest-surrounded path that crosses the slope of Cerro López. Colonia Suiza is a picturesque village on the shores of Lake Moreno, known for its history, its gastronomy and its natural surroundings. Founded by Swiss immigrants in the late 19th century, it preserves rustic architecture and a traditional atmosphere. It's famous for its craft fair and its typical gastronomy, especially curanto, an ancestral dish cooked underground.",
      es: "Para llegar a Colonia Suiza desde Camping Los Coihues, puedes tomar el colectivo bus 50 hacia el centro de Bariloche y luego hacer combinación con el bus 10, que te lleva directamente a Colonia Suiza. Si vas en auto, sigue la Ruta 82 hasta conectar con la Ruta Provincial 79, un camino de ripio que en unos 7 km te llevará a destino. También puedes ir en bicicleta o caminando por el Camino Viejo a Colonia Suiza, un sendero rodeado de bosque que atraviesa el faldeo del Cerro López. Colonia Suiza es un pintoresco poblado a orillas del lago Moreno, conocido por su historia, su gastronomía y su entorno natural. Fundada por inmigrantes suizos a fines del siglo XIX, conserva una arquitectura rústica y una atmosphera tradicional. Es famosa por su feria artesanal y su gastronomía típica, especialmente el curanto, un plato ancestral cocinado bajo tierra.",
      fr: "Pour rejoindre Colonia Suiza depuis Camping Los Coihues, vous pouvez prendre le bus 50 vers le centre-ville de Bariloche, puis correspondre avec le bus 10, qui vous mène directement à Colonia Suiza. Si vous y allez en voiture, suivez la Route 82 jusqu'à la connexion avec la Route Provinciale 79, une route de gravier qui vous mènera à destination en environ 7 km. Vous pouvez également y aller à vélo ou à pied par le Vieux Chemin de Colonia Suiza, un sentier entouré de forêt qui traverse la pente du Cerro López. Colonia Suiza est un village pittoresque sur les rives du lac Moreno, connu pour son histoire, sa gastronomie et son environnement naturel. Fondé par des immigrants suisses à la fin du XIXe siècle, il conserve une architecture rustique et une atmosphère traditionnelle. Il est célèbre pour son marché artisanal et sa gastronomie typique, notamment le curanto, un plat ancestral cuit sous terre.",
      de: "Um Colonia Suiza vom Camping Los Coihues zu erreichen, können Sie den Bus 50 in die Innenstadt von Bariloche nehmen und dann in den Bus 10 umsteigen, der Sie direkt nach Colonia Suiza bringt. Wenn Sie mit dem Auto fahren, folgen Sie der Route 82 bis zur Verbindung mit der Provinzstraße 79, einer Schotterstraße, die Sie in etwa 7 km zu Ihrem Ziel führt. Sie können auch mit dem Fahrrad oder zu Fuß über den alten Weg nach Colonia Suiza fahren, einen von Wald umgebenen Pfad, der den Hang des Cerro López überquert. Colonia Suiza ist ein malerisches Dorf am Ufer des Moreno-Sees, bekannt für seine Geschichte, seine Gastronomie und seine natürliche Umgebung. Gegründet von Schweizer Einwanderern im späten 19. Jahrhundert, bewahrt es eine rustikale Architektur und eine traditionelle Atmosphäre. Es ist berühmt für seinen Kunsthandwerksmarkt und seine typische Gastronomie, besonders das Curanto, ein uraltes Gericht, das unter der Erde gekocht wird."
    },
    imageUrl: "/lovable-uploads/2d1500b3-3ff7-49f4-8523-acf161b6f388.png",
    startingPoint: "Colonia Suiza (30 min by bus)",
    highlights: ["highlightHistoricVillage", "highlightCraftsMarket", "highlightTraditionalFood"],
    transportation: ["bus", "taxi", "private-transfer"],
    distanceFromCampsite: 12,
    travelTime: 30,
    busLines: "Linea 50 (desde Coihues) + Linea 10 (desde centro) (40 min)",
    category: "walking-path"
  }
];
