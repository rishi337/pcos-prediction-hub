
import React from 'react';
import { Activity, LogIn, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-gradient-to-r from-medical-600 to-lavender-700 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">PCOS Prediction Hub</h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li><a href="/#about" className="text-white hover:text-medical-100 transition-colors">About</a></li>
              <li><a href="/#prediction" className="text-white hover:text-medical-100 transition-colors">Prediction</a></li>
              <li><a href="/#info" className="text-white hover:text-medical-100 transition-colors">Information</a></li>
            </ul>
          </nav>
          
          {!isAuthPage && (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button className="bg-white text-lavender-700 hover:bg-medical-100">
                  <User className="h-4 w-4 mr-2" />
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
