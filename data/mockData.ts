
import { Brand, Product, ProductCategory, Order } from '../types';

export const mockBrands: Brand[] = [
  { id: '1', name: 'Green Valley Dispensary', logoUrl: 'https://i.imgur.com/your-logo-id.png', isActive: true },
  { id: '2', name: 'Cannabis Coast', logoUrl: 'https://i.imgur.com/your-logo-id.png', isActive: true },
  { id: '3', name: 'High Quality Herbs', logoUrl: 'https://i.imgur.com/your-logo-id.png', isActive: true },
];

export const mockProducts: Product[] = [
  {
    id: 'p1',
    brandId: '1',
    name: 'OG Kush',
    description: 'Classic indica strain with earthy flavors.',
    category: ProductCategory.FLOWER,
    price: 3500,
    imageUrl: 'https://picsum.photos/seed/ogkush/400/400',
    thcPercentage: 22.5,
    cbdPercentage: 0.8,
    strainType: 'indica',
    weightGrams: 3.5,
  },
  {
    id: 'p2',
    brandId: '1',
    name: 'Sour Diesel',
    description: 'Energizing sativa with citrus notes.',
    category: ProductCategory.FLOWER,
    price: 4000,
    imageUrl: 'https://picsum.photos/seed/sourdiesel/400/400',
    thcPercentage: 24.1,
    cbdPercentage: 0.5,
    strainType: 'sativa',
    weightGrams: 3.5,
  },
  {
    id: 'p3',
    brandId: '1',
    name: 'Hybrid Gummies',
    description: 'Delicious mixed berry gummies, 10mg THC each.',
    category: ProductCategory.EDIBLES,
    price: 2500,
    imageUrl: 'https://picsum.photos/seed/gummies/400/400',
    thcPercentage: 5.0,
    cbdPercentage: 5.0,
    strainType: 'hybrid',
    weightGrams: 10,
  },
  {
    id: 'p4',
    brandId: '2',
    name: 'Blue Dream Vape',
    description: 'Popular hybrid with sweet berry taste in a convenient vape.',
    category: ProductCategory.VAPES,
    price: 4500,
    imageUrl: 'https://picsum.photos/seed/bluedream/400/400',
    thcPercentage: 85.3,
    cbdPercentage: 1.2,
    strainType: 'hybrid',
    weightGrams: 1,
  },
  {
    id: 'p5',
    brandId: '2',
    name: 'Indica Pre-Roll Pack',
    description: '5-pack of convenient pre-rolled joints.',
    category: ProductCategory.PRE_ROLLS,
    price: 3000,
    imageUrl: 'https://picsum.photos/seed/preroll/400/400',
    thcPercentage: 19.8,
    cbdPercentage: 0.3,
    strainType: 'indica',
    weightGrams: 2.5,
  },
  {
    id: 'p6',
    brandId: '3',
    name: 'Live Resin Concentrate',
    description: 'Potent and flavorful sativa concentrate.',
    category: ProductCategory.CONCENTRATE,
    price: 6000,
    imageUrl: 'https://picsum.photos/seed/resin/400/400',
    thcPercentage: 92.7,
    cbdPercentage: 0.6,
    strainType: 'sativa',
    weightGrams: 1,
  },
];

export const mockOrders: Order[] = [
    { 
        id: 'o1', 
        customerId: 'c1',
        brandId: '1', 
        items: [{...mockProducts[0], quantity: 1}, {...mockProducts[2], quantity: 2}],
        totalAmount: 8500,
        status: 'completed',
        createdAt: new Date('2023-10-26T10:00:00Z')
    },
    { 
        id: 'o2', 
        customerId: 'c2',
        brandId: '1', 
        items: [{...mockProducts[1], quantity: 1}],
        totalAmount: 4000,
        status: 'preparing',
        createdAt: new Date()
    }
];