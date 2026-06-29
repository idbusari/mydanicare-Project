import FooterTop from "../../components/FooterTop/FooterTop";
import PrivacyPolicyLayout from "../../components/PrivacyPolicyComp/PrivacyPolicyLayout";

export const metadata = {
  title: 'Privacy Policy | DaniCare Psychiatry - How We Protect Your Data',
  description:
    'Read the DaniCare Psychiatry Privacy Policy to understand how we collect, use, and protect your personal and health information.',
  alternates: { canonical: 'https://www.mydanicare.com/privacy-policy' },
};

const PrivacyPolicy = () => {
    return (
        <>
        <PrivacyPolicyLayout/>
        <FooterTop/>
        
        </>
    );

};

export default PrivacyPolicy;