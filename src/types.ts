
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
  id?: string;
}

export interface PestInfo {
  id: string;
  name: string;
  scientificName: string;
  orderFamily?: string;
  description: string;
  imageUrl: string;
  biology?: string;
  behavior?: string;
  control?: string;
  faq?: FAQ[];
}

export interface Branch {
  city: string;
  phone: string;
  address: string;
  isMain: boolean;
  type: string;
  lat: number;
  lng: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface VideoResource {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
}

export interface DownloadResource {
  id: number | string;
  title: string;
  description: string;
  fileSize: string;
  type: 'PDF' | 'DOC';
  url?: string;
}