
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { mockBrands, mockOrders, mockProducts } from '../data/mockData';
import { Brand, Order, Product } from '../types';
import ProductManager from './brand/ProductManager';
import OrderManager from './brand/OrderManager';

const BrandDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [brand, setBrand] = useState<Brand | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (user && user.role === 'brand_owner' && user.brandId) {
            setBrand(mockBrands.find(b => b.id === user.brandId) || null);
            setProducts(mockProducts.filter(p => p.brandId === user.brandId));
            setOrders(mockOrders.filter(o => o.brandId === user.brandId));
        }
    }, [user]);

    if (!user || !brand) {
        return <div className="p-8">Loading brand data...</div>;
    }

    return (
        <div className="min-h-screen bg-brand-dark text-white">
            <header className="bg-brand-gray p-4 border-b border-brand-light-gray">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">{brand.name}</h1>
                        <p className="text-sm text-gray-400">Brand Dashboard</p>
                    </div>
                    <button onClick={logout} className="bg-brand-light-gray hover:bg-red-600/50 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Logout
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-6 space-y-8">
                <OrderManager orders={orders} />
                <ProductManager products={products} />
            </main>
        </div>
    );
};

export default BrandDashboard;
