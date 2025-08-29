
import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Brand } from '../../types';

interface CheckoutPageProps {
  brand: Brand;
  onBackToMenu: () => void;
  onOrderPlaced: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ brand, onBackToMenu, onOrderPlaced }) => {
  const { cartItems, cartTotal, clearCart } = useCart();

  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to the backend.
    console.log('Placing order...', { brandId: brand.id, items: cartItems, total: cartTotal });
    clearCart();
    onOrderPlaced();
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
       <button onClick={onBackToMenu} className="text-brand-green mb-6">&larr; Back to {brand.name}'s Menu</button>
       <h2 className="text-3xl font-bold mb-6">Checkout</h2>
       
       <div className="bg-brand-gray rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-3">
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-gray-300">
                        <span>{item.name} <span className="text-sm text-gray-500">x{item.quantity}</span></span>
                        <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <hr className="my-4 border-brand-light-gray" />
            <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span>${(cartTotal / 100).toFixed(2)}</span>
            </div>
       </div>

       <div className="bg-brand-gray rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Payment & Delivery (Mock)</h3>
            <p className="text-gray-400 mb-6">This is a demo. No payment is required.</p>
            <button
                onClick={handlePlaceOrder}
                className="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 rounded-lg transition-all"
            >
                Place Order
            </button>
       </div>
    </div>
  );
};

export default CheckoutPage;