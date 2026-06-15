
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
      <div className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>Professional Tree Trimming in Lubbock, TX</h1>
          <p>
            Proper tree trimming and pruning are essential for maintaining the health, beauty, and safety of your trees. At Lubbock Tree Experts, we provide professional tree trimming services for residents and businesses throughout the South Plains, including Slaton and Idalou.
          </p>

          <h2>Benefits of Regular Tree Trimming</h2>
          <ul>
            <li>Improves tree health by removing dead or diseased branches.</li>
            <li>Enhances the structural integrity of the tree.</li>
            <li>Reduces the risk of storm damage from falling limbs.</li>
            <li>Increases sunlight exposure for your lawn and other plants.</li>
            <li>Improves the overall aesthetic of your property.</li>
          </ul>

          <h2>Our Trimming and Pruning Services</h2>
          <p>
            Our certified arborists understand the specific needs of West Texas trees. We offer a variety of trimming services, including crown cleaning, crown thinning, crown raising, and structural pruning, all designed to keep your trees healthy and beautiful for years to come. This tree cutting service is not just about aesthetics; it's an investment in the long-term health and safety of your property.
          </p>

          <h2>Frequently Asked Questions (FAQs)</h2>
          <h3>When is the best time to trim trees in West Texas?</h3>
          <p>The best time for trimming depends on the type of tree. Generally, the dormant season (late fall or winter) is ideal for most trimming. However, dead or hazardous branches can and should be removed at any time of year.</p>
          <h3>What's the difference between tree trimming and pruning?</h3>
          <p>While often used interchangeably, trimming usually refers to shaping and aesthetics, while pruning focuses on the health of the tree, removing dead or diseased branches to encourage healthy growth.</p>

          <div className="bg-brand-orange text-white p-8 rounded-lg my-12 text-center">
            <h2 className="!text-white">Schedule Your Tree Trimming Service</h2>
            <p className="text-lg">Keep your trees healthy and beautiful. Contact us today for a free estimate on our professional trimming services.</p>
            <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
              Request a Free Estimate
            </a>
          </div>

        </article>
      </div>
    </>
  );
};

export default TreeTrimmingPage;
