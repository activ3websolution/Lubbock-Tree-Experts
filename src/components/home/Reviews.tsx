
import React from 'react';

const testimonials = [
  {
    quote: '"Lubbock Tree Experts did an amazing job removing a huge, dangerous tree from our backyard. They were fast, professional, and left the area spotless. Highly recommend!"',
    name: 'John D.',
    location: 'Lubbock, TX'
  },
  {
    quote: '"Fantastic service! We had some major storm damage and they responded immediately. Their crew was incredible and handled everything safely and efficiently."',
    name: 'Jane S.',
    location: 'Wolfforth, TX'
  },
  {
    quote: '"We use them for all our tree trimming needs. Our trees have never looked healthier. A truly professional and reliable local company."',
    name: 'David P.',
    location: 'Shallowater, TX'
  },
];

const Reviews = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-green">What Our Customers Say</h2>
          <p className="text-lg text-brand-charcoal">Real Reviews from Your Neighbors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <p className="text-brand-charcoal italic mb-6">{testimonial.quote}</p>
              <p className="font-bold text-brand-green">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
