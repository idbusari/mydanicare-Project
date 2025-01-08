import Link from "next/link";
import Image from "next/image";
import "./PatientsLayout.scss";

const PatientsLayout = () => {
    return (
        <>
         <section
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/herobg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h1 className="hero-heading mb-4">Become a Patient</h1>
        <p className="hero-description">
        Compassionate care that prioritizes your mental health and well-being.</p>
      </div>
    </div>
  </div>
</section>
        <div className="spacer"></div>

        <div className="content-section py-4">
  <div className="container">
    <div className="row align-items-center">
     
      <div className="col-md-6">
       
      
        <h2 className="section-title" style={{ display: "flex", alignItems: "center" }}>
  <i
    className="fas fa-road"
    style={{ marginRight: "10px", color: "#E66926", fontSize: "1.5rem" }}
  ></i>
  Your Journey Starts Here
</h2>


       <p>
          Starting your journey with DaniCare Psychiatry is simple. We&apos;re here to provide you with compassionate, 
          accessible mental health care that&apos;s tailored to suit you. Our team of board-certified psychiatrists is 
          dedicated to creating a welcoming environment where your unique needs are met with empathy and expertise.
        </p>
        <h5>What to Expect</h5>

        <ul style={{ listStyleType: "none", padding: 0 }}>
  <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "10px" }}>
    <i
      className="fas fa-clipboard-list"
      style={{ marginRight: "10px", color: "#E66926", fontSize: "1.2rem" }}
    ></i>
    <div>
      <strong>Easy Registration:</strong> Fill out our user-friendly intake form to share basic details about yourself and your needs.
    </div>
  </li>
  <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "10px" }}>
    <i
      className="fas fa-hand-holding-heart"
      style={{ marginRight: "10px", color: "#E66926", fontSize: "1.2rem" }}
    ></i>
    <div>
      <strong>Personalized Care Plans:</strong> Work with our expert psychiatric team to create a treatment plan tailored to your mental health goals.
    </div>
  </li>
  <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "10px" }}>
    <i
      className="fas fa-wallet"
      style={{ marginRight: "10px", color: "#E66926", fontSize: "1.2rem" }}
    ></i>
    <div>
      <strong>Flexible Options:</strong> Whether you have insurance or not, we offer affordable and transparent payment plans to ensure mental health care is accessible to everyone.
    </div>
  </li>
</ul>

        
      </div>
    
      <div className="col-md-6 text-center">
        <Image src={"/images/becomePatient.webp"} width={689} height={339} alt="Your Journey Starts Here" className="img-fluid rounded"/>
      </div>
    </div>
  </div>
</div>

  <div className="content-section bg-light">
    <div className="container">
      <div className="row gy-4">
       
        <div className="col-md-4">
          <div className="action-box">
            <i className="fas fa-phone-alt"></i>
            <h5>Call Us</h5>
            <p>Contact us via  <strong>+1 (956) 266-8476</strong> directly to speak with our team and begin your journey  </p>
          
            <Link href="tel:+1-956-266-8476" className="btn btn-orange">Call Now</Link>
          </div>
        </div>
     
        <div className="col-md-4">
          <div className="action-box">
            <i className="fas fa-calendar-check"></i>
            <h5>Book an Appointment</h5>
            <p>Schedule an appointment with one of our board-certified psychiatrists at your convenience.</p>
            <Link href="http://provider.kareo.com/dolani-ajanaku#?view=booking" target="_blank" className="btn btn-orange">Book Now</Link>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="action-box">
            <i className="fas fa-user-plus"></i>
            <h5>Become a Patient</h5>
            <p>Complete our online form to become a patient and start your mental health care journey today.</p>
            <Link href="/psychiatry-care-registration" className="btn btn-orange">Register</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  
 
        </>
    )
}

export default PatientsLayout;