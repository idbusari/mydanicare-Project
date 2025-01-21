// config/seo.config.js
const seoConfig = {
  title: "DaniCare Psychiatry",
  description: "Psychiatry Tailored to Suit You",
  openGraph: {
    type: 'website',
    url: 'https://thedanicare.vercel.app',
    title: "DaniCare Psychiatry",
    description: "Psychiatry Tailored to Suit You",
    images: [
      {
        url: 'https://thedanicare.vercel.app/images/crisislogo.png',
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
  // You can define page-specific SEO overrides here
  pages: {
    '/become-a-patient': {
      title: 'Become a Patient | DaniCare Psychiatry',
      description: 'Learn more about our services and resources for patients at DaniCare Psychiatry.',
      openGraph: {
        title: 'Patients | DaniCare Psychiatry',
        description: 'Explore the resources and services we offer to patients at DaniCare Psychiatry.',
        url: 'https://thedanicare.vercel.app/become-a-patient',
        images: [
          {
            url: 'https://thedanicare.vercel.app/images/patients-banner.jpg',
            width: 800,
            height: 600,
            alt: 'Patients Resources',
          },
        ],
      },
    },
  },
};

export default seoConfig;