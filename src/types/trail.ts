
export type TrailType = "day-hike" | "multi-day";
export type Difficulty = "easy" | "moderate" | "hard" | "expert";
export type TransportationType = "bus" | "taxi" | "hitchhiking" | "private-transfer";

export interface Trail {
  id: string;
  name: string;
  type: TrailType;
  difficulty: Difficulty;
  distance: number; // in kilometers
  duration: number; // in hours
  elevation: number; // in meters
  requiresReservation: boolean;
  description: {
    en: string;
    es: string;
  };
  imageUrl: string;
  startingPoint: string;
  highlights: string[];
  transportation: TransportationType[];
  distanceFromCampsite: number; // in kilometers
}

