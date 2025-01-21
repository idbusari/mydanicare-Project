// config/seo.config.js
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mydanicare.com';

const defaultSEO = {
  title: "DaniCare Psychiatry",
  description: "Psychiatry Tailored to Suit You",
  openGraph: {
    type: 'website',
    url: baseURL,
    title: "DaniCare Psychiatry",
    description: "Psychiatry Tailored to Suit You",
    images: [
      {
        url: `${baseURL}/images/crisislogo.png`,
        width: 800,
        height: 600,
        alt: 'DaniCare Psychiatry',
      },
    ],
  },
  twitter: {
    handle: '@DaniCare',
    site: '@DaniCare',
    cardType: 'summary_large_image',
  },
  socialMedia: {
    instagram: 'https://www.instagram.com/danicarepsychiatry/',
    facebook: 'https://www.facebook.com/danicarepsychiatry',
  },
};

const seoConfig = (path) => {
  const pageSEO = {
    '/become-a-patient': {
      title: 'Patients | DaniCare Psychiatry',
      description: 'Learn more about our services and resources for patients at DaniCare Psychiatry.',
      openGraph: {
        title: 'Patients | DaniCare Psychiatry',
        description: 'Explore the resources and services we offer to patients at DaniCare Psychiatry.',
        url: `${baseURL}/become-a-patient`,
        images: [
          {
            url: `${baseURL}/images/patients-banner.jpg`,
            width: 800,
            height: 600,
            alt: 'Patients Resources',
          },
        ],
      },
    },
    // Add more pages as needed
  };

  const seoData = { ...defaultSEO, ...pageSEO[path] };

  // Ensure that title and other critical properties are always defined
  seoData.title = seoData.title || defaultSEO.title;
  seoData.description = seoData.description || defaultSEO.description;
  seoData.openGraph = seoData.openGraph || defaultSEO.openGraph;

  return seoData;
};
