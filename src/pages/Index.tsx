
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InformationSection from '@/components/InformationSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-medical-800 mb-4">PCOS Prediction Tool</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Use our machine learning-based prediction tool to assess your risk of Polycystic Ovary Syndrome (PCOS)
              based on your symptoms and medical parameters.
            </p>
            <Link to="/prediction">
              <Button size="lg" className="bg-medical-600 hover:bg-medical-700 text-white">
                Go to Prediction Tool
              </Button>
            </Link>
          </div>
        </section>
        <InformationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
