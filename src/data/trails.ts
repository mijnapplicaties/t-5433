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
    distance: 45,
    duration: 3,
    elevation: 1080,
    requiresReservation: true,
    description: {
      en: "We recommend taking an Uber from Camping to the base of Cerro Catedral. The trip takes approximately 15 minutes. Buses often involve a long wait. This trail starts at a higher point than the one from Lake Gutiérrez, saving about 1 hour of hiking. From the base of Cerro Catedral, you can begin your ascent to Refugio Frey, enjoying spectacular views as you progress through the mountainous landscape. The effort is truly worth it when you reach the panoramic views of Lake Gutiérrez, Bariloche, and the valley that extends to the summit of Frey, an impressive landscape that rewards every step of the ascent.",
      es: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso. El esfuerzo realmente vale la pena al llegar a las vistas panorámicas del Lago Gutiérrez, Bariloche y el valle que se extiende hasta la cumbre del Frey, un paisaje impresionante que recompensa cada paso del ascenso.",
      fr: "Nous vous recommandons de prendre un Uber depuis le Camping jusqu'à la base de Cerro Catedral. Le trajet dure environ 15 minutes. Les bus impliquent souvent une longue attente. Ce sentier commence à un point plus élevé que celui du lac Gutiérrez, ce qui permet d'économiser environ 1 heure de marche. Depuis la base de Cerro Catedral, vous pouvez commencer votre ascension vers le Refugio Frey, en profitant de vues spectaculaires tout en progressant à travers le paysage montagneux. L'effort en vaut vraiment la peine lorsque vous atteignez les vues panoramiques du lac Gutiérrez, de Bariloche et de la vallée qui s'étend jusqu'au sommet du Frey, un paysage impressionnant qui récompense chaque pas de l'ascension.",
      de: "Wir empfehlen, einen Uber vom Camping zur Basis des Cerro Catedral zu nehmen. Die Fahrt dauert etwa 15 Minuten. Busse sind oft mit langen Wartezeiten verbunden. Dieser Weg beginnt an einem höheren Punkt als der vom Lago Gutiérrez, was etwa 1 Stunde Wanderzeit spart. Von der Basis des Cerro Catedral aus können Sie Ihren Aufstieg zum Refugio Frey beginnen und dabei spektakuläre Aussichten genießen, während Sie durch die Berglandschaft wandern. Die Anstrengung lohnt sich wirklich, wenn Sie die Panoramablicke auf den Lago Gutiérrez, Bariloche und das Tal erreichen, das sich bis zum Gipfel des Frey erstreckt, eine beeindruckende Landschaft, die jeden Schritt des Aufstiegs belohnt."
    },
    imageUrl: "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["highlightTwoMountainRefuges", "highlightAlpineLakes", "highlightHighMountainPasses"],
    transportation: ["private-transfer", "taxi", "bus"],
    distanceFromCampsite: 8,
    travelTime: 15,
    busLines: "Linea 50 (desde Coihues hasta km 8 ruta 82) + Linea 55 (Ruta 82)",
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
      fr: "Un charmant sentier menant à una cascade avec accès aux belles plages du lac Gutiérrez. Sentier parfait pour débuter, directement depuis le camping, suivant un chemin doux à travers la forêt native. Idéal pour les familles et les débutants.",
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
      fr: "Pour rejoindre Colonia Suiza depuis Camping Los Coihues, vous pouvez prendre le bus 50 vers le centre-ville de Bariloche, puis correspondre avec le bus 10, qui vous mène directement à Colonia Suiza. Si vous y allez en voiture, suivez la Route 82 jusqu'à la connexion avec la Route Provinciale 79, une route de gravier qui vous mènera à destination en environ 7 km. Vous pouvez également y aller à vélo ou à pied par le Vieux Chemin de Colonia Suiza, un sentier entouré de forêt qui traverse le versant du Cerro López. Colonia Suiza est un village pittoresque au bord du lac Moreno, connu pour son histoire, sa gastronomie et son environnement naturel. Fondée par des immigrants suisses à la fin du XIXe siècle, elle conserve une architecture rustique et une atmosphère traditionnelle. Elle est célèbre pour son marché artisanal et sa gastronomie typique, notamment le curanto, un plat ancestral cuit sous terre.",
      de: "Um von Camping Los Coihues nach Colonia Suiza zu gelangen, können Sie den Bus 50 ins Zentrum von Bariloche nehmen und dann auf den Bus 10 umsteigen, der Sie direkt nach Colonia Suiza bringt. Wenn Sie mit dem Auto fahren, folgen Sie der Route 82 bis zur Verbindung mit der Provinzstraße 79, einem Schotterweg, der Sie in etwa 7 km ans Ziel führt. Sie können auch mit dem Fahrrad fahren oder auf dem Alten Weg nach Colonia Suiza wandern, einem von Wald umgebenen Pfad, der den Hang des Cerro López überquert. Colonia Suiza ist ein malerisches Dorf am Ufer des Moreno-Sees, bekannt für seine Geschichte, Gastronomie und natürliche Umgebung. Gegründet von Schweizer Einwanderern im späten 19. Jahrhundert, bewahrt es eine rustikale Architektur und eine traditionelle Atmosphäre. Es ist berühmt für seinen Kunsthandwerksmarkt und typische Gastronomie, insbesondere Curanto, ein uraltes Gericht, das unter der Erde gekocht wird."
    },
    imageUrl: "/lovable-uploads/964a6f6b-ae4d-469a-833a-a5f5c4aad336.png",
    startingPoint: "Colonia Suiza (30 min bus ride)",
    highlights: ["highlightHistoricSettlement", "highlightArtisanMarket", "highlightLocalCuisine", "highlightLakeAccess"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 12,
    travelTime: 30,
    busLines: "Linea 50 (desde Coihues) + Linea 20 (Av. Bustillo) (1 hr)",
    category: "walking-path"
  },
  {
    id: "11",
    name: "Cerro San Martín",
    type: "day-hike",
    difficulty: "easy",
    distance: 2.6,
    duration: 1, // 45-60 minutes (approximately 1 hour)
    elevation: 1275,
    requiresReservation: false,
    description: {
      en: "El inicio del sendero esta subiendo la Calle Balcón Lopez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido.",
      es: "El inicio del sendero esta subiendo la Calle Balcón Lopez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido.",
      fr: "El inicio del sendero esta subiendo la Calle Balcón Lopez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido.",
      de: "El inicio del sendero esta subiendo la Calle Balcón Lopez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido."
    },
    imageUrl: "/lovable-uploads/5e7df03e-d176-4498-a3f7-bc5afac27381.png",
    startingPoint: "Camping Los Coihues",
    highlights: ["highlightMountainViews", "highlightForestTrail", "highlightPanoramicVista"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "easy-mountain"
  },
  {
    id: "12",
    name: "Playa Muñoz",
    type: "day-hike",
    difficulty: "easy",
    distance: 8,
    duration: 1.5,
    elevation: 900,
    requiresReservation: false,
    description: {
      en: "A short, pleasant walk to a secluded beach on Lago Gutiérrez with crystal clear waters. The trail starts directly from Camping Los Coihues and follows the lakeshore through the native forest. Perfect for a refreshing swim in summer.",
      es: "Una caminata corta y agradable a una playa aislada en el Lago Gutiérrez con aguas cristalinas. El sendero comienza directamente desde Camping Los Coihues y sigue la costa del lago a través del bosque nativo. Perfecto para un refrescante baño en verano.",
      fr: "Une promenade courte et agréable vers une plage isolée sur le Lago Gutiérrez aux eaux cristallines. Le sentier commence directement du Camping Los Coihues et suit le rivage à travers la forêt native. Parfait pour une baignade rafraîchissante en été.",
      de: "Ein kurzer, angenehmer Spaziergang zu einem abgelegenen Strand am Lago Gutiérrez mit kristallklarem Wasser. Der Weg beginnt direkt am Camping Los Coihues und führt am Seeufer durch den heimischen Wald. Perfekt für ein erfrischendes Bad im Sommer."
    },
    imageUrl: "/lovable-uploads/dbccf672-671f-4a74-866b-6bacf864626e.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightSecludedBeach", "highlightCrystalWaters", "highlightSwimmingSpot", "highlightForestTrail"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "13",
    name: "Refugio Lopez",
    type: "multi-day",
    difficulty: "moderate",
    distance: 24,
    duration: 36,
    elevation: 1300,
    requiresReservation: true,
    description: {
      en: "A beautiful overnight trek to Refugio Lopez. From Camping Los Coihues, take bus line 20 to Arroyo Lopez (30 min). The trail offers stunning views of lakes Nahuel Huapi and Moreno. The refuge is perched on a rock outcrop with 360° panoramic views.",
      es: "Una hermosa caminata con pernocte al Refugio Lopez. Desde Camping Los Coihues, tome la línea 20 hasta Arroyo Lopez (30 min). El sendero ofrece impresionantes vistas de los lagos Nahuel Huapi y Moreno. El refugio está situado en un afloramiento rocoso con vistas panorámicas de 360°.",
      fr: "Un magnifique trek d'une nuit au Refugio Lopez. Depuis le Camping Los Coihues, prenez la ligne 20 à Arroyo Lopez (30 min). Le sentier offre des vues spectaculaires sur les lacs Nahuel Huapi et Moreno. Le refuge est perché sur un affleurement rocheux avec des vues panoramiques à 360°.",
      de: "Eine schöne Übernachtungswanderung zum Refugio Lopez. Vom Camping Los Coihues aus nehmen Sie die Linie 20 nach Arroyo Lopez (30 Minuten). Der Weg bietet atemberaubende Aussichten auf die Seen Nahuel Huapi und Moreno. Die Hütte liegt auf einem Felsvorsprung mit 360°-Panoramablick."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Arroyo Lopez (30 min bus from Los Coihues)",
    highlights: ["highlightPanoramicViewpoint", "highlightMountainRefuge", "highlightLakeViews", "highlightSunsetViews"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15,
    travelTime: 30,
    busLines: "Line 20",
    category: "high-mountain"
  },
  {
    id: "14",
    name: "Refugio Laguna Negra",
    type: "multi-day",
    difficulty: "moderate",
    distance: 42,
    duration: 72,
    elevation: 1500,
    requiresReservation: true,
    description: {
      en: "A three-day circuit trek to Laguna Negra. From Camping Los Coihues, take bus 50 to downtown and then transfer to bus 10 to Colonia Suiza. The trail offers stunning alpine views and pristine mountain lakes. One of the classic multiday treks in the region.",
      es: "Un trekking de circuito de tres días a Laguna Negra. Desde Camping Los Coihues, tome el bus 50 al centro y luego transfiera al bus 10 a Colonia Suiza. El sendero ofrece impresionantes vistas alpinas y prístinos lagos de montaña. Uno de los clásicos trekkings de varios días en la región.",
      fr: "Un trek en circuit de trois jours à Laguna Negra. Depuis le Camping Los Coihues, prenez le bus 50 vers le centre-ville, puis le service pour Colonia Suiza. Le sentier offre de superbes vues alpines et des lacs de montagne immaculés. L'un des classiques treks de plusieurs jours dans la région.",
      de: "Eine dreitägige Rundwanderung zur Laguna Negra. Vom Camping Los Coihues nehmen Sie den Bus 50 in die Innenstadt und dann den Bus 10 nach Colonia Suiza. Der Weg bietet atemberaubende Alpenblicke und unberührte Bergseen. Eine der klassischen Mehrtageswanderungen in der Region."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Colonia Suiza (40 min bus from Los Coihues)",
    highlights: ["highlightAlpineLakes", "highlightMountainRefuge", "highlightForestTrail", "highlightMultiDay"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 18,
    travelTime: 40,
    busLines: "Linea 50 (desde Coihues) + Linea 10 (a Colonia Suiza)",
    category: "high-mountain"
  },
  {
    id: "15",
    name: "Refugio Otto Meiling",
    type: "multi-day",
    difficulty: "hard",
    distance: 36,
    duration: 48, // 2 days
    elevation: 1800,
    requiresReservation: true,
    description: {
      en: "A challenging multi-day trek to Refugio Otto Meiling on Cerro Tronador. From Camping Los Coihues, take bus 50 to downtown and then transfer to the Pampa Linda service. The trail offers stunning glacial views and pristine mountain landscapes. One of the most rewarding treks in the region.",
      es: "Un desafiante trekking de varios días al Refugio Otto Meiling en el Cerro Tronador. Desde Camping Los Coihues, tome el bus 50 al centro y luego transfiera al servicio a Pampa Linda. El sendero ofrece impresionantes vistas glaciares y paisajes montañosos prístinos. Uno de los trekkings más gratificantes de la región.",
      fr: "Un trek difficile de plusieurs jours jusqu'au Refugio Otto Meiling sur le Cerro Tronador. Depuis le Camping Los Coihues, prenez le bus 50 vers le centre-ville, puis le service pour Pampa Linda. Le sentier offre des vues glaciaires spectaculaires et des paysages montagneux immaculés. L'un des treks les plus gratifiants de la région.",
      de: "Eine anspruchsvolle Mehrtageswanderung zum Refugio Otto Meiling am Cerro Tronador. Vom Camping Los Coihues nehmen Sie den Bus 50 in die Innenstadt und dann den Service nach Pampa Linda. Der Weg bietet atemberaubende Gletscherblicke und unberührte Berglandschaften. Eine der lohnendsten Wanderungen in der Region."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Pampa Linda (90 min bus + transfer from Los Coihues)",
    highlights: ["highlightGlacier", "highlightMountainRefuge", "highlightMultiDay", "highlightAlpineLakes"],
    transportation: ["bus", "private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 90,
    busLines: "Bus 50 + Pampa Linda Transfer",
    category: "high-mountain"
  },
  {
    id: "16",
    name: "Cerro Tronador - Pampa Linda",
    type: "multi-day",
    difficulty: "expert",
    distance: 45,
    duration: 72, // 3 days
    elevation: 3470,
    requiresReservation: true,
    description: {
      en: "An expert-level trek to the summit of Cerro Tronador, the highest peak in the region. Starting from Pampa Linda, this challenging multi-day adventure requires proper mountaineering experience and equipment. Spectacular views of surrounding glaciers and alpine landscapes.",
      es: "Un trekking de nivel experto a la cumbre del Cerro Tronador, el pico más alto de la región. Comenzando desde Pampa Linda, esta desafiante aventura de varios días requiere experiencia y equipo adecuado de montañismo. Vistas espectaculares de los glaciares circundantes y paisajes alpinos.",
      fr: "Un trek de niveau expert jusqu'au sommet du Cerro Tronador, le plus haut sommet de la région. Partant de Pampa Linda, cette aventure difficile de plusieurs jours nécessite une expérience d'alpinisme et un équipement approprié. Vues spectaculaires sur les glaciers environnants et les paysages alpins.",
      de: "Eine Wanderung für Experten zum Gipfel des Cerro Tronador, dem höchsten Gipfel der Region. Von Pampa Linda aus erfordert dieses anspruchsvolle Mehrtagesabenteuer Bergerfahrung und entsprechende Ausrüstung. Spektakuläre Ausblicke auf umliegende Gletscher und alpine Landschaften."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Pampa Linda (90 min bus + transfer from Los Coihues)",
    highlights: ["highlightGlacier", "highlightSummit", "highlightMultiDay", "highlightAlpineLakes"],
    transportation: ["bus", "private-transfer"],
    distanceFromCampsite: 60,
    travelTime: 90,
    busLines: "Bus 50 + Pampa Linda Transfer",
    category: "high-mountain"
  },
  {
    id: "17",
    name: "5 Lagunas",
    type: "multi-day",
    difficulty: "hard",
    distance: 40,
    duration: 72, // 3 days
    elevation: 1600,
    requiresReservation: true,
    description: {
      en: "The 5 Lagunas Circuit is a classic multi-day trek that covers five beautiful alpine lakes. This demanding route takes you through diverse high-mountain landscapes and offers stunning camping spots by pristine lakes. The trek requires good physical condition and basic outdoor experience.",
      es: "El Circuito de las 5 Lagunas es un clásico trekking de varios días que recorre cinco hermosos lagos alpinos. Esta ruta exigente te lleva a través de diversos paisajes de alta montaña y ofrece impresionantes lugares para acampar junto a lagos prístinos. El trekking requiere buena condición física y experiencia básica en actividades al aire libre.",
      fr: "Le Circuit des 5 Lagunas est un trek classique de plusieurs jours qui couvre cinq beaux lacs alpins. Cet itinéraire exigeant vous emmène à travers divers paysages de haute montagne et offre de superbes sites de camping au bord de lacs intacts. Le trek nécessite une bonne condition physique et une expérience de base en plein air.",
      de: "Der 5-Lagunen-Rundweg ist eine klassische mehrtägige Wanderung, die fünf wunderschöne Alpenseen umfasst. Diese anspruchsvolle Route führt durch verschiedene Hochgebirgslandschaften und bietet atemberaubende Campingplätze an unberührten Seen. Die Wanderung erfordert eine gute körperliche Verfassung und grundlegende Outdoor-Erfahrung."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Colonia Suiza (40 min bus from Los Coihues)",
    highlights: ["highlightAlpineLakes", "highlightMultiDay", "highlightCamping", "highlightHighMountainViews"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 18,
    travelTime: 40,
    busLines: "Linea 50 (desde Coihues) + Linea 10 (a Colonia Suiza)",
    category: "high-mountain"
  },
  {
    id: "18",
    name: "Laguna Ilón",
    type: "multi-day", // Changed from "day-hike" to "multi-day"
    difficulty: "moderate",
    distance: 12,
    duration: 5,
    elevation: 1200,
    requiresReservation: false,
    description: {
      en: "Laguna Ilón is a beautiful alpine lake hidden in the mountains near Bariloche. The trail offers spectacular views of surrounding peaks and valleys. This moderate hike takes you through native forests before reaching the pristine lake, perfect for a picnic and rest before returning.",
      es: "Laguna Ilón es un hermoso lago alpino escondido en las montañas cerca de Bariloche. El sendero ofrece vistas espectaculares de los picos y valles circundantes. Esta caminata moderada te lleva a través de bosques nativos antes de llegar al prístino lago, perfecto para un picnic y descanso antes de regresar.",
      fr: "Laguna Ilón est un magnifique lac alpin caché dans les montagnes près de Bariloche. Le sentier offre des vues spectaculaires sur les pics et les vallées environnants. Cette randonnée modérée vous emmène à travers des forêts indigènes avant d'atteindre le lac immaculé, parfait pour un pique-nique et du repos avant de revenir.",
      de: "Laguna Ilón ist ein wunderschöner Alpensee, der in den Bergen in der Nähe von Bariloche versteckt ist. Der Weg bietet spektakuläre Aussichten auf umliegende Gipfel und Täler. Diese moderate Wanderung führt Sie durch einheimische Wälder, bevor Sie den unberührten See erreichen, perfekt für ein Picknick und eine Rast, bevor Sie zurückkehren."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Pampa Linda (120 min bus + transfer from Los Coihues)", // Updated starting point to indicate Pampa Linda
    highlights: ["highlightAlpineLake", "highlightForestTrail", "highlightPanoramicViews"],
    transportation: ["private-transfer", "bus"],
    distanceFromCampsite: 60, // Updated to be similar to other Pampa Linda trails
    travelTime: 120, // Updated travel time to 120 minutes (2 hours)
    busLines: "Bus 50 + Pampa Linda Transfer",
    category: "high-mountain"
  },
  {
    id: "19",
    name: "Mirada Del Doctor",
    type: "day-hike",
    difficulty: "easy",
    distance: 4,
    duration: 2,
    elevation: 950,
    requiresReservation: false,
    description: {
      en: "Mirada Del Doctor (Doctor's View) is a relatively easy hike that rewards with spectacular panoramic views of Nahuel Huapi Lake and the surrounding mountains. This accessible trail is perfect for beginners or those looking for a shorter hike with maximum scenic reward.",
      es: "Mirada Del Doctor es una caminata relativamente fácil que recompensa con espectaculares vistas panorámicas del Lago Nahuel Huapi y las montañas circundantes. Este sendero accesible es perfecto para principiantes o aquellos que buscan una caminata más corta con máxima recompensa escénica.",
      fr: "Mirada Del Doctor (Vue du Docteur) est une randonnée relativement facile qui offre des vues panoramiques spectaculaires sur le lac Nahuel Huapi et les montagnes environnantes. Ce sentier accessible est parfait pour les débutants ou ceux qui recherchent une randonnée plus courte avec une récompense scénique maximale.",
      de: "Mirada Del Doctor (Blick des Doktors) ist eine relativ einfache Wanderung, die mit spektakulären Panoramablicken auf den Nahuel Huapi See und die umliegenden Berge belohnt. Dieser zugängliche Weg ist perfekt für Anfänger oder diejenigen, die eine kürzere Wanderung mit maximalem landschaftlichem Genuss suchen."
    },
    imageUrl: "/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png",
    startingPoint: "Near Circuito Chico (45 min bus ride)", // Updated starting point
    highlights: ["highlightPanoramicViews", "highlightLakeViews", "highlightBeginnerFriendly"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15, // Updated distance
    travelTime: 45, // Updated travel time to 45 minutes
    busLines: "Linea 50 (desde Coihues) + Linea 20 (Av. Bustillo) (45 min)", // Updated bus information
    category: "easy-mountain"
  }
];

