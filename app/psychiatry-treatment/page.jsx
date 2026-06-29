import FooterTop from "../../components/FooterTop/FooterTop";
import TreatmentLayout from "../../components/TreatmentComp/TreatmentLayout";

export const metadata = {
  title: 'Mental Health Treatment | DaniCare Psychiatry',
  description:
    'Explore our evidence-based mental health treatments including therapy, medication management, and personalized care plans at DaniCare Psychiatry.',
  alternates: { canonical: 'https://www.mydanicare.com/psychiatry-treatment' },
};

const Treatment = () => {
    return (
        <>
        <TreatmentLayout/>
            <FooterTop />
        </>

    );
};

export default Treatment;