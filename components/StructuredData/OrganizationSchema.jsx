export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'DaniCare Psychiatry',
    description: 'Compassionate telepsychiatry and in-person mental health care in Texas and beyond. Board-certified psychiatric evaluations, medication management, and therapy.',
    url: 'https://www.mydanicare.com',
    logo: 'https://www.mydanicare.com/images/footerLogo.webp',
    image: 'https://www.mydanicare.com/images/talk.webp',
    telephone: '+1-956-267-8020',
    email: 'info@mydanicare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5910 San Bernardo Ave Ste A',
      addressLocality: 'Laredo',
      addressRegion: 'TX',
      postalCode: '78041',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '27.5306',
      longitude: '-99.5003',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Insurance',
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    sameAs: [
      'https://www.facebook.com/danicarepsychiatry',
      'https://www.instagram.com/danicarepsychiatry',
      'https://www.linkedin.com/company/danicare-psychiatry',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mental Health Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Telepsychiatry Consultations',
            description: 'Secure online psychiatric evaluations and follow-ups via video.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'In-Person Psychiatry',
            description: 'Face-to-face psychiatric care at our Laredo, TX clinic.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Immigration Psychiatry Evaluations',
            description: 'Expert psychiatric evaluations for asylum, hardship waivers, VAWA, and U visas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ADHD Testing & Treatment',
            description: 'Comprehensive ADHD evaluations and personalized treatment plans.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
