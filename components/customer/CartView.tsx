
import React from 'react';
import { useCart } from '../../hooks/useCart';

interface CartViewProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartView: React.FC<CartViewProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-dark shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-6 border-b border-brand-light-gray">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-brand-gray">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4 text-brand-light-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                <div className="flex-grow">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">${(item.price / 100).toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                   <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)} className="w-14 bg-brand-gray text-center rounded" />
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500">&times;</button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
            <div className="p-6 border-t border-brand-light-gray">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg text-gray-300">Subtotal</span>
                    <span className="text-xl font-bold">${(cartTotal / 100).toFixed(2)}</span>
                </div>
                <button onClick={onCheckout} className="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 rounded-lg transition-all">
                    Proceed to Checkout
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default CartView;