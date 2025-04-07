
import React from 'react';
import Header from '@/components/Header';
import PredictionForm from '@/components/PredictionForm';
import Footer from '@/components/Footer';

const Prediction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-10 px-4 md:px-8 bg-medical-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-medical-800 mb-4 text-center">PCOS Risk Assessment Tool</h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
              Complete the form below with your medical information to receive a preliminary PCOS risk assessment. 
              This tool uses machine learning but is not a substitute for professional medical diagnosis.
            </p>
          </div>
        </div>
        <PredictionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Prediction;
