import { NextSeo } from 'next-seo';
import SEO from '../../config/seo.config';  // Adjust the path as needed
import AboutLayout from "../../components/AboutComp/AboutLayout";
import FooterTop from "../../components/FooterTop/FooterTop";

const About = () => {
  const pageSEO = {
    ...SEO,  // Spread the default SEO settings
    title: 'Expert Psychiatric Care & Mental Health Support | Danicare Psychiatry ',  // Override the title for this page
    description: 'Learn about Danicare Psychiatry, a compassionate mental health practitioners offering expert psychiatric services. Our dedicated team of licensed psychiatrists is committed to providing personalized, evidence-based care for adults and children..',
  };

  return (
    <>
      <NextSeo {...pageSEO} />  {/* Add SEO for the About page */}
      <AboutLayout />
      <FooterTop />
    </>
  );
};

export default About;
