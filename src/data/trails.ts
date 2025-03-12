
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
      es: "El sendero comienza en Villa Los Coihues y toma aproximadamente 1 hora más que si se inicia desde Cerro Catedral. Comparte el mismo recorrido con los senderos hacia Playa Muñoz y Cascada de los Duendes, para luego continuar hacia el refugio. Es un sendero rodeado de bosque, con vistas panorámicas al Lago Gutiérrez, que luego asciende por el valle hasta alcanzar el Refugio Frey. Distancia: 10 km. Duración estimada: 4-5 horas. Cómo llegar desde Camping Los Coihues: A pie: Se puede acceder caminando desde el camping, siguiendo el sendero marcado."
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
      es: "Tomando el bus 20, bajarse en la última parada en Hotel Llao Llao. De ahí caminas por la ruta 20 minutos hasta el comienzo del sendero. De ahí es 1 hr de caminata de leve subida en bosque de coihues y cipreses de 2,6 km. El esfuerzo se ve recompensado con una vista espectacular desde la cumbre, donde se pueden admirar el Lago Moreno, el Nahuel Huapi y la Cordillera de los Andes. Después de disfrutar del mirador, el sendero desciende y permite completar el circuito de manera circular, pasando por más tramos de bosque y pequeñas playas a orillas del lago."
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
    name: "Travesía Frey-Jakob",
    type: "multi-day",
    difficulty: "hard",
    distance: 9,
    duration: 6,
    elevation: 1600,
    requiresReservation: true,
    description: {
      en: "We recommend taking an Uber from Camping to the base of Cerro Catedral. The trip takes approximately 15 minutes. Buses often involve a long wait. This trail starts at a higher point than the one from Lake Gutiérrez, saving about 1 hour of hiking. From the base of Cerro Catedral, you can begin your ascent to Refugio Frey, enjoying spectacular views as you progress through the mountainous landscape.\n\nFrom the Refugio Frey area, the trail skirts Laguna Toncek to the south, towards the ascent to Laguna Schmoll. This rocky slope is well marked and follows some twists and turns along the stream that descends from Schmoll to Toncek. This climb is significant and has many steps between rocks.\n\nEfforts have been made to protect the lagoon's wetland (mallín). A stone path was built to cross the wetland along a delineated trail without increasing erosion. Please use it carefully and stay on the marked path.\nFrom Laguna Schmoll begins another important step. This section has slightly larger rocks to climb and ends in the \"soccer field\". A few steps later, you reach the edge of Cerro Catedral with panoramic views of the Rucaco valley and Cerro Tronador in the background.\n\nThe descent down the Cathedral slope to the valley must be done with great care. At first, each step is like a large step, and then begins a section of loose stones and sand where your foot sinks and slides.\nAfter four hours of leaving Frey, stepping on firm ground in the forest along the valley's contour is a relief. Shade, water, shelter, rest.\n\nLeaving the Rucaco forest behind is like closing a storybook. Upon leaving the wooded area, you leave the protection from sun and wind, and the trail begins to climb with increasing slope. This is the ascent to Black Breach, and from its edge begins another particular descent.\n\nWith the same care as the previous descent, paying attention to each step and taking into account the paint signals, you re-enter a forest of lengas and then cross the stream that originates in Laguna Jakob. Add four more hours to the journey.\n\nFrom the Jakob area, the Laguna de los Témpanos is only 40 minutes away.\n\nReturning from Laguna Jakob, skirting the Casa de Piedra stream to Tambo Báez near Colonia Suiza usually takes 5 hours.\n\nHours: 6-8 hours.",
      es: "Recomendamos tomarse un Uber desde el Camping hasta la base del Cerro Catedral. El viaje dura aproximadamente 15 minutos. Los buses muchas veces presentan una gran espera. Este sendero comienza en un punto más alto que el que parte desde el Lago Gutiérrez, lo que permite ahorrar alrededor de 1 hora de caminata. Desde la base del Cerro Catedral, podrás iniciar el ascenso al Refugio Frey, disfrutando de vistas espectaculares mientras avanzas a través del paisaje montañoso.\n\nDesde la zona del refugio Frey, se bordea la laguna Toncek hacia el sur, hacia la subida de la laguna Schmoll. Esta pendiente de rocas está bien señalizada y sigue con algunas idas y vueltas el arroyo que baja desde Schmoll a Toncek. Esta subida es importante y tiene muchos escalones entre rocas.\n\nDesde hace un tiempo se está trabajando en proteger el humedal (mallín) de la laguna. Para eso se hizo un trayecto de piedras para atravesar el humedal por un sendero delineado sin aumentar la erosión. Por favor usálo prestando atención a no desviarte.\nDesde laguna Schmoll comienza otro escalón importante. Este sector tiene rocas un poco más grandes para trepar y finaliza en \"cancha de fútbol\". Unos pocos pasos después se llega al filo del cerro Catedral con vistas panorámicas hacia el valle del Rucaco y de fondo el cerro Tronador.\n\nLa bajada por la ladera del Catedral hacia el valle debe hacerse con mucho cuidado. Al principio cada paso es como un gran escalón y después empieza una parte de piedras y arena suelta donde el pie se hunde y se desliza.\nDespués de cuatro horas de haber salido del Frey, pisar el suelo firme en el bosque sobre el contorno del valle es un respiro. Sombra, agua, resguardo, descanso.\n\nDejar el bosque del Rucaco atrás significa cerrar un libro de cuentos. Al salir de la zona boscosa se deja la protección del sol y del viento y el sendero empieza a subir cada vez con más pendiente. Se trata de la subida a Brecha Negra y desde su filo comienza otra bajada algo particular.\n\nCon los mismos cuidados que el descenso anterior, prestando atención a cada paso y teniendo en cuenta las señales de pintura, se vuelve a entrar en un bosque de lengas y después se cruza el arroyo que nace en la laguna Jakob. Sumale cuatro horas más al recorrido.\n\nDesde la zona de Jakob, a sólo 40 minutos está la laguna de los Témpanos.\n\nRegresar desde laguna Jakob, bordeando el arroyo Casa de Piedra hasta el Tambo Báez cerca de Colonia Suiza suele hacerse en 5 horas.\n\nHoras: 6-8 horas."
    },
    imageUrl: "/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["highlightTwoMountainRefuges", "highlightAlpineLakes", "highlightHighMountainPasses"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 8,
    travelTime: 16,
    busLines: "",
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
      es: "Para llegar al Cerro Otto desde Camping Los Coihues, puedes tomar el colectivo 50 en la avenida principal y bajarte en la parada cercana a la Estación Inferior del Teleférico, en el kilómetro 5 de la Avenida de los Pioneros. Desde allí, puedes subir en teleférico o hacer la caminata hasta la cumbre. Si vas en auto, sigue la Ruta 82 y luego toma la Avenida de los Pioneros hasta el acceso al teleférico, donde puedes dejar el vehículo o continuar hasta la cumbre por el camino de ripio."
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
    distance: 0.3,
    duration: 0.08,
    elevation: 800,
    requiresReservation: false,
    description: {
      en: "Three blocks from the camping site you'll find Lake Gutiérrez. You can walk along the shore to the left, towards the Arelauquen area, or follow the road that borders the lake and leads to the path of the Cascada de los Duendes. Along this route, you'll find some beautiful small beaches on the opposite shore, about a 20-minute walk away.",
      es: "A tres cuadras del camping se encuentra el Lago Gutiérrez. Podés caminar por la costa hacia la izquierda, en dirección a la zona de Arelauquen, o seguir la calle de autos que bordea el lago y lleva al camino de la Cascada de los Duendes. En este recorrido, encontrarás algunas playitas hermosas en la costa opuesta, a unos 20 minutos de caminata."
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
      en: "The Gutierrez Lake Viewpoint is a 1-hour walk from the Camping. You need to walk 25 minutes along the road bordering Lake Gutierrez until you reach the National Park entrance. There, you'll find a sign indicating the Gutierrez Lake Viewpoint, Los Duendes Waterfall, Muñoz Beach, and the trail to Frey Refuge, all together. From this point, it's a 20-minute walk with some steep but manageable slopes.",
      es: "El Mirador al lago Gutierrez se encuentra a 1hr del Camping caminando. Hay que caminar 25 min hasta la entrada del parque nacional bordeando el Lago Gutierrez por la calle de autos hasta llegar a la entrada del Parque Nacional. De ahí, vas a encontrar un cartel señalizando el Mirador Lago Gutierrez, La Cascada de los Duendes, Playa Muñoz y el Sendero hacia el Refugio Frey. Todo junto. Son 20 minutos desde ese punto con algunas pendientes un poco empinadas pero factibles."
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
    duration: 0.75,
    elevation: 900,
    requiresReservation: false,
    description: {
      en: "It's a 30-minute walk from the Camping. You need to walk 20 minutes to the national park entrance, following the road that borders Lake Gutierrez until you reach the National Park entrance. From there, it's 10 more minutes.\n\nA charming waterfall trail with access to beautiful Gutiérrez lake beaches. Perfect starter trail directly from the campsite, following a gentle path through the native forest. Great for families and beginners.",
      es: "Está a 30 min del Camping caminando. Hay que caminar 20 min hasta la entrada del parque nacional bordeando el Lago Gutierrez por la calle de autos hasta llegar a la entrada del Parque Nacional. De ahí son 10 minutos más.\n\nUn encantador sendero a la cascada con acceso a hermosas playas del lago Gutiérrez. Sendero perfecto para comenzar, directamente desde el camping, siguiendo un camino suave a través del bosque nativo. Ideal para familias y principiantes."
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
    difficulty: "easy",
    distance: 1,
    duration: 1,
    elevation: 1080,
    requiresReservation: false,
    description: {
      en: "Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza.",
      es: "Tienes que tomar el bus 50 desde los Coihues hasta la rotonda de Av. Pioneros y luego, conectar con el bus 20 en Av. Bustillo en el km 8. Luego, bajate en el km 17.5 donde se encuentra la aerosilla al cerro campanario. En la cumbre hay una confitería, sanitarios, y un mirador desde el cual se pueden observar los lagos Nahuel Huapi y Moreno, la laguna El Trébol, la península San Pedro, la Isla Victoria, los cerros Otto, López, Goye, Bella Vista, Catedral, Capilla, el Hotel Llao Llao y las arboledas de Colonia Suiza."
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
      es: "Un pintoresco sendero junto al lago siguiendo la famosa ruta del Circuito Chico. Hermosas vistas del Lago Moreno y las montañas circundantes."
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
    distance: 0,
    duration: 1,
    elevation: 850,
    requiresReservation: false,
    description: {
      en: "To reach Colonia Suiza from Camping Los Coihues, you can take bus 50 to downtown Bariloche and then transfer to bus 10, which takes you directly to Colonia Suiza. If going by car, follow Route 82 until connecting with Provincial Route 79, a gravel road that will take you to your destination in about 7 km. You can also go by bicycle or walking along the Old Road to Colonia Suiza, a forest-surrounded path that crosses the slope of Cerro López. Colonia Suiza is a picturesque village on the shores of Lake Moreno, known for its history, its gastronomy and its natural surroundings. Founded by Swiss immigrants in the late 19th century, it preserves rustic architecture and a traditional atmosphere. It's famous for its craft fair and its typical gastronomy, especially curanto, an ancestral dish cooked underground.",
      es: "Para llegar a Colonia Suiza desde Camping Los Coihues, puedes tomar el colectivo bus 50 hacia el centro de Bariloche y luego hacer combinación con el bus 10, que te lleva directamente a Colonia Suiza. Si vas en auto, sigue la Ruta 82 hasta conectar con la Ruta Provincial 79, un camino de ripio que en unos 7 km te llevará a destino. También puedes ir en bicicleta o caminando por el Camino Viejo a Colonia Suiza, un sendero rodeado de bosque que atraviesa el faldeo del Cerro López. Colonia Suiza es un pintoresco poblado a orillas del lago Moreno, conocido por su historia, su gastronomía y su entorno natural. Fundada por inmigrantes suizos a fines del siglo XIX, conserva una arquitectura rústica y una atmosphera tradicional. Es famosa por su feria artesanal y su gastronomía típica, especialmente el curanto, un plato ancestral cocinado bajo tierra."
    },
    imageUrl: "/lovable-uploads/964a6f6b-ae4d-469a-833a-a5f5c4aad336.png",
    startingPoint: "Colonia Suiza (30 min bus ride)",
    highlights: ["highlightHistoricSettlement", "highlightArtisanMarket", "highlightLocalCuisine", "highlightLakeAccess"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 12,
    travelTime: 30,
    busLines: "Linea 50 (desde Coihues hasta Rotonda Av. Pioneros) + Linea 10 (desde Av. Bustillo km 8) (50 min)",
    category: "walking-path"
  },
  {
    id: "11",
    name: "Cerro San Martín",
    type: "day-hike",
    difficulty: "easy",
    distance: 2.6,
    duration: 1,
    elevation: 1275,
    requiresReservation: false,
    description: {
      en: "El inicio del sendero esta subiendo la Calle Balcón Lopez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido.",
      es: "El inicio del sendero esta subiendo la Calle Balcón Lopez hasta al fondo. Ahí te chocas con el Camping Ecologico y tienes que seguir caminando 30 m a la izquierda donde vas a encontrar el inicio del sendero de mano derecha. Es empinado pero se sube rápido."
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
      es: "Una caminata corta y agradable a una playa aislada en el Lago Gutiérrez con aguas cristalinas. El sendero comienza directamente desde Camping Los Coihues y sigue la costa del lago a través del bosque nativo. Perfecto para un refrescante baño en verano."
    },
    imageUrl: "/lovable-uploads/2669c291-db3b-4115-a8d9-0003a827de60.png",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["highlightLakeViews", "highlightSecludedBeach", "highlightNativeForest"],
    transportation: ["walking"],
    distanceFromCampsite: 0,
    travelTime: 0,
    category: "walking-path"
  },
  {
    id: "13",
    name: "Refugio Laguna Negra desde Colonia Suiza",
    type: "multi-day",
    difficulty: "hard",
    distance: 11,
    duration: 5,
    elevation: 1640,
    requiresReservation: true,
    description: {
      en: "La senda parte desde Colonia Suiza, con una subida leve y constante, bordeando el arroyo Goye. Continúa a lo largo del valle que presenta algunos sectores con mallines.\n\nLuego de 3 hs. se cruzan dos arroyos, primero el Navidad y luego el Negro o Goye. Aquí el camino en forma de zig-zag se torna muy empinado, son los llamados \"caracoles\".\n\nAl final de la subida hay una impresionante vista panorámica de la Laguna Negra, el Cerro Negro (que se destaca por ser el más alto) y del Refugio Manfredo Segre (también conocido como Italia) del Club Andino Bariloche.",
      es: "La senda parte desde Colonia Suiza, con una subida leve y constante, bordeando el arroyo Goye. Continúa a lo largo del valle que presenta algunos sectores con mallines.\n\nLuego de 3 hs. se cruzan dos arroyos, primero el Navidad y luego el Negro o Goye. Aquí el camino en forma de zig-zag se torna muy empinado, son los llamados \"caracoles\".\n\nAl final de la subida hay una impresionante vista panorámica de la Laguna Negra, el Cerro Negro (que se destaca por ser el más alto) y del Refugio Manfredo Segre (también conocido como Italia) del Club Andino Bariloche."
    },
    imageUrl: "/lovable-uploads/67fa31e5-4160-46c9-92fb-86aad3955a56.png",
    startingPoint: "Colonia Suiza (1 hr from Los Coihues)",
    highlights: ["highlightAlpineLake", "highlightMountainRefuge", "highlightHighMountainPasses"],
    transportation: ["bus", "taxi"],
    distanceFromCampsite: 15,
    travelTime: 60,
    busLines: "Linea 50 (los Coihues) + Linea 10 (desde Av. Bustillo km 8) hasta la Panchería del Circuito Chico (1 hr)",
    category: "high-mountain",
    region: "bariloche"
  },
  {
    id: "14",
    name: "Refugio Otto Meiling",
    type: "multi-day",
    difficulty: "hard",
    distance: 14,
    duration: 6,
    elevation: 1900,
    requiresReservation: true,
    description: {
      en: "El inicio del sendero está a pocos metros de la parada de autobuses en Pampa Linda, donde también comienza el camino hacia el Refugio Agostino Rocca. Un cartel en la bifurcación indica la dirección de ambos senderos, señalizando claramente el desvío hacia el Refugio Meiling.\n\nLa primera parte de la caminata es tranquila, con muy poco desnivel y completamente señalizada. Atraviesa un bosque nativo de imponentes coihues hasta cruzar el arroyo Castaño Overa. A partir de allí, el sendero comienza a ganar altura de manera progresiva durante un par de horas, ofreciendo las primeras vistas del Cerro Tronador.\n\nEl tramo más exigente inicia en el sector conocido como \"Caracol\", donde la pendiente se vuelve más pronunciada. Al llegar a La Almohadilla, la vegetación comienza a desaparecer y da paso a un paisaje dominado por roca volcánica y, fuera del verano, nieve. Esta última parte del ascenso es la más demandante y puede llevar entre 1 y 2 horas, dependiendo de nuestro estado físico.\n\nFinalmente, alcanzamos el Refugio Meiling, ubicado a 1.900 metros de altitud. Desde allí, se pueden admirar impresionantes vistas de los glaciares Castaño Overa (a la izquierda) y Alerce (a la derecha). El refugio se encuentra sobre el último peñón de roca que Otto Meiling identificó en la década de 1950 antes del inicio del glaciar.\nActividades desde el refugio\n\nDesde el refugio Otto Meiling se pueden realizar varias excursiones, la más popular es la caminata al Filo de la Motte 2400 mts. s.n.m., por la suave pendiente nevada del filo glaciar que divide las cuencas de los glaciares Castaño Overo y Alerce.\n\nLa caminata es de dos horas aprox. hasta el Filo de la Motte, dónde, se puede apreciar la pared Norte del Pico Argentino del Tronador, de 3300 mts de altura. Esta pared consiste en un glaciar colgante de unos 500 mts de desnivel y 50° de inclinación.\n\nEs una de las rutas clásicas de escalada al Pico Argentino. La parte inferior del Glaciar colgante se precipita a la cuenca del Glaciar Casa Pangue, casi mil metros más abajo.",
      es: "El inicio del sendero está a pocos metros de la parada de autobuses en Pampa Linda, donde también comienza el camino hacia el Refugio Agostino Rocca. Un cartel en la bifurcación indica la dirección de ambos senderos, señalizando claramente el desvío hacia el Refugio Meiling.\n\nLa primera parte de la caminata es tranquila, con muy poco desnivel y completamente señalizada. Atraviesa un bosque nativo de imponentes coihues hasta cruzar el arroyo Castaño Overa. A partir de allí, el sendero comienza a ganar altura de manera progresiva durante un par de horas, ofreciendo las primeras vistas del Cerro Tronador.\n\nEl tramo más exigente inicia en el sector conocido como \"Caracol\", donde la pendiente se vuelve más pronunciada. Al llegar a La Almohadilla, la vegetación comienza a desaparecer y da paso a un paisaje dominado por roca volcánica y, fuera del verano, nieve. Esta última parte del ascenso es la más demandante y puede llevar entre 1 y 2 horas, dependiendo de nuestro estado físico.\n\nFinalmente, alcanzamos el Refugio Meiling, ubicado a 1.900 metros de altitud. Desde allí, se pueden admirar impresionantes vistas de los glaciares Castaño Overa (a la izquierda) y Alerce (a la derecha). El refugio se encuentra sobre el último peñón de roca que Otto Meiling identificó en la década de 1950 antes del inicio del glaciar.\nActividades desde el refugio\n\nDesde el refugio Otto Meiling se pueden realizar varias excursiones, la más popular es la caminata al Filo de la Motte 2400 mts. s.n.m., por la suave pendiente nevada del filo glaciar que divide las cuencas de los glaciares Castaño Overo y Alerce.\n\nLa caminata es de dos horas aprox. hasta el Filo de la Motte, dónde, se puede apreciar la pared Norte del Pico Argentino del Tronador, de 3300 mts de altura. Esta pared consiste en un glaciar colgante de unos 500 mts de desnivel y 50° de inclinación.\n\nEs una de las rutas clásicas de escalada al Pico Argentino. La parte inferior del Glaciar colgante se precipita a la cuenca del Glaciar Casa Pangue, casi mil metros más abajo."
    },
    imageUrl: "/lovable-uploads/c2cfed37-332c-49bb-8f26-e701a5a11d48.png",
    startingPoint: "Pampa Linda (2 hrs drive from Los Coihues)",
    highlights: ["highlightGlacier", "highlightMountainRefuge", "highlightTronadorMountain"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 80,
    travelTime: 120,
    category: "high-mountain",
    region: "pampa-linda"
  },
  {
    id: "15",
    name: "Laguna Ilón",
    type: "multi-day",
    difficulty: "hard",
    distance: 14,
    duration: 4.5,
    elevation: 1385,
    requiresReservation: false,
    description: {
      en: "El sendero comienza a pocos metros de la seccional de Guardaparque de Pampa Linda, transitando el mismo sendero que lleva al refugio Otto Meiling. Luego de caminar 300 metros tomar un desvío hacia la derecha y luego de 15 minutos de marcha se llega al río Alerce, que se cruza por un puente colgante. \n\nTodo el camino está bien señalizado e inicia con una pendiente muy pronunciada hasta el cartel \"Laguna Ilón 2 horas\". Luego se continúa por un terreno relativamente plano.\n\nDesde Laguna Ilón, se puede ir hacia Mirada Del Doctor.",
      es: "El sendero comienza a pocos metros de la seccional de Guardaparque de Pampa Linda, transitando el mismo sendero que lleva al refugio Otto Meiling. Luego de caminar 300 metros tomar un desvío hacia la derecha y luego de 15 minutos de marcha se llega al río Alerce, que se cruza por un puente colgante. \n\nTodo el camino está bien señalizado e inicia con una pendiente muy pronunciada hasta el cartel \"Laguna Ilón 2 horas\". Luego se continúa por un terreno relativamente plano.\n\nDesde Laguna Ilón, se puede ir hacia Mirada Del Doctor."
    },
    imageUrl: "/lovable-uploads/ce14ff50-5572-4532-bef3-f198b4593918.png",
    startingPoint: "Pampa Linda (2 hrs drive from Los Coihues)",
    highlights: ["highlightAlpineLake", "highlightTronadorMountain", "highlightSuspensionBridge"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 80,
    travelTime: 120,
    category: "high-mountain",
    region: "pampa-linda"
  },
  {
    id: "16",
    name: "Refugio Agostino Rocca",
    type: "multi-day",
    difficulty: "hard",
    distance: 14,
    duration: 5,
    elevation: 1432,
    requiresReservation: true,
    description: {
      en: "A pocos metros de la casa del Guardaparque, verás un cartel, una huella de auto y una tranquera que marcan el inicio del sendero. La picada al refugio comienza en Pampa Linda, a 80 km de Bariloche.\nEl recorrido es muy pintoresco, cruzando ríos y bordeando el río Alerce. La última parte del sendero, conocida como \"El Caracol\", debe su nombre a su trazado zigzagueante y empinado. El camino está bien señalizado y sigue en gran parte el curso del río Alerce.\n\nLos primeros 3 kilómetros transcurren en terreno casi plano hasta llegar al puente que cruza el río Castaño Overa. A partir de allí, comienza el ascenso. Más adelante, se toma un desvío a la derecha con indicaciones hacia el Paso de las Nubes, el Refugio Agostino Rocca y el lago Frías. Luego de 700 metros, el sendero llega a la orilla del río Alerce, que se bordea por unos 5 kilómetros hasta cruzarlo por un puente.\n\nEl camino continúa rodeando un mallín por la izquierda, donde la pendiente se hace más pronunciada hasta llegar a la subida en zigzag. Tras superarla, el sendero se vuelve más suave, atravesando pequeños cañadones de piedra y mallines hasta alcanzar un amplio mallín de pastos verdes. Desde allí, en lo alto, ya se puede divisar el refugio.\nAtravesando el mallín y siguiendo las marcas que ascienden hacia la izquierda, en aproximadamente cinco minutos se llega al refugio.\n\nEl Refugio Agostino Rocca, construido por el Club Andino Bariloche, se encuentra a 1.432 metros sobre el nivel del mar, en la ladera este del cerro Tronador, en la zona conocida como Paso de las Nubes.\nEstá abastecido de energía hidroeléctrica mediante una turbina ubicada en un cauce de agua a 500 metros. Tiene capacidad para 80 personas distribuidas en 10 habitaciones y cuenta con sala de enfermería, área para refugieros, depósitos, duchas y una cocina para visitantes, donde cada caminante puede preparar su propia comida.\n\nDesde el refugio se pueden apreciar vistas imponentes de los cerros Constitución y Parque, el glaciar Frías, los picos Argentino y Chileno del cerro Tronador, y una panorámica del valle atravesado por los ríos Alerce y Frías.",
      es: "A pocos metros de la casa del Guardaparque, verás un cartel, una huella de auto y una tranquera que marcan el inicio del sendero. La picada al refugio comienza en Pampa Linda, a 80 km de Bariloche.\nEl recorrido es muy pintoresco, cruzando ríos y bordeando el río Alerce. La última parte del sendero, conocida como \"El Caracol\", debe su nombre a su trazado zigzagueante y empinado. El camino está bien señalizado y sigue en gran parte el curso del río Alerce.\n\nLos primeros 3 kilómetros transcurren en terreno casi plano hasta llegar al puente que cruza el río Castaño Overa. A partir de allí, comienza el ascenso. Más adelante, se toma un desvío a la derecha con indicaciones hacia el Paso de las Nubes, el Refugio Agostino Rocca y el lago Frías. Luego de 700 metros, el sendero llega a la orilla del río Alerce, que se bordea por unos 5 kilómetros hasta cruzarlo por un puente.\n\nEl camino continúa rodeando un mallín por la izquierda, donde la pendiente se hace más pronunciada hasta llegar a la subida en zigzag. Tras superarla, el sendero se vuelve más suave, atravesando pequeños cañadones de piedra y mallines hasta alcanzar un amplio mallín de pastos verdes. Desde allí, en lo alto, ya se puede divisar el refugio.\nAtravesando el mallín y siguiendo las marcas que ascienden hacia la izquierda, en aproximadamente cinco minutos se llega al refugio.\n\nEl Refugio Agostino Rocca, construido por el Club Andino Bariloche, se encuentra a 1.432 metros sobre el nivel del mar, en la ladera este del cerro Tronador, en la zona conocida como Paso de las Nubes.\nEstá abastecido de energía hidroeléctrica mediante una turbina ubicada en un cauce de agua a 500 metros. Tiene capacidad para 80 personas distribuidas en 10 habitaciones y cuenta con sala de enfermería, área para refugieros, depósitos, duchas y una cocina para visitantes, donde cada caminante puede preparar su propia comida.\n\nDesde el refugio se pueden apreciar vistas imponentes de los cerros Constitución y Parque, el glaciar Frías, los picos Argentino y Chileno del cerro Tronador, y una panorámica del valle atravesado por los ríos Alerce y Frías."
    },
    imageUrl: "/lovable-uploads/97d3a735-4ca9-469c-ae6e-f35916080c6c.png",
    startingPoint: "Pampa Linda (2 hrs drive from Los Coihues)",
    highlights: ["highlightMountainRefuge", "highlightRiverCrossings", "highlightTronadorMountain"],
    transportation: ["private-transfer", "taxi"],
    distanceFromCampsite: 80,
    travelTime: 120,
    category: "high-mountain",
    region: "pampa-linda"
  },
  {
    id: "17",
    name: "Refugio San Martin Jakob",
    type: "multi-day",
    difficulty: "moderate",
    distance: 14,
    duration: 6,
    elevation: 1550,
    requiresReservation: true,
    description: {
      en: "The trail to Refugio Jakob starts at Colonia Suiza and follows a beautiful path through native forests along the Casa de Piedra Stream. The initial section is an easy walk, gradually increasing in difficulty as you ascend. After about 3 hours of hiking, you'll reach a more demanding section with steeper terrain known as 'Los Caracoles' (The Snails) due to its zigzagging pattern.\n\nAfter completing this more challenging part, you'll be rewarded with stunning views of the surrounding mountains and valleys. The refuge itself is situated at 1,550 meters above sea level, on the shores of the beautiful Laguna Jakob, surrounded by impressive granite walls and native lenga forests.\n\nRefugio San Martin Jakob offers overnight accommodations with dorm-style beds, meals, and basic amenities. It's one of the most comfortable mountain refuges in the area, making it perfect for both experienced hikers and beginners looking to experience their first mountain overnight adventure.",
      es: "El sendero comienza la estancia Tambo Baez a 16 min en auto del camping. Se puede llegar desde Bariloche en auto o transporte público. En Tambo Baez hay un estacionamiento, se paga al dueño de la estancia y se puede dejar el auto ahí sin problemas.\n\nEl sendero no presenta mayores complicaciones, es un sendero tranquilo, y largo. Recorre al arroyo casa de piedra en casi todo su recorrido, hay bastante sombra y se disfruta mucho.\n\nLa ultima hora camino al refugio la pendiente se hace bastante empinada. Una vez terminado este \"caracol\" se recorren algunos metros mas o menos horizontales y se llega al refugio.\n\nSe puede acampar o dormir dentro del refugio. También se puede cenar, almorzar, y comprar algunos alimentos."
    },
    imageUrl: "/lovable-uploads/8f08a419-86bc-49e3-8707-015d86806c3e.png",
    startingPoint: "Tambo Baez (16 min drive from Los Coihues)",
    highlights: ["highlightAlpineLake", "highlightMountainRefuge", "highlightGraniteWalls", "highlightNativeForest"],
    transportation: ["taxi"],
    distanceFromCampsite: 15,
    travelTime: 16,
    busLines: "",
    category: "high-mountain",
    region: "bariloche"
  },
  {
    id: "18",
    name: "Refugio Cerro López",
    type: "multi-day",
    difficulty: "hard",
    distance: 8,
    duration: 2, // Changed from 4 to 2 hours
    elevation: 1620,
    requiresReservation: true,
    description: {
      en: "This challenging high mountain hike offers stunning panoramic views of the Nahuel Huapi National Park and the surrounding lakes. The trail starts at Villa Tacul and climbs steeply through native forest before reaching more exposed rocky terrain at higher elevations. The refuge is perched at 1,620 meters above sea level, providing shelter for overnight hikers and spectacular sunrise views over the Andean landscape.",
      es: "Esta exigente caminata de alta montaña ofrece impresionantes vistas panorámicas del Parque Nacional Nahuel Huapi y los lagos circundantes. El sendero comienza en Villa Tacul y asciende empinadamente a través del bosque nativo antes de alcanzar un terreno rocoso más expuesto en altitudes más elevadas. El refugio está ubicado a 1.620 metros sobre el nivel del mar, proporcionando refugio para excursionistas que pernoctan y espectaculares vistas del amanecer sobre el paisaje andino."
    },
    imageUrl: "/lovable-uploads/18aa5c8f-d10c-4295-a1d7-665ad54ba5c5.png",
    startingPoint: "Villa Tacul (30 min drive from Los Coihues)",
    highlights: ["highlightPanoramicViews", "highlightMountainRefuge", "highlightHighMountainPasses", "highlightNativeForest"],
    transportation: ["bus", "taxi"], // Removed "private-transfer"
    distanceFromCampsite: 18,
    travelTime: 30,
    busLines: "Linea 50 (desde Los Coihues hasta Rotonda Av. Pioneros) + Linea 10 o 13 (Av. Bustillo km 8) (50 min)",
    category: "high-mountain",
    region: "bariloche"
  }
];
