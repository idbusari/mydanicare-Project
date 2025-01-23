// config/seo.config.js
const seoConfig = {
  // Default global SEO settings
  global: {
    title: "DaniCare Psychiatry",
    description: "Psychiatry Tailored to Suit You",
    openGraph: {
      type: 'website',
      url: 'https://thedanicare.vercel.app',
      title: "DaniCare Psychiatry",
      description: "Psychiatry Tailored to Suit You",
      images: [
        {
          url: 'https://mydanicare.com/images/crisislogo.png',
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
  },

  // Page-specific SEO overrides
  pages: {
    '/become-a-patient': {
      title: 'Become a Patient | DaniCare Psychiatry',
      description: 'Learn more about our services and resources for patients at DaniCare Psychiatry.',
      openGraph: {
        title: 'Patients | DaniCare Psychiatry',
        description: 'Explore the resources and services we offer to patients at DaniCare Psychiatry.',
        url: 'https://mydanicare.com/become-a-patient',
        images: [
          {
            url: 'https://mydanicare.com/images/patients-banner.jpg',
            width: 800,
            height: 600,
            alt: 'Patients Resources',
          },
        ],
      },
    },
  },

  // Function to merge global and page-specific SEO
  getSEO(pagePath) {
    const pageSEO = this.pages[pagePath] || {};
    const mergedSEO = {
      title: pageSEO.title || this.global.title,
      description: pageSEO.description || this.global.description,
      openGraph: {
        ...this.global.openGraph,
        ...pageSEO.openGraph,
        images: pageSEO.openGraph?.images || this.global.openGraph.images,
      },
      twitter: {
        ...this.global.twitter,
        ...pageSEO.twitter,
      },
    };
    return mergedSEO;
  },
};

export default seoConfig;
