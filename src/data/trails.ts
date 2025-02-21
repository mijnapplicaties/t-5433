
import { Trail } from "../types/trail";

export const trails: Trail[] = [
  {
    id: "1",
    name: "Refugio Frey",
    type: "day-hike",
    difficulty: "moderate",
    distance: 20,
    duration: 6,
    elevation: 1000,
    requiresReservation: true,
    description: {
      en: "A beautiful day hike to Refugio Frey. From Camping Los Coihues, take a 15-minute drive to Cerro Catedral base, where the trail begins. The path is well-marked with red markers.",
      es: "Una hermosa caminata de un día al Refugio Frey. Desde Camping Los Coihues, tome un viaje de 15 minutos en auto hasta la base del Cerro Catedral, donde comienza el sendero. El camino está bien marcado con señales rojas."
    },
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["Alpine lake", "Mountain refuge", "Rock climbing area"],
  },
  {
    id: "2",
    name: "Cerro Llao Llao",
    type: "day-hike",
    difficulty: "easy",
    distance: 8,
    duration: 3,
    elevation: 400,
    requiresReservation: false,
    description: {
      en: "An accessible hike from Hotel Llao Llao. From Camping Los Coihues, take bus line 20 to Llao Llao (45 min ride). Trail starts behind the hotel.",
      es: "Una caminata accesible desde el Hotel Llao Llao. Desde Camping Los Coihues, tome la línea de bus 20 hasta Llao Llao (45 minutos de viaje). El sendero comienza detrás del hotel."
    },
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    startingPoint: "Hotel Llao Llao (45 min by bus from Los Coihues)",
    highlights: ["Panoramic viewpoint", "Native forest", "Lake views"],
  },
  {
    id: "3",
    name: "Refugio Otto Meiling",
    type: "multi-day",
    difficulty: "hard",
    distance: 35,
    duration: 48,
    elevation: 1800,
    requiresReservation: true,
    description: {
      en: "A challenging two-day trek. From Camping Los Coihues, take the morning bus to Pampa Linda (2-hour journey). Register at the park office before starting the hike.",
      es: "Una desafiante caminata de dos días. Desde Camping Los Coihues, tome el bus de la mañana a Pampa Linda (2 horas de viaje). Regístrese en la oficina del parque antes de comenzar la caminata."
    },
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    startingPoint: "Pampa Linda (2h bus ride from Los Coihues)",
    highlights: ["Glacier views", "Mountain refuge", "Tronador peak"],
  },
  {
    id: "4",
    name: "Laguna Negra Circuit",
    type: "multi-day",
    difficulty: "moderate",
    distance: 42,
    duration: 72,
    elevation: 1500,
    requiresReservation: true,
    description: {
      en: "A three-day circuit. From Camping Los Coihues, take bus line 10 to Colonia Suiza (30 min). Start early as the first section is exposed to sun. Register at the park entrance.",
      es: "Un circuito de tres días. Desde Camping Los Coihues, tome la línea de bus 10 a Colonia Suiza (30 minutos). Comience temprano ya que la primera sección está expuesta al sol. Regístrese en la entrada del parque."
    },
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    startingPoint: "Colonia Suiza (30 min bus from Los Coihues)",
    highlights: ["Multiple lakes", "Mountain refuges", "Forest trails"],
  },
  {
    id: "5",
    name: "Lago Gutiérrez Circuit",
    type: "day-hike",
    difficulty: "easy",
    distance: 5,
    duration: 2,
    elevation: 150,
    requiresReservation: false,
    description: {
      en: "A scenic lakeside trail that starts directly from Camping Los Coihues. Perfect for a morning walk with beautiful views of Lago Gutiérrez and surrounding mountains.",
      es: "Un pintoresco sendero junto al lago que comienza directamente desde Camping Los Coihues. Perfecto para una caminata matutina con hermosas vistas del Lago Gutiérrez y las montañas circundantes."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Camping Los Coihues (direct access)",
    highlights: ["Lake views", "Beach access", "Bird watching"],
  },
  {
    id: "6",
    name: "Frey-Jakob Circuit",
    type: "multi-day",
    difficulty: "hard",
    distance: 45,
    duration: 72,
    elevation: 2200,
    requiresReservation: true,
    description: {
      en: "A spectacular three-day trek connecting Refugio Frey and Refugio Jakob. Start from Cerro Catedral (15-min drive from Los Coihues) and end at Colonia Suiza. Return by bus to Los Coihues.",
      es: "Una espectacular travesía de tres días que conecta el Refugio Frey y el Refugio Jakob. Comience desde Cerro Catedral (15 minutos en auto desde Los Coihues) y termine en Colonia Suiza. Regrese en bus a Los Coihues."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Cerro Catedral (15 min drive from Los Coihues)",
    highlights: ["Two mountain refuges", "Alpine lakes", "High mountain passes"],
  },
  {
    id: "7",
    name: "López-Laguna Negra Circuit",
    type: "multi-day",
    difficulty: "hard",
    distance: 38,
    duration: 72,
    elevation: 2000,
    requiresReservation: true,
    description: {
      en: "A challenging three-day circuit connecting Refugio López and Refugio Laguna Negra. Take bus line 10 from Los Coihues to Colonia Suiza to start the trek.",
      es: "Un desafiante circuito de tres días que conecta el Refugio López y el Refugio Laguna Negra. Tome la línea de bus 10 desde Los Coihues hasta Colonia Suiza para comenzar la travesía."
    },
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    startingPoint: "Colonia Suiza (30 min bus from Los Coihues)",
    highlights: ["Two mountain refuges", "Panoramic views", "Technical terrain"],
  }
];
