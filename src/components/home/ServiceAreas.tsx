
import React from 'react';

const cities = [
  'Lubbock',
  'Wolfforth',
  'Shallowater',
  'Slaton',
  'Idalou',
  'Abernathy',
  'Levelland',
  'Plainview',
  'Post',
];

const ServiceAreas = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-green mb-6">Serving Lubbock and the Entire South Plains</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city) => (
            <a 
              key={city} 
              href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
              className="bg-white border border-gray-200 rounded-full px-6 py-2 text-brand-charcoal font-semibold hover:bg-brand-green hover:text-white transition-colors"
            >
              {city}, TX
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
