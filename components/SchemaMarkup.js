// components/SchemaMarkup.js
import { JsonLd } from 'next-schema-org';

const SchemaMarkup = () => (
  <JsonLd
    item={{
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'DaniCare Psychiatry',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Laredo Medical Center 1700 E Saunders Street, STE B475',
        addressLocality: 'Laredo',
        addressRegion: 'Texas',
        postalCode: '78041',
        addressCountry: 'US',
      },
      url: 'https://mydanicare.com',
    }}
  />
);

export default SchemaMarkup;
