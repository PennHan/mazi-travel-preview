export interface Itinerary {
  id: number;
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  imageUrl: string;
}

export interface LinkGroup {
  title: string;
  links: string[];
}