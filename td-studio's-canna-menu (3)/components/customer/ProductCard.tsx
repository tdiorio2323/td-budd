
import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-brand-gray rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 border border-transparent hover:border-brand-green/50 hover:shadow-lg hover:shadow-brand-green/10">
      <div>
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white">{product.name}</h3>
            <span className="text-lg font-semibold text-brand-green">${(product.price / 100).toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-400 mb-3 h-10 overflow-hidden">{product.description}</p>
          <div className="flex flex-wrap gap-2 text-xs mb-4">
            <span className="bg-brand-light-gray text-gray-300 px-2 py-1 rounded-full">{product.strainType}</span>
            <span className="bg-brand-light-gray text-gray-300 px-2 py-1 rounded-full">THC {product.thcPercentage}%</span>
            <span className="bg-brand-light-gray text-gray-300 px-2 py-1 rounded-full">CBD {product.cbdPercentage}%</span>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-brand-green/20 text-brand-green-light border border-brand-green font-bold py-2 px-4 rounded-lg transition-all hover:bg-brand-green hover:text-white transform group-hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
