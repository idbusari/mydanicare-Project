import { NextSeo } from 'next-seo';
import FooterTop from "../../components/FooterTop/FooterTop";
import ReferPatientPage from "../../components/ReferPatientComp/ReferPatientPage";
import SEO from '../../config/seo.config';

const ReferPatient = () => {
    const pageSEO = {
        ...SEO,  // Default SEO settings
        title: 'Refer a Patient to Danicare Psychiatry | Mental Health Referral Services',  // Override specific values
        description: 'Simplify the referral process for psychiatric care with Danicare Psychiatry. Use our easy online referral form to connect patients with expert mental health services and treatment plans.',
    };

    return (
        <>
            <NextSeo {...pageSEO} />
            <ReferPatientPage />
            <FooterTop />
        </>
    );
};

export default ReferPatient;
