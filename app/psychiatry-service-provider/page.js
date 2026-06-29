import AboutLayout from "../../components/AboutComp/AboutLayout";
import FooterTop from "../../components/FooterTop/FooterTop";

export const metadata = {
  title: 'About Us | DaniCare Psychiatry - Compassionate Mental Health Care',
  description:
    'Learn about DaniCare Psychiatry, our mission to provide personalized, compassionate mental health care, and our team of dedicated professionals.',
  alternates: { canonical: 'https://www.mydanicare.com/psychiatry-service-provider' },
};

const About = () => {
    return (
        <>
        <AboutLayout/>
        <FooterTop/> 
        </>
    );

};

export default About;