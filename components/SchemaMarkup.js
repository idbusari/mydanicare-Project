// components/SchemaMarkup.js
import { NextSeo } from 'next-seo';

const SchemaMarkup = () => (
  <NextSeo
    title="DaniCare Psychiatry"
    description="DaniCare Psychiatry provides quality mental health services in multiple locations across Texas, including Laredo, Houston, and Dallas."
    openGraph={{
      url: 'https://mydanicare.com',
      title: 'DaniCare Psychiatry',
      description: 'DaniCare Psychiatry provides quality mental health services in multiple locations across Texas, including Laredo, Houston, and Dallas.',
      images: [
        {
          url: 'https://mydanicare.com/images/clinic.jpg', // Add an image URL if you have one
          width: 800,
          height: 600,
          alt: 'DaniCare Psychiatry Clinic',
        },
      ],
      site_name: 'DaniCare Psychiatry',
    }}
    twitter={{
      handle: '@DaniCarePsych',
      site: '@DaniCarePsych',
      cardType: 'summary_large_image',
    }}
    additionalMetaTags={[
      {
        property: 'schema.org',
        content: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'DaniCare Psychiatry',
          url: 'https://mydanicare.com',
          address: [
            {
              '@type': 'PostalAddress',
              streetAddress: 'Laredo Medical Center 1700 E Saunders Street, STE B475',
              addressLocality: 'Laredo',
              addressRegion: 'Texas',
              postalCode: '78041',
              addressCountry: 'US',
            },
            {
              '@type': 'PostalAddress',
              streetAddress: '100 enterprise drive Suite 301',
              addressLocality: 'Rockaway',
              addressRegion: 'New Jersey',
              postalCode: '07866',
              addressCountry: 'US',
            },
            {
              '@type': 'PostalAddress',
              streetAddress: '511 E.John Carpenter Freeway, Suite 500',
              addressLocality: 'Irving',
              addressRegion: 'Texas',
              postalCode: '75062',
              addressCountry: 'US',
            },
          ],
        }),
      },
    ]}
  />
);

export default SchemaMarkup;
