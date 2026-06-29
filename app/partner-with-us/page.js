import FooterTop from "../../components/FooterTop/FooterTop";
import PartnerWithUsLayout from "../../components/PartnerWithUs/PartnerWithUsLayout";

export const metadata = {
  title: 'Partner With Us | DaniCare Psychiatry - Health System Telepsychiatry',
  description:
    'Partner with DaniCare Psychiatry for 24/7 on-demand telepsychiatry consultations for health systems, hospitals, and medical practices.',
  alternates: { canonical: 'https://www.mydanicare.com/partner-with-us' },
};

const PartnerWithUs = () => {
    return (
        <>
      <PartnerWithUsLayout/>
      <FooterTop/>
      </>
    );

};

export default PartnerWithUs;