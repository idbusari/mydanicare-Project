import FooterTop from "../../components/FooterTop/FooterTop";
import InsuranceLayout from "../../components/InsuranceComp/InsuranceLayout";

export const metadata = {
  title: 'Insurance | DaniCare Psychiatry - We Accept Most Plans',
  description:
    'DaniCare Psychiatry accepts most major insurance plans. Verify your coverage and learn about our affordable mental health care options.',
  alternates: { canonical: 'https://www.mydanicare.com/we-accept-insurance' },
};

const Insurance = () => {
    return (
        <>
        <InsuranceLayout/>
        <FooterTop/>
        </>
    );

};

export default Insurance;