
export enum ProductCategory {
  FLOWER = 'Flower',
  EDIBLES = 'Edibles',
  PRE_ROLLS = 'Pre Rolls',
  VAPES = 'Disposable Vapes',
  CONCENTRATE = 'Concentrate',
}

export interface Product {
  id: string;
  brandId: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number; // in cents
  imageUrl: string;
  thcPercentage: number;
  cbdPercentage: number;
  strainType: 'indica' | 'sativa' | 'hybrid';
  weightGrams: number;
}

export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  isActive: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerId: string;
  brandId: string;
  items: CartItem[];
  totalAmount: number; // in cents
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  createdAt: Date;
}

export type UserRole = 'customer' | 'brand_owner' | 'super_admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  brandId?: string; // Only for brand_owner
}
