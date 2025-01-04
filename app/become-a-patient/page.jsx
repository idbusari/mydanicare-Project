import FooterTop from "../../components/FooterTop/FooterTop";
import PatientsLayout from "../../components/PatientsComp/PatientsLayout";
import Head from 'next/head';

const Patients = () => {
    return (
        <>
            <Head>
                <title>Patients | Your Clinic Name</title>
                <meta name="description" content="Learn more about our services and resources for patients at Your Clinic Name." />
                <meta name="keywords" content="patients, healthcare, clinic, medical services" />
                <meta property="og:title" content="Patients | Your Clinic Name" />
                <meta property="og:description" content="Explore the resources and services we offer to patients at Your Clinic Name." />
                <meta property="og:image" content="https://www.yourclinic.com/og-image.jpg" />
                <meta property="og:url" content="https://www.yourclinic.com/patients" />
                <link rel="canonical" href="https://www.yourclinic.com/patients" />
            </Head>

            <PatientsLayout />
            <FooterTop />
        </>
    );
};

export default Patients;
