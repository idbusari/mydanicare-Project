import { NextSeo } from 'next-seo';
import SEO from '../../config/seo.config';
import FooterTop from "../../components/FooterTop/FooterTop";
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";

const Patients = () => {
    // Ensure that you override specific SEO fields for this page.
    const pageSEO = {
        ...SEO,  // Spread the default SEO settings from seo.config.js
        title: 'Become a Patient at Danicare Psychiatry | Start Your Mental Health Journey',  // Custom page title
        description: 'Join Danicare Psychiatry and begin your personalized psychiatric treatment. Our team of professionals provides compassionate mental health care, including evaluations and therapy. Register today to start your journey to better mental health.', // Custom page description
        openGraph: {
            ...SEO.openGraph,
            title: 'Become a Patient at Danicare Psychiatry',
            description: 'Start your mental health journey with Danicare Psychiatry. Compassionate psychiatric treatment and therapy await.',
        },
    };

    return (
        <>
            <NextSeo {...pageSEO} />
            <PatientsLayout />
            <FooterTop />
        </>
    );
};

export default Patients;

