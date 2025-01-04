import Image from "next/image";
import Link from "next/link";
import "./AboutLayout.scss";

const AboutLayout = () => {
    return (
      <>
     <section
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/aboutBg.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h1 className="hero-heading mb-4">About Us</h1>
        <p className="hero-description">
        Welcome to DaniCare Psychiatry, where compassionate care meets accessibility.
        Our mission is to provide personalized mental health support that puts you first, bridging the gap in underserved communities and ensuring everyone has access to quality psychiatric care.
        </p>
      </div>
    </div>
  </div>
</section>

  

  <div className="about-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="text-description">At DaniCare, we are revolutionizing psychiatric care, setting a new standard
            grounded in empathy, compassion, and an unwavering commitment to our patients. Our mission is not merely to
            improve mental health services but to transform them into a holistic, patient-centered experience that
            prioritizes individual well-being above all else.</p>

          <p className="text-description">Imagine a place where mental health care is
            accessible, compassionate, and built around understanding you as a person, not just a set of symptoms. That
            place is DaniCare Psychiatry. We were founded with one goal in mind: to bridge the gap in mental health
            services for those in underserved communities, ensuring that quality care is available no matter where you
            live.</p>


          <p className="text-description"> We are not just revolutionizing mental health care; we are shaping a brighter future for psychiatric 
            services—one patient, one breakthrough, and one act of compassionate care at a time. Join us as we spearhead the transformation of psychiatric treatment.</p>
        </div>
        <div className="col-md-6">
          <Image src={"/images/mentalTreatment.png"} alt="About DaniCare" width={500} height={500} className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>

  <section className="core-values-section">
    <div className="container">
    <h1 className="mb-4 section-title text-center">Core Values</h1>
      <div className="row justify-content-center">
       
        <div className="col-md-4">
          <div className="core-value-box">
            <Image src={"/images/empathycolor.png"} width={512} height={512} alt="Empathy" className="core-value-image"/>
            <h3 className="core-value-title">Empathy</h3>
            <p className="core-value-text">
              At DaniCare, empathy is at the heart of everything we do. We prioritize understanding and addressing each
              patient&apos;s unique needs, fostering trust and genuine connections for effective mental health care.
            </p>
          </div>
        </div>
       
        <div className="col-md-4">
          <div className="core-value-box">
            <Image src={"/images/communitycolor.png"} width={512} height={512} alt="Community" className="core-value-image"/>
            <h3 className="core-value-title">Community</h3>
            <p className="core-value-text">
              Providing care to underserved communities is in our DNA. With no wait times and innovative technology, we
              ensure quality mental health services are accessible—whether in-person or through telepsychiatry.
            </p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="core-value-box">
            <Image src={"/images/personalized.png"} width={512} height={512} alt="Personalized Care" className="core-value-image"/>
            <h3 className="core-value-title">Personalized Care</h3>
            <p className="core-value-text">
              DaniCare believes in the power of personalized care. We tailor our approach to meet each individual&apos;s
              needs,
              providing compassionate, one-on-one support and medication management for lasting mental wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <div className="about-section">
  <div className="container">
  <h1 className="mb-4 section-title text-center">Expertise and Our Mission</h1>
    <div className="row">
      <div className="col-md-6 column-section">
        <h4>
          <i className="fa fa-briefcase me-2"></i> 
          Expertise You Can Trust
        </h4>
        <p className="text-description">
          Our team of board-certified MDs comes with years of training and a passion for compassionate care. More than just providers, they are dedicated partners in your journey to wellness.
        </p>
        <p className="text-description">
          They work tirelessly to ensure every interaction is one of respect, empathy, and understanding. At DaniCare, our doctors are here to support you, not only with medical expertise but with a genuine commitment to your well-being.
        </p>
      </div>

      <div className="col-md-6 column-section">
        <h4>
          <i className="fa fa-heart me-2"></i> 
          Why We&apos;re Here
        </h4>
        <p className="text-description">
          DaniCare Psychiatry was founded on the simple yet powerful belief that quality mental health care should be available to everyone, regardless of where they live.
        </p>
        <p className="text-description">
          We&apos;re breaking down barriers, reaching underserved communities, and providing patient-centered care that truly makes a difference.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="values-section">
  <div className="container">
  <h1 className="mb-4 section-title text-center">Our Journey</h1>
    <div className="row">
      
      <div className="col-md-6 column-section">
        <h4>
          <i className="fa fa-heart mr-3"></i> 
          Bringing Mental Health Care to You
        </h4>
        <p className="text-description">
          For too long, countless individuals and families have faced barriers to mental
          health care, struggling with limited access, long waits, or the inability to find a provider who truly
          listens. DaniCare Psychiatry was created to change that.
        </p>
        <p className="text-description">
          We go beyond traditional boundaries, reaching communities that often lack the
          resources for quality psychiatric care, and using technology to bring expert support directly to you.
        </p>
      </div>
     
      <div className="col-md-6 column-section">
        <h4>
          <i className="fa fa-hands-helping mr-3"></i> 
          Compassionate Care
        </h4>
        <p className="text-description">
          At the heart of DaniCare Psychiatry is a belief: everyone deserves mental health
          care that&apos;s rooted in empathy. When we meet a new patient, we don’t just see a chart – we see a person with
          a unique story.
        </p>
        <p className="text-description">
          We believe that healing starts with listening, and that’s why every treatment plan
          we create is thoughtfully tailored to suit you.
        </p>
      </div>
    </div>
  </div>
</div>



<p className="text-sm-left text-center mt-5 mb-5">
    <Link href="/patients" className="btn-primary" title="Start Treatment Now">Get Started</Link>
  </p>

  </>
  
    );
};

export default AboutLayout;