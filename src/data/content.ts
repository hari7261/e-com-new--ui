import type { Product, Collection, Article, NavLink, FooterLink, ThreeDModel } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Store', href: '/store' },
  { label: '3D Models', href: '/models' },
  { label: 'Collections', href: '/collections' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Retro Handheld Console',
    category: 'Technology',
    price: 59.99,
    image: '/images/product-console.png',
  },
  {
    id: '2',
    name: 'Horizon Glow Sneakers',
    category: 'Footwear',
    price: 129.99,
    image: '/images/product-sneakers.png',
  },
  {
    id: '3',
    name: 'Tropical Paradise Plant',
    category: 'Home',
    price: 39.99,
    image: '/images/product-plant.png',
  },
];

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Home',
    image: '/images/collection-home.jpg',
  },
  {
    id: '2',
    name: 'Footwear',
    image: '/images/collection-footwear.jpg',
  },
  {
    id: '3',
    name: 'Technology',
    image: '/images/collection-tech.jpg',
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: '10 Creative Ways to Use Digital Backgrounds in Your Projects',
    category: 'Must Read',
    categoryColor: 'bg-purple-100 text-purple-700',
    author: {
      name: 'Sarah Miller',
      role: 'Graphic Designer',
      avatar: '/images/author-avatar.jpg',
    },
    image: '/images/blog-1.jpg',
  },
  {
    id: '2',
    title: 'How to Make Your Social Media Posts Stand Out with Templates',
    category: 'Productivity',
    categoryColor: 'bg-blue-100 text-blue-700',
    author: {
      name: 'Sarah Miller',
      role: 'Graphic Designer',
      avatar: '/images/author-avatar.jpg',
    },
    image: '/images/blog-2.jpg',
  },
  {
    id: '3',
    title: "The Beginner's Guide to Using Mockups for Your Brand",
    category: 'Guides',
    categoryColor: 'bg-green-100 text-green-700',
    author: {
      name: 'Sarah Miller',
      role: 'Graphic Designer',
      avatar: '/images/author-avatar.jpg',
    },
    image: '/images/blog-3.jpg',
  },
  {
    id: '4',
    title: 'Why a Fast, Mobile-Friendly Store Matters for Your Customers',
    category: 'Trends',
    categoryColor: 'bg-orange-100 text-orange-700',
    author: {
      name: 'Sarah Miller',
      role: 'Graphic Designer',
      avatar: '/images/author-avatar.jpg',
    },
    image: '/images/blog-4.jpg',
  },
];

export const threeDModels: ThreeDModel[] = [
  {
    id: '3d-1',
    name: 'Abstract Knot Sculpture',
    category: 'Abstract',
    price: 29.99,
    image: '/images/3d-model-1.jpg',
    format: 'OBJ, FBX, GLB',
    polygons: '12K',
    description: 'Elegant abstract sculpture perfect for modern visualizations.',
    isFree: false,
  },
  {
    id: '3d-2',
    name: 'Futuristic Robot Character',
    category: 'Characters',
    price: 79.99,
    image: '/images/3d-model-2.jpg',
    format: 'OBJ, FBX, BLEND',
    polygons: '45K',
    description: 'Fully rigged robot character with PBR materials.',
    isFree: false,
  },
  {
    id: '3d-3',
    name: 'Fluid Organic Shape',
    category: 'Abstract',
    price: 0,
    image: '/images/3d-model-3.jpg',
    format: 'OBJ, GLB',
    polygons: '8K',
    description: 'Free organic fluid shape for your creative projects.',
    isFree: true,
  },
  {
    id: '3d-4',
    name: 'Modern Architecture',
    category: 'Architecture',
    price: 49.99,
    image: '/images/3d-model-4.jpg',
    format: 'OBJ, FBX, 3DS',
    polygons: '85K',
    description: 'Photorealistic modern building with interior details.',
    isFree: false,
  },
];

export const footerPages: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Store', href: '/store' },
  { label: '3D Models', href: '/models' },
  { label: 'Collections', href: '/collections' },
  { label: 'Pricing', href: '/pricing' },
];

export const footerInfo: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Support', href: '/support' },
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];
