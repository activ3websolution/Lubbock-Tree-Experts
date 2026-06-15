
import React from 'react';
import Link from 'next/link';

const services = [
  { name: 'Tree Removal', path: '/tree-removal', description: 'Safe and efficient removal of unwanted or hazardous trees.' },
  { name: 'Tree Trimming', path: '/tree-trimming', description: 'Professional trimming and pruning to improve tree health and appearance.' },
  { name: 'Stump Grinding', path: '/stump-grinding', description: 'Complete stump removal to reclaim your yard.' },
  { name: 'Emergency Tree Service', path: '/emergency-tree-service', description: '24/7 response for storm-damaged or fallen trees.' },
  { name: 'Storm Damage Cleanup', path: '/storm-cleanup', description: 'Fast and thorough cleanup after a storm.' },
  { name: 'Land & Brush Clearing', path: '/land-clearing', description: 'Clearing lots and land of trees, brush, and debris.' },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-green mb-2">Our Services</h2>
        <p className="text-lg text-brand-charcoal mb-12">Providing comprehensive tree care for West Texas.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-brand-green mb-4">{service.name}</h3>
              <p className="text-brand-charcoal mb-6">{service.description}</p>
              <Link href={service.path} className="font-bold text-brand-orange hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
