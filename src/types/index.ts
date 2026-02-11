export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  type?: 'product' | '3d-model';
  format?: string;
  polygons?: string;
}

export interface ThreeDModel {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  format: string;
  polygons: string;
  description: string;
  isFree?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  categoryColor?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
