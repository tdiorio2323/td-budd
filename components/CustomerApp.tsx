
import React, { useState, useEffect } from 'react';
import { Brand, Product, ProductCategory } from '../types';
import { mockBrands, mockProducts } from '../data/mockData';
import BrandCard from './customer/BrandCard';
import ProductCard from './customer/ProductCard';
import Header from './common/Header';
import CartView from './customer/CartView';
import CategoryTabs from './customer/CategoryTabs';
import CheckoutPage from './customer/CheckoutPage';

type ViewState = 'brands' | 'menu' | 'checkout' | 'order_confirmation';

const CustomerApp: React.FC = () => {
  const [view, setView] = useState<ViewState>('brands');
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [brandProducts, setBrandProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (selectedBrand) {
      const products = mockProducts.filter(p => p.brandId === selectedBrand.id);
      setBrandProducts(products);
    } else {
      setBrandProducts([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(brandProducts);
    } else {
      setFilteredProducts(brandProducts.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, brandProducts]);

  const handleBrandSelect = (brand: Brand) => {
    setSelectedBrand(brand);
    setView('menu');
  };
  
  const handleBackToBrands = () => {
    setSelectedBrand(null);
    setView('brands');
  };

  const handleGoToCheckout = () => {
      setIsCartOpen(false);
      setView('checkout');
  };

  const handleOrderPlaced = () => {
      setView('order_confirmation');
  };


  const renderContent = () => {
    switch (view) {
      case 'brands':
        return (
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6">Choose a Dispensary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBrands.map(brand => (
                <BrandCard key={brand.id} brand={brand} onClick={handleBrandSelect} />
              ))}
            </div>
          </div>
        );
      case 'menu':
        if (!selectedBrand) return null;
        return (
          <div className="container mx-auto p-4">
            <button onClick={handleBackToBrands} className="text-brand-green mb-4">&larr; Back to all brands</button>
            <h2 className="text-3xl font-bold mb-2">{selectedBrand.name}</h2>
            <p className="text-gray-400 mb-6">Browse their menu below.</p>
            <CategoryTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      case 'checkout':
        if (!selectedBrand) return null;
        return <CheckoutPage brand={selectedBrand} onBackToMenu={() => setView('menu')} onOrderPlaced={handleOrderPlaced} />;
      
      case 'order_confirmation':
        return (
            <div className="container mx-auto p-4 text-center h-[60vh] flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-brand-green mb-4">Thank You!</h2>
                <p className="text-xl text-gray-300 mb-8">Your order has been placed successfully.</p>
                <button onClick={handleBackToBrands} className="bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 px-6 rounded-lg transition-all">
                    Shop Again
                </button>
            </div>
        )
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <main>{renderContent()}</main>
      <CartView isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onCheckout={handleGoToCheckout} />
    </div>
  );
};

export default CustomerApp;