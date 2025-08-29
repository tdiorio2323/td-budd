
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { mockBrands } from '../data/mockData';
import BrandManager from './admin/BrandManager';

const SuperAdminDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    
    if (!user) return null;

    return (
        <div className="min-h-screen bg-brand-dark text-white">
            <header className="bg-brand-gray p-4 border-b border-brand-light-gray">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Canna Menu Admin</h1>
                        <p className="text-sm text-gray-400">Welcome, {user.email}</p>
                    </div>
                    <button onClick={logout} className="bg-brand-light-gray hover:bg-red-600/50 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Logout
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-6">
                <BrandManager brands={mockBrands} />
            </main>
        </div>
    );
};

export default SuperAdminDashboard;
