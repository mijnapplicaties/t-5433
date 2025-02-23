
export type TrailType = "day-hike" | "multi-day";
export type Difficulty = "easy" | "moderate" | "hard" | "expert";
export type TransportationType = "bus" | "taxi" | "hitchhiking" | "private-transfer";
export type TravelTimeCategory = "direct-access" | "easy-access" | "medium-access";

export interface Trail {
  id: string;
  name: string;
  type: TrailType;
  difficulty: Difficulty;
  distance: number;
  duration: number;
  elevation: number;
  requiresReservation: boolean;
  description: {
    en: string;
    es: string;
    fr: string;
    de: string;
  };
  imageUrl: string;
  startingPoint: string;
  highlights: string[];
  transportation: TransportationType[];
  distanceFromCampsite: number;
  travelTime: number;
  busLines?: string; // Added this optional field
}

