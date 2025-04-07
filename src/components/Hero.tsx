
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById('prediction');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-background to-medical-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-950 leading-tight">
            Early PCOS Detection Through AI Prediction
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Our AI-powered tool helps identify potential Polycystic Ovary Syndrome indicators 
            based on medical parameters, providing early awareness for better health management.
          </p>
          <div className="pt-4">
            <Button 
              onClick={scrollToSection}
              className="bg-lavender-600 hover:bg-lavender-700 text-white px-6 py-6 rounded-xl flex items-center gap-2 text-lg"
            >
              Try the Prediction Tool
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-medical-300/40 to-lavender-300/40 animate-pulse-slow absolute" />
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-medical-400/50 to-lavender-400/50 animate-float absolute top-8 left-8" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-medical-500/60 to-lavender-500/60 relative top-12 left-12 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
