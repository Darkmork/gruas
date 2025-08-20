export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FleetItem {
  name: string;
  type: 'telescopica' | 'rt' | 'pluma';
  capacity: number;
  image: string;
  specs: { label: string; value: string }[];
  available: 'Hoy' | 'Mañana' | 'Consultar';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    logo: string;
}

export interface SuccessCase {
    title: string;
    image: string;
    metrics: { value: string; label: string }[];
}
