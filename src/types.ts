export interface Dish {
  id: string;
  name: string;
  description?: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number; // e.g., 5
  date?: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  isClosed: boolean;
}

export interface DailySpecial {
  date: string;
  soup: string;
  mainCourse: string;
  replacements: string[];
}
