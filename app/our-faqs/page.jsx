import FaqsLayout from "../../components/FaqsComp/FaqsLayout";
import FooterTop from "../../components/FooterTop/FooterTop";

export const metadata = {
  title: 'FAQs | DaniCare Psychiatry - Frequently Asked Questions',
  description:
    'Find answers to common questions about our telepsychiatry services, insurance, appointment scheduling, and mental health treatments.',
  alternates: { canonical: 'https://www.mydanicare.com/our-faqs' },
};

const Faqs = () => {
    return (
        <>
        <FaqsLayout/>
        <FooterTop/>
        </>
    );

};

export default Faqs;