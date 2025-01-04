import FooterTop from "../../components/FooterTop/FooterTop";
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";
import Head from 'next/head';
import seoConfig from '../../config/seo.config';

const Patients = () => {
  const pageSEO = seoConfig.pages['/patients'] || {}; // Get page-specific SEO, fallback to default

  return (
    <>
      <Head>
        <title>{pageSEO.title || seoConfig.title}</title>
        <meta name="description" content={pageSEO.description || seoConfig.description} />
        <meta name="keywords" content="patients, healthcare, clinic, medical services" />
        <meta property="og:title" content={pageSEO.openGraph?.title || seoConfig.openGraph.title} />
        <meta property="og:description" content={pageSEO.openGraph?.description || seoConfig.openGraph.description} />
        <meta property="og:url" content={pageSEO.openGraph?.url || seoConfig.openGraph.url} />
        <meta property="og:image" content={pageSEO.openGraph?.images[0]?.url || seoConfig.openGraph.images[0].url} />
        <meta property="og:image:width" content={pageSEO.openGraph?.images[0]?.width || seoConfig.openGraph.images[0].width} />
        <meta property="og:image:height" content={pageSEO.openGraph?.images[0]?.height || seoConfig.openGraph.images[0].height} />
        <link rel="canonical" href={pageSEO.openGraph?.url || seoConfig.openGraph.url} />
      </Head>

      <PatientsLayout />
      <FooterTop />
    </>
  );
};

export default Patients;
