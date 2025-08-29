import React, { createContext, useState, ReactNode } from 'react';
import { User, UserRole } from '../types';
import { mockBrands } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    let role: UserRole = 'customer';
    let brandId: string | undefined = undefined;

    if (email.toLowerCase() === 'admin@tdstudiosdigital.com') {
      role = 'super_admin';
    } else if (email.toLowerCase() === 'brand@tdstudiosdigital.com') {
      role = 'brand_owner';
      brandId = mockBrands[0].id; // Assign to the first mock brand
    }

    setUser({
      id: `user-${Date.now()}`,
      email,
      role,
      brandId,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};