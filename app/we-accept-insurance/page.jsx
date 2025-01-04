import { NextSeo } from 'next-seo';
import SEO from '../../config/seo.config';
import FooterTop from "../../components/FooterTop/FooterTop";
import InsuranceLayout from "../../components/InsuranceComp/InsuranceLayout";

const Insurance = () => {
    const pageSEO = {
        ...SEO,  // Spread the default SEO settings
        title: 'Out-of-Network Psychiatry Coverage | Danicare Psychiatry',  // Override specific fields for this page
        description: 'Learn about the insurance providers accepted at Danicare Psychiatry. Our team works with a variety of mental health insurance plans to make psychiatric care accessible. Find out how to use your insurance for psychiatry and therapy services..',
    };

    return (
        <>
            <NextSeo {...pageSEO} />
            <InsuranceLayout />
            <FooterTop />
        </>
    );
};

export default Insurance;
