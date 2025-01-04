import { NextSeo } from 'next-seo';
import SEO from '../../seo.config';
import FooterTop from "../../components/FooterTop/FooterTop";
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";

const Patients = () => {
    const pageSEO = {
        ...SEO,  // Spread the default SEO settings
        title: 'Become a Patient at Danicare Psychiatry | Start Your Mental Health Journey',  // Override specific fields
        description: 'Join Danicare Psychiatry and begin your personalized psychiatric treatment. Our team of professionals provides compassionate mental health care, including evaluations and therapy. Register today to start your journey to better mental health.',
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
