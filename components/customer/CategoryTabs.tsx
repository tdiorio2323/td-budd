
import React from 'react';
import { ProductCategory } from '../../types';

interface CategoryTabsProps {
  selectedCategory: ProductCategory | 'All';
  setSelectedCategory: (category: ProductCategory | 'All') => void;
}

const categories: (ProductCategory | 'All')[] = ['All', ...Object.values(ProductCategory)];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-4 -mx-4 px-4">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-brand-green text-white'
              : 'bg-brand-gray text-gray-300 hover:bg-brand-light-gray'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;