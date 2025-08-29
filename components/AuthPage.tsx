import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const TdstudiosLogo: React.FC = () => (
  <svg viewBox="0 0 250 80" className="h-40 w-auto" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Impact, sans-serif" fontSize="40" fill="white">
      TD STUDIOS
    </text>
    <text x="50%" y="85%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fill="#16a34a" letterSpacing="2">
      DIGITAL
    </text>
  </svg>
);


const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4 bg-grid-white/[0.05]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-brand-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full max-w-md bg-black/30 backdrop-blur-sm rounded-2xl shadow-2xl shadow-green-500/10 border border-brand-light-gray p-8 z-10">
        <div className="flex justify-center mb-8">
           <TdstudiosLogo />
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-8">Sign in to continue to Canna Menu</p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@tdstudiosdigital.com"
              className="w-full bg-brand-gray border border-brand-light-gray rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
              required
            />
             <p className="text-xs text-gray-500 mt-2">Hint: `admin@tdstudiosdigital.com`, `brand@tdstudiosdigital.com`, or any other email.</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-brand-gray border border-brand-light-gray rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
            />
          </div>
          <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
            Sign In
          </button>
        </form>
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-brand-light-gray"/>
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-brand-light-gray"/>
        </div>
        <div className="space-y-4">
             <button onClick={() => login('mock.google@user.com')} className="w-full flex items-center justify-center gap-2 bg-brand-gray hover:bg-brand-light-gray text-white font-bold py-3 px-4 rounded-lg transition-all">
                Mock Google Sign In
            </button>
            <button onClick={() => login('mock.apple@user.com')} className="w-full flex items-center justify-center gap-2 bg-brand-gray hover:bg-brand-light-gray text-white font-bold py-3 px-4 rounded-lg transition-all">
                Mock Apple Sign In
            </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;