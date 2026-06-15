
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

interface Service {
  name: string;
  description: string;
}

interface SchemaProps {
  faqs?: FAQ[];
  breadcrumbs?: Breadcrumb[];
  service?: Service;
}

const SchemaMarkup: React.FC<SchemaProps> = ({ faqs, breadcrumbs, service }) => {
  const siteUrl = 'https://www.lubbocktreeexperts.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Lubbock Tree Experts',
    'url': siteUrl,
    'logo': `${siteUrl}/logo.png`, // Placeholder
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TreeInstallation',
    'name': 'Lubbock Tree Experts',
    'image': `${siteUrl}/hero.jpg`,
    '@id': siteUrl,
    'url': siteUrl,
    'telephone': '(806) XXX-XXXX',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Main St', // Placeholder
      'addressLocality': 'Lubbock',
      'addressRegion': 'TX',
      'postalCode': '79401',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 33.5779, // Placeholder
      'longitude': -101.8552 // Placeholder
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '13:00'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/lubbocktreeexperts', // Placeholder
      'https://twitter.com/lubbocktreeexp' // Placeholder
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteUrl,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const schemas: any[] = [organizationSchema, localBusinessSchema, websiteSchema];

  if (breadcrumbs) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': `${siteUrl}${crumb.url}`
      }))
    };
    schemas.push(breadcrumbSchema);
  }

  if (faqs) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
    schemas.push(faqSchema);
  }

  if (service) {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': service.name,
      'provider': {
        '@id': siteUrl
      },
      'description': service.description,
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Lubbock'
      }
    };
    schemas.push(serviceSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};

export default SchemaMarkup;
