import FooterTop from "../../components/FooterTop/FooterTop";
import ReviewLayout from "../../components/ReviewComp/ReviewLayout";

export const metadata = {
  title: 'Patient Reviews | DaniCare Psychiatry - Testimonials',
  description:
    'Read real patient reviews and testimonials about their experience with DaniCare Psychiatry compassionate mental health care services.',
  alternates: { canonical: 'https://www.mydanicare.com/reviews' },
};

const Reviews = () => {
    return (
        <>
        <ReviewLayout/>
        <FooterTop/>
        </>
    );

};

export default Reviews;