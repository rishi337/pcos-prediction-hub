
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-800 text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">PCOS Prediction Hub</h3>
            <p className="text-medical-100 mb-4 max-w-md">
              Our mission is to increase awareness and early detection of PCOS, 
              empowering women with knowledge to take charge of their health.
            </p>
            <div className="flex items-center text-medical-100">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400" />
              <span>for better health outcomes</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-medical-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-medical-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#prediction" className="text-medical-200 hover:text-white transition-colors">Prediction Tool</a></li>
              <li><a href="#info" className="text-medical-200 hover:text-white transition-colors">PCOS Information</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-medical-100">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://www.womenshealth.gov/a-z-topics/polycystic-ovary-syndrome" target="_blank" rel="noopener noreferrer" className="text-medical-200 hover:text-white transition-colors">Women's Health</a></li>
              <li><a href="https://www.pcosaa.org/" target="_blank" rel="noopener noreferrer" className="text-medical-200 hover:text-white transition-colors">PCOS Awareness Association</a></li>
              <li><a href="https://www.nichd.nih.gov/health/topics/pcos" target="_blank" rel="noopener noreferrer" className="text-medical-200 hover:text-white transition-colors">NIH - PCOS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-medical-600 mt-8 pt-6 text-center text-medical-300">
          <p>© {currentYear} PCOS Prediction Hub. This is a demonstration application for educational purposes only.</p>
          <p className="mt-2 text-xs">
            This tool is not intended to replace professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions 
            you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
