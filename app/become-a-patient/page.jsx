import FooterTop from "../../components/FooterTop/FooterTop";
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";

export const metadata = {
  title: 'Become a Patient | DaniCare Psychiatry - Compassionate Care',
  description:
    'Join DaniCare Psychiatry today and experience personalized, compassionate mental health care. Start your journey toward well-being with us.',
  openGraph: {
    title: 'Become a Patient | DaniCare Psychiatry - Compassionate Care',
    description:
      'Join DaniCare Psychiatry today and experience personalized, compassionate mental health care. Start your journey toward well-being with us.',
    url: 'https://www.mydanicare.com/become-a-patient',
    images: [
      {
        url: 'https://www.mydanicare.com/images/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'DaniCare Psychiatry - Compassionate Care',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.mydanicare.com/become-a-patient',
  },
};

const Patients = () => {
  return (
    <>
      <PatientsLayout />
      <FooterTop />
    </>
  );
};

export default Patients;
