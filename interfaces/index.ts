// Placeholder interfaces for the project

export interface CardProps {
  children: React.ReactNode;
  // Add more props as needed
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // Add more props as needed
}

// Property listing interfaces
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  // Optional extended fields used by the property detail page
  description?: string;
  images?: string[];
  reviews?: Array<{
    name: string;
    avatar?: string;
    rating: number;
    comment: string;
  }>;
}
