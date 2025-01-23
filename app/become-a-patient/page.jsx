import Head from 'next/head';
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";
import FooterTop from "../../components/FooterTop/FooterTop";

const Patients = () => {
  return (
    <>
      <Head>
        <title>Become a Patient | DaniCare Psychiatry</title>
        <meta name="description" content="Join DaniCare Psychiatry today and experience personalized, compassionate mental health care. Start your journey toward well-being with us." />
        <meta property="og:title" content="Become a Patient | DaniCare Psychiatry" />
        <meta property="og:description" content="Join DaniCare Psychiatry today and experience personalized, compassionate mental health care. Start your journey toward well-being with us." />
        <meta property="og:url" content="https://www.mydanicare.com/become-a-patient" />
        <meta property="og:image" content="https://www.mydanicare.com/images/social-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://www.mydanicare.com/become-a-patient" />
      </Head>
      <PatientsLayout />
      <FooterTop />
    </>
  );
};

export default Patients;
