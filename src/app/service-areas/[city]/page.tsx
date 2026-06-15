
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

// This would typically come from a CMS or a database
const cityData = {
  lubbock: {
    name: 'Lubbock',
    content: 'As the hub of the South Plains, Lubbock is our home base. We are proud to offer our full range of expert tree services to our neighbors throughout the city. From historic homes in the Tech Terrace neighborhood to new developments, we understand the specific tree care needs of the Lubbock community. We are your go-to for tree service in Lubbock, TX.',
  },
  wolfforth: {
    name: 'Wolfforth',
    content: 'Serving the growing community of Wolfforth, we provide reliable tree trimming, removal, and stump grinding services to keep your property safe and beautiful. As Wolfforth expands, proper tree care is more important than ever.',
  },
  shallowater: {
    name: 'Shallowater',
    content: 'We are proud to serve the residents of Shallowater with our professional tree services. Whether you need help recovering from a storm or just want to improve the health of your trees, we are here to help.',
  },
  slaton: {
    name: 'Slaton',
    content: 'From the historic downtown to the surrounding farms, we provide the full range of our tree services to the community of Slaton. We can help you maintain the beauty and safety of your property.',
  },
  idalou: {
    name: 'Idalou',
    content: 'Lubbock Tree Experts is proud to offer our tree care services to the residents and businesses of Idalou. We can handle any job, big or small, with professionalism and care.',
  },
  abernathy: {
    name: 'Abernathy',
    content: 'We are your local Abernathy tree service experts. From tree removal to stump grinding, we have the skills and equipment to get the job done right.',
  },
  levelland: {
    name: 'Levelland',
    content: 'We provide our top-rated tree services to the city of Levelland. Contact us today for a free estimate on tree trimming, removal, and more.',
  },
  plainview: {
    name: 'Plainview',
    content: 'Serving the community of Plainview, we offer a complete range of tree care services to keep your property looking its best. We are committed to providing excellent service at a fair price.',
  },
  post: {
    name: 'Post',
    content: 'From the historic sites to the residential neighborhoods, we are proud to offer our expert tree services to the city of Post. We are your trusted partner for all your tree care needs.',
  },
};

type Props = {
  params: { city: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cityData[params.city as keyof typeof cityData];
  return {
    title: `Tree Service in ${city.name}, TX | Lubbock Tree Experts`,
    description: `Your local experts for tree service in ${city.name}, TX. We offer tree removal, trimming, stump grinding, and more. Contact us for a free estimate in ${city.name}.`,
  };
}

const CityPage = ({ params }: { params: { city: string } }) => {
  const city = cityData[params.city as keyof typeof cityData];

  if (!city) {
    return <div>City not found</div>;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: city.name, url: `/service-areas/${params.city}` }
  ];

  return (
    <>
      <SchemaMarkup breadcrumbs={breadcrumbs} />
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-green">Expert Tree Services in {city.name}, TX</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Your trusted, local tree care partner serving the {city.name} community.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="text-lg text-gray-700 space-y-6">
              <h2 className="text-3xl font-bold text-brand-green">Local Expertise in {city.name}</h2>
              <p>{city.content}</p>
              
              <h3 className="text-2xl font-bold text-brand-green pt-8">Our Services in {city.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-xl text-brand-green">Tree Removal</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-xl text-brand-green">Tree Trimming</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-xl text-brand-green">Stump Grinding</h4>
                </div>
                 <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-xl text-brand-green">Storm Cleanup</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-brand-green">
              <h3 className="text-2xl font-bold text-brand-green mb-4">Why Choose Us in {city.name}?</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="font-semibold">Local {city.name} Knowledge</li>
                <li className="font-semibold">Safety-First Approach</li>
                <li className="font-semibold">Free, No-Obligation Estimates</li>
                <li className="font-semibold">Fully Licensed & Insured</li>
                <li className="font-semibold">100% Satisfaction Guarantee</li>
              </ul>
            </div>
            
            <div className="bg-brand-orange text-white p-8 rounded-lg my-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white">Get a Free Estimate in {city.name}</h3>
              <p className="mt-2">Contact us today for a free estimate on any of our tree services in the {city.name} area.</p>
              <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
                Request a Quote
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default CityPage;
