
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tree Removal Lubbock TX | Safe & Affordable',
  description: 'Need tree removal in Lubbock, TX? We offer safe, affordable, and professional tree removal for residential and commercial properties. Call for a free estimate.',
};

const TreeRemovalPage = () => {
  const faqs = [
    {
      question: 'How much does tree removal cost in Lubbock?',
      answer: 'The cost varies depending on the tree\'s size, location, and complexity. We provide free, no-obligation estimates for all our services.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed and insured for your protection and peace of mind.'
    },
    {
      question: 'How long does the tree removal process take?',
      answer: 'Most standard tree removals can be completed in a single day. However, larger or more complex jobs may take longer. We will provide you with a time estimate during our initial consultation.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tree Removal', url: '/tree-removal' }
  ];

  const service = {
    name: 'Tree Removal',
    description: 'Safe and efficient tree removal services in Lubbock, TX. We handle everything from dead and diseased trees to hazardous and storm-damaged tree removal.'
  };

  return (
    <>
      <SchemaMarkup faqs={faqs} breadcrumbs={breadcrumbs} service={service} />
      <div className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>Expert Tree Removal in Lubbock, TX</h1>
          <p>
            Welcome to the premier tree removal service in Lubbock and the surrounding West Texas area. At Lubbock Tree Experts, we specialize in safe, efficient, and affordable tree removal for both residential and commercial properties. Whether you have a dead, diseased, or dangerously located tree, our team of experienced professionals is here to help.
          </p>

          <h2>When is Tree Removal Necessary?</h2>
          <p>
            Deciding to remove a tree is a big decision. Here are some common reasons why homeowners and businesses in Lubbock, Wolfforth, and Shallowater choose to remove a tree:
          </p>
          <ul>
            <li>The tree is dead or dying.</li>
            <li>The tree is diseased beyond recovery.</li>
            <li>The tree has been damaged by a storm.</li>
            <li>The tree is leaning dangerously close to a structure.</li>
            <li>The tree's roots are damaging foundations or plumbing.</li>
            <li>The tree is blocking new construction.</li>
          </ul>

          <h2>Our Safe and Efficient Process</h2>
          <p>
            Safety is our number one priority. Our process for residential and commercial tree removal begins with a free on-site assessment and estimate. We'll evaluate the tree, its location, and any potential hazards. We use modern equipment and proven techniques, such as rigging and roping, to dismantle the tree piece by piece, ensuring no damage to your property. Our professional arborists are trained to handle even the most complex tree cutting service jobs with precision and care. After the tree is removed, we can also take care of the remaining stump with our <Link href="/stump-grinding">stump grinding</Link> service.
          </p>

          <h2>Frequently Asked Questions (FAQs)</h2>
          <h3>How much does tree removal cost in Lubbock?</h3>
          <p>The cost varies depending on the tree's size, location, and complexity. We provide free, no-obligation estimates for all our services.</p>
          <h3>Are you licensed and insured?</h3>
          <p>Yes, we are fully licensed and insured for your protection and peace of mind.</p>
          <h3>How long does the tree removal process take?</h3>
          <p>Most standard tree removals can be completed in a single day. However, larger or more complex jobs may take longer. We will provide you with a time estimate during our initial consultation.</p>

          <div className="bg-brand-orange text-white p-8 rounded-lg my-12 text-center">
            <h2 className="!text-white">Get a Free Tree Removal Estimate Today!</h2>
            <p className="text-lg">Don't wait for a hazardous tree to become a disaster. Call us now for a fast, free quote.</p>
            <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
              Request a Quote
            </a>
          </div>

        </article>
      </div>
    </>
  );
};

export default TreeRemovalPage;
