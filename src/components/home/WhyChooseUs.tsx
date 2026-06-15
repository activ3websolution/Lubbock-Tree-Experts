
import React from 'react';

const reasons = [
  { title: 'Fast Service', description: 'We respond quickly to your needs and get the job done efficiently.', icon: '⚡️' },
  { title: 'Competitive Pricing', description: 'Fair, transparent pricing with free, no-obligation estimates.', icon: '💲' },
  { title: 'Safe Tree Removal', description: 'Our top priority is the safety of your property and our crew.', icon: '🛡️' },
  { title: 'Modern Equipment', description: 'We use the latest equipment to ensure a high-quality job.', icon: '🏗️' },
  { title: 'Emergency Response', description: 'Available 24/7 for urgent tree care needs.', icon: '🚑' },
  { title: 'Locally Focused', description: 'Proudly serving Lubbock and the surrounding West Texas communities.', icon: '📍' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-green">Why Choose Us?</h2>
          <p className="text-lg text-brand-charcoal">The Lubbock Tree Experts Difference</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center p-6">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-brand-green mb-2">{reason.title}</h3>
              <p className="text-brand-charcoal">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
