import { NextSeo } from 'next-seo';
import BecomePatientPage from "../../components/BecomePatient/BecomePatientPage";
import FooterTop from "../../components/FooterTop/FooterTop";
import SEO from '../../config/seo.config';

const Register = () => {
    return (
        <>
            <NextSeo
                {...SEO}
                title="Register for Psychiatric Services at Danicare Psychiatry | Mental Health Care"
                description="Sign up for personalized psychiatric care at Danicare Psychiatry. Our experienced team offers comprehensive mental health services, including evaluations and treatment plans. Start your journey to better mental health today."
            />
            <BecomePatientPage />
            <FooterTop />
        </>
    );
};

export default Register;
