
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tree Trimming Lubbock TX | Professional Pruning',
  description: 'Professional tree trimming and pruning services in Lubbock, TX. We improve the health, safety, and beauty of your trees. Contact us for a free estimate.',
};

const TreeTrimmingPage = () => {
  const faqs = [
    {
      question: 'When is the best time to trim trees in West Texas?',
      answer: 'The best time for trimming depends on the type of tree. Generally, the dormant season (late fall or winter) is ideal for most trimming. However, dead or hazardous branches can and should be removed at any time of year.'
    },
    {
      question: 'What\'s the difference between tree trimming and pruning?',
      answer: 'While often used interchangeably, trimming usually refers to shaping and aesthetics, while pruning focuses on the health of the tree, removing dead or diseased branches to encourage healthy growth.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tree Trimming', url: '/tree-trimming' }
  ];

  const service = {
    name: 'Tree Trimming',
    description: 'Professional tree trimming and pruning services in Lubbock, TX. We help improve the health, beauty, and safety of your trees.'
  };

  return (
    <>
      <SchemaMarkup faqs={faqs} breadcrumbs={breadcrumbs} service={service} />
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-green mb-6">Professional Tree Trimming in Lubbock, TX</h1>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Proper tree trimming and pruning are essential for maintaining the health, beauty, and safety of your trees. At Lubbock Tree Experts, we provide professional tree trimming services for residents and businesses throughout the South Plains, including Slaton and Idalou.
              </p>
              
              <div className="bg-green-50 border-l-4 border-brand-green p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-brand-green mb-4">Our Trimming & Pruning Services</h2>
                <p>
                  Our certified arborists understand the specific needs of West Texas trees. We offer a variety of trimming services, including crown cleaning, crown thinning, crown raising, and structural pruning, all designed to keep your trees healthy and beautiful for years to come. This tree cutting service is not just about aesthetics; it's an investment in the long-term health and safety of your property.
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
              <h3 className="text-2xl font-bold text-brand-green mb-4">Benefits of Regular Trimming</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Improves tree health by removing dead or diseased branches.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Enhances the structural integrity of the tree.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Reduces the risk of storm damage from falling limbs.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Increases sunlight exposure for your lawn and other plants.</span>
                </li>
                 <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Improves the overall aesthetic of your property.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-orange text-white p-8 rounded-lg my-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white">Schedule Your Trimming</h3>
              <p className="mt-2">Keep your trees healthy and beautiful. Contact us today for a free estimate.</p>
              <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
                Request a Free Estimate
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default TreeTrimmingPage;
