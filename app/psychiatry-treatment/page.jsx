import { NextSeo } from 'next-seo';
import FooterTop from "../../components/FooterTop/FooterTop";
import TreatmentLayout from "../../components/TreatmentComp/TreatmentLayout";
import SEO from '../../config/seo.config'; // Make sure you import your SEO config

const Treatment = () => {
    const pageSEO = {
        ...SEO,
        title: 'Comprehensive Psychiatric Services at Danicare Psychiatry | Mental Health Treatment', // Override title if necessary
        description: 'Explore the wide range of psychiatric services offered at Danicare Psychiatry, including PSTD, ADHD, and specialized care for anxiety, depression, and more. Our compassionate team is here to support your mental health',
    };

    return (
        <>
            <NextSeo {...pageSEO} />
            <TreatmentLayout />
            <FooterTop />
        </>
    );
};

export default Treatment;
