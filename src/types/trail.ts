
export type TrailType = "day-hike" | "multi-day";
export type Difficulty = "easy" | "moderate" | "hard" | "expert";
export type TransportationType = "bus" | "taxi" | "hitchhiking" | "private-transfer";
export type TravelTimeCategory = "less-than-30min" | "30min-1hour" | "1-2hours" | "more-than-2hours";

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
  travelTime: number; // in minutes
}

