
import React from 'react';

const trustPoints = [
  'Licensed & Insured',
  'Free Estimates',
  'Locally Owned',
  'Fast Response Times',
  'Experienced Tree Professionals',
];

const Trust = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {trustPoints.map((point) => (
            <div key={point} className="p-4">
              <p className="font-semibold text-brand-charcoal">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
