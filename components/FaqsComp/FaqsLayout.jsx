import FaqSection from "../HomeComp/FaqSection";

const FaqsLayout = () => {
    return (
        <>
         <section
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/faqbg.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="hero-heading mb-4">FAQS</h2>
        <p className="hero-description">
       How can we help you?
        </p>
      </div>
    </div>
  </div>
</section>

        <FaqSection/>
        


        </>

    );
};

export default FaqsLayout;