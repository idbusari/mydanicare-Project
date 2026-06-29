import FooterTop from "../../components/FooterTop/FooterTop";
import PsychiatristLayout from "../../components/PsychiatristComp/PsychiatristLayout";

export const metadata = {
  title: 'Our Psychiatrist | DaniCare Psychiatry - Board-Certified Experts',
  description:
    'Meet our board-certified psychiatrists at DaniCare Psychiatry. Experienced professionals dedicated to compassionate, personalized mental health care.',
  alternates: { canonical: 'https://www.mydanicare.com/psychiatrist' },
};

const Psychiatrist = () => {
    return (
        <>
        <PsychiatristLayout/>
            <FooterTop />
        </>

    );
};

export default Psychiatrist;