import { NextSeo } from 'next-seo';
import SEO from '../../config/seo.config';
import FooterTop from "../../components/FooterTop/FooterTop";
import ReviewLayout from "../../components/ReviewComp/ReviewLayout";

const Reviews = () => {
    const pageSEO = {
        ...SEO,
        title: 'Patient Reviews for Danicare Psychiatry | Trusted Mental Health Care in Laredo',
        description: 'Read real testimonials and reviews from patients who trust Danicare Psychiatry for their mental health care. Learn why we’re rated as a top psychiatric service provider.',
    };

    return (
        <>
            <NextSeo {...pageSEO} />
            <ReviewLayout />
            <FooterTop />
        </>
    );
};

export default Reviews;
