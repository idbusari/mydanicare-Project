import { NextSeo } from 'next-seo';
import SEO from '../../seo.config';
import FooterTop from "../../components/FooterTop/FooterTop";
import PartnerWithUsLayout from "../../components/PartnerWithUs/PartnerWithUsLayout";

const PartnerWithUs = () => {
    const pageSEO = {
        ...SEO,  // Spread the default SEO settings
        title: 'Partner with DaniCare Psychaitry | Healthcare Providers for Psychiatry Services',  // Customize the title for this page
        description: 'Join Danicare Psychiatry as a trusted partner in mental health care. We welcome partnerships with healthcare providers, mental health professionals, and organizations to expand our services and improve patient care.',
    };

    return (
        <>
            <NextSeo {...pageSEO} />
            <PartnerWithUsLayout />
            <FooterTop />
        </>
    );
};

export default PartnerWithUs;
