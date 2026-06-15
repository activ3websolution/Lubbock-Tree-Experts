
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
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-green mb-6">Complete Stump Grinding & Removal</h1>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                An old tree stump can be an unsightly obstacle in your yard, taking up valuable space and posing a tripping hazard. Lubbock Tree Experts offers fast and effective stump grinding services to residents of Lubbock, Abernathy, and Levelland, helping you reclaim your landscape.
              </p>
              
              <div className="bg-green-50 border-l-4 border-brand-green p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-brand-green mb-4">Our Stump Grinding Process</h2>
                <p>
                  We use powerful, specialized stump grinders to mechanically grind the stump down below the surface of the soil. This process is quick, efficient, and far less intrusive than traditional stump removal methods. Our stump removal service can grind stumps of any size and in any location, leaving you with a clean slate for your yard. We take care to protect the surrounding landscape during the process.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group border-b pb-4">
                      <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-gray-800 hover:text-brand-green">
                        {faq.question}
                        <span className="transform transition-transform duration-200 group-open:rotate-180">&#9660;</span>
                      </summary>
                      <p className="mt-2 text-gray-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-green mb-4">Why Remove a Tree Stump?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Improves the appearance of your property.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Eliminates a tripping hazard.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Prevents unwanted new tree growth.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Stops the spread of pests and diseases.</span>
                </li>
                 <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Frees up space for new landscaping.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-orange text-white p-8 rounded-lg my-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white">Reclaim Your Yard Today</h3>
              <p className="mt-2">Remove that unsightly stump for good. Contact us for a free estimate.</p>
              <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
                Get a Free Quote
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default StumpGrindingPage;
