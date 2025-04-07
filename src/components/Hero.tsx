
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
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
