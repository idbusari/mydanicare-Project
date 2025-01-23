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
  
};

export default seoConfig;