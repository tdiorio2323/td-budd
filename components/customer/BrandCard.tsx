
import React from 'react';
import { Brand } from '../../types';

interface BrandCardProps {
  brand: Brand;
  onClick: (brand: Brand) => void;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand, onClick }) => {
  return (
    <div
      onClick={() => onClick(brand)}
      className="bg-brand-gray rounded-xl overflow-hidden cursor-pointer group transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-green/20"
    >
      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/${brand.id}/400/200)` }}></div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{brand.name}</h3>
        <p className="text-sm text-gray-400">View Menu &rarr;</p>
      </div>
    </div>
  );
};

export default BrandCard;