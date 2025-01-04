import FooterTop from "../../components/FooterTop/FooterTop";
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";
import Head from 'next/head';
import seoConfig from '../../config/seo.config';

const Patients = () => {
  // Get the page-specific SEO, or fall back to global SEO
  const pageSEO = seoConfig.pages['/become-a-patient'] || {};

  return (
    <>
      <Head>
        {/* Page title */}
        <title>{pageSEO.title || seoConfig.title}</title>
        
        {/* Meta description */}
        <meta name="description" content={pageSEO.description || seoConfig.description} />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content={pageSEO.openGraph?.title || seoConfig.openGraph.title} />
        <meta property="og:description" content={pageSEO.openGraph?.description || seoConfig.openGraph.description} />
        <meta property="og:url" content={pageSEO.openGraph?.url || seoConfig.openGraph.url} />
        <meta property="og:image" content={pageSEO.openGraph?.images[0]?.url || seoConfig.openGraph.images[0].url} />
        <meta property="og:image:width" content={pageSEO.openGraph?.images[0]?.width || seoConfig.openGraph.images[0].width} />
        <meta property="og:image:height" content={pageSEO.openGraph?.images[0]?.height || seoConfig.openGraph.images[0].height} />

        {/* Canonical URL */}
        <link rel="canonical" href={pageSEO.openGraph?.url || seoConfig.openGraph.url} />
      </Head>

      {/* Page content */}
      <PatientsLayout />
      <FooterTop />
    </>
  );
};

export default Patients;
