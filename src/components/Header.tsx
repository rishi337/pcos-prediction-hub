
import React from 'react';
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-gradient-to-r from-medical-600 to-lavender-700 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">PCOS Prediction Hub</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="text-white hover:text-medical-100 transition-colors">About</a></li>
            <li><a href="#prediction" className="text-white hover:text-medical-100 transition-colors">Prediction</a></li>
            <li><a href="#info" className="text-white hover:text-medical-100 transition-colors">Information</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
