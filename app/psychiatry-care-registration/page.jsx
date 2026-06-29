import BecomePatientPage from "../../components/BecomePatient/BecomePatientPage";
import FooterTop from "../../components/FooterTop/FooterTop";

export const metadata = {
  title: 'Patient Registration | DaniCare Psychiatry - Become a Patient',
  description:
    'Register as a new patient with DaniCare Psychiatry. Fill out our online form to begin your personalized mental health care journey.',
  alternates: { canonical: 'https://www.mydanicare.com/psychiatry-care-registration' },
};

const Register = () => {
    return (
        <>
        <BecomePatientPage/>
        <FooterTop/>
        </>

    );
};

export default Register;