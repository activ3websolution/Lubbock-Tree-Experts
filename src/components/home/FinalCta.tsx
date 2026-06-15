
import React from 'react';

const FinalCta = () => {
  return (
    <section className="bg-brand-green text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Need Tree Service in Lubbock?</h2>
        <p className="text-xl mb-8">Call Today for a Free Estimate.</p>
        <div className="flex justify-center space-x-4">
          <a href="tel:806-XXX-XXXX" className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors">
            Call (806) XXX-XXXX
          </a>
          <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
