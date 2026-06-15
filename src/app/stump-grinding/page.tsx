
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Stump Grinding Lubbock TX | Fast & Effective',
  description: 'Fast and effective stump grinding and removal in Lubbock, TX. We remove unsightly stumps of all sizes. Call today for a free quote on stump grinding.',
};

const StumpGrindingPage = () => {
  const faqs = [
    {
      question: 'What happens to the wood chips?',
      answer: 'The grinding process creates a pile of wood chips. We can either use these to fill the hole, spread them as mulch in your garden beds, or haul them away for you.'
    },
    {
      question: 'Do I need to be home for the stump grinding service?',
      answer: 'Not necessarily. As long as we have access to the stump and the area is clear, we can perform the service while you are away. We will communicate with you throughout the process to ensure your complete satisfaction.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Stump Grinding', url: '/stump-grinding' }
  ];

  const service = {
    name: 'Stump Grinding',
    description: 'Complete stump grinding and removal services in Lubbock, TX. We can remove any size stump to help you reclaim your yard.'
  };

  return (
    <>
      <SchemaMarkup faqs={faqs} breadcrumbs={breadcrumbs} service={service} />
      <div className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>Complete Stump Grinding & Removal in Lubbock, TX</h1>
          <p>
            An old tree stump can be an unsightly obstacle in your yard, taking up valuable space and posing a tripping hazard. Lubbock Tree Experts offers fast and effective stump grinding services to residents of Lubbock, Abernathy, and Levelland, helping you reclaim your landscape.
          </p>

          <h2>Why Remove a Tree Stump?</h2>
          <ul>
            <li>Improves the appearance of your property.</li>
            <li>Eliminates a tripping hazard.</li>
            <li>Prevents unwanted new tree growth.</li>
            <li>Stops the spread of pests and diseases that can be harbored in old stumps.</li>
            <li>Frees up space for new landscaping, a patio, or just open lawn.</li>
          </ul>

          <h2>Our Stump Grinding Process</h2>
          <p>
            We use powerful, specialized stump grinders to mechanically grind the stump down below the surface of the soil. This process is quick, efficient, and far less intrusive than traditional stump removal methods. Our stump removal service can grind stumps of any size and in any location, leaving you with a clean slate for your yard. We take care to protect the surrounding landscape during the process.
          </p>

          <h2>Frequently Asked Questions (FAQs)</h2>
          <h3>What happens to the wood chips?</h3>
          <p>The grinding process creates a pile of wood chips. We can either use these to fill the hole, spread them as mulch in your garden beds, or haul them away for you.</p>
          <h3>Do I need to be home for the stump grinding service?</h3>
          <p>Not necessarily. As long as we have access to the stump and the area is clear, we can perform the service while you are away. We will communicate with you throughout the process to ensure your complete satisfaction.</p>

          <div className="bg-brand-orange text-white p-8 rounded-lg my-12 text-center">
            <h2 className="!text-white">Reclaim Your Yard Today</h2>
            <p className="text-lg">Remove that unsightly stump for good. Contact us for a free stump grinding estimate.</p>
            <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
              Get a Free Quote
            </a>
          </div>

        </article>
      </div>
    </>
  );
};

export default StumpGrindingPage;
