import { NextSeo } from 'next-seo';
import FaqsLayout from "../../components/FaqsComp/FaqsLayout";
import FooterTop from "../../components/FooterTop/FooterTop";



const Faqs = () => {
    const seoConfig = {
        title: 'Frequently Asked Questions About Mental Health | Danicare Psychiatry',
        description: 'Have questions about mental health care or psychiatry? Find answers to common questions about our services, treatments, telepsychiatry, and how to book an appointment at Danicare Psychiatry.',
        
    };

    return (
        <>
            <NextSeo {...seoConfig} />
            <FaqsLayout />
            <FooterTop />
        </>
    );
};

export default Faqs;
