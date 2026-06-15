
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>About Lubbock Tree Experts</h1>
        <p>
          Lubbock Tree Experts was founded with a simple mission: to provide professional, reliable, and honest tree care to the communities of West Texas. We are a locally owned and operated company, and our roots run deep in the South Plains. We aren't just another faceless company; we are your neighbors.
        </p>

        <h2>Our Commitment to Quality</h2>
        <p>
          We believe in doing the job right the first time. Our team is comprised of experienced and knowledgeable tree care professionals who are passionate about their work. We invest in modern equipment and ongoing training to ensure that we are always providing the highest level of service. 
        </p>

        <h2>Our West Texas Values</h2>
        <p>
          We operate our business based on the values that define West Texas: hard work, integrity, and a commitment to community. When you choose Lubbock Tree Experts, you are choosing a company that will treat your property with respect and provide you with a fair and honest price.
        </p>

        <div className="bg-brand-orange text-white p-8 rounded-lg my-12 text-center">
          <h2 className="!text-white">Ready to Work With a Team That Cares?</h2>
          <p className="text-lg">Experience the Lubbock Tree Experts difference. Contact us today for a free estimate.</p>
          <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
            Request a Free Quote
          </a>
        </div>

      </article>
    </div>
  );
};

export default AboutPage;
