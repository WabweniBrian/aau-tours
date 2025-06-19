export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  location: string;
  duration: string;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  tourType: string;
  groupSize: number;
  meals: string;
  featured: boolean;
  category: string;
  additionalInfo?: string[];
}

export interface TourItineraryDay {
  title: string;
  location: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
}
