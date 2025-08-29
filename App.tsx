
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { CartProvider } from './context/CartContext';
import AuthPage from './components/AuthPage';
import CustomerApp from './components/CustomerApp';
import BrandDashboard from './components/BrandDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthPage />;
  }

  switch (user.role) {
    case 'super_admin':
      return <SuperAdminDashboard />;
    case 'brand_owner':
      return <BrandDashboard />;
    case 'customer':
    default:
      return (
        <CartProvider>
          <CustomerApp />
        </CartProvider>
      );
  }
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;