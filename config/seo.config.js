// config/seo.config.js
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://thedanicare.vercel.app';

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
      title: 'Become a Patient | DaniCare Psychiatry',
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

  return { ...defaultSEO, ...pageSEO[path] };
};

export default seoConfig;
