
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PredictionForm from '@/components/PredictionForm';
import InformationSection from '@/components/InformationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PredictionForm />
        <InformationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
