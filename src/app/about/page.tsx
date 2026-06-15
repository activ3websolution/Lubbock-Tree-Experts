
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-green">About Lubbock Tree Experts</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Your trusted, locally-owned partner for professional tree care in the Hub City.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green mb-4">Our Mission: Neighbors Serving Neighbors</h2>
          <p className="text-lg text-gray-700">
            Lubbock Tree Experts was founded with a simple mission: to provide professional, reliable, and honest tree care to the communities of West Texas. We are a locally owned and operated company with deep roots in the South Plains. We aren't just another faceless company; we are your neighbors, dedicated to preserving the beauty and safety of our community.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-brand-green mb-3">Local Roots</h3>
            <p className="text-gray-600">We operate our business based on the values that define West Texas: hard work, integrity, and a commitment to our community. We know the challenges of the South Plains and provide solutions that work.</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-brand-green mb-3">Commitment to Quality</h3>
            <p className="text-gray-600">We believe in doing the job right the first time. Our team is comprised of experienced professionals who are passionate about their work. We invest in modern equipment and ongoing training to ensure the highest level of service.</p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-brand-green mb-3">Honest & Fair Pricing</h3>
            <p className="text-gray-600">When you choose us, you're choosing a company that will treat your property with respect and provide you with a fair and transparent price. No surprises, just quality work.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-brand-orange">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Work With a Team That Cares?</h2>
          <p className="mt-3 text-lg text-white max-w-2xl mx-auto">Experience the Lubbock Tree Experts difference. Contact us today for a free, no-obligation estimate and let us put our expertise to work for you.</p>
          <a href="/contact" className="mt-8 inline-block bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors">
            Request a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
