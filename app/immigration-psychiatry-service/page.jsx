import FooterTop from "../../components/FooterTop/FooterTop";
import ImmConsultPage from "@/components/ImmConsult/ImmConsultPage";

export const metadata = {
  title: 'Immigration Psychiatry Evaluation | DaniCare Psychiatry',
  description:
    'Expert psychiatric evaluations for immigration cases including asylum, hardship waivers, VAWA petitions, and U visas. Confidential telepsychiatry and in-person appointments.',
  alternates: { canonical: 'https://www.mydanicare.com/immigration-psychiatry-service' },
};

const ImmConsult = () => {
    return (
        <>
        <ImmConsultPage/>
        <FooterTop/>
        </>
    );

};

export default ImmConsult;