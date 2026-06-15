
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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-green">Serving Lubbock & The South Plains</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">We are proud to offer our expert tree services to the following communities throughout West Texas.</p>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <a 
              key={city} 
              href={`/service-areas/${city.toLowerCase().replace(' ', '-')}`}
              className="group block bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-orange transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-brand-green group-hover:text-brand-orange transition-colors duration-300">{city}, TX</h2>
            </a>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-brand-green">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Don't See Your City?</h2>
          <p className="mt-3 text-lg text-white max-w-2xl mx-auto">If you're in the South Plains area and don't see your location listed, give us a call! We may still be able to help.</p>
          <a href="/contact" className="mt-8 inline-block bg-brand-orange text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreasPage;
