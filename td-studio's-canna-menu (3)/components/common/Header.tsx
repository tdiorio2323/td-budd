
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { logout, user } = useAuth();
  const { cartCount } = useCart();
  
  return (
    <header className="bg-brand-dark/80 backdrop-blur-lg sticky top-0 z-40 p-4 border-b border-brand-light-gray">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-brand-green">Canna</span> Menu
        </h1>
        <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className="relative p-2 rounded-full hover:bg-brand-gray transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">{cartCount}</span>
                )}
            </button>
            <button onClick={logout} className="bg-brand-gray hover:bg-brand-light-gray text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                Logout
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
