
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

const ServiceAreasPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brand-green mb-4">Our Service Areas</h1>
        <p className="text-lg text-brand-charcoal mb-8">We are proud to offer our expert tree services to the following communities in West Texas:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cities.map((city) => (
          <a 
            key={city} 
            href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-2xl font-bold text-brand-green">{city}, TX</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreasPage;
