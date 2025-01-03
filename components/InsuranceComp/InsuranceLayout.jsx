import Image from "next/image";
import Link from "next/link";
import './InsuranceLayout.scss';

const InsuranceLayout = () => {
    return (
        <>
        <section
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/insurancebg.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="hero-heading mb-4">Insurance</h2>
        <p className="hero-description">
        Whether you&apos;re insured or uninsured, we are committed to providing affordable and compassionate psychiatric services tailored to your needs.
        </p>
      </div>
    </div>
  </div>
</section>
       
       <section id="insurancePartner" className="py-5" >
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="row">
          
            <div
              className="col-sm-12 col-lg-12  d-flex flex-row flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center my-auto text-center">
              <Image alt="Aetna logo"
                src={"/images/aethna.svg"} layout="intrinsic" width={100} height={20}/>
              <Image alt="Cigna logo"
                src={"/images/insurance-logo-cigna.png"} layout="intrinsic" width={96} height={30}/>
              <div className="flex-break d-sm-none"></div> 
              <Image alt="United Healthcare logo"
                src={"/images/united1.svg"} layout="intrinsic" width={96} height={30}/>
              <Image alt="Anthem logo"
                src={"/images/insurance-logo-anthem.png"} layout="intrinsic" width={96} height={30}/>
                <Image alt="Medicaid logo"
                src={"/images/insurance-logo-dark-gray-medicaid.svg"} layout="intrinsic" width={96} height={30}/>
            
              <div className="flex-break d-sm-none"></div>
              <Image alt="Medicare logo"
                src={"/images/medicare1.svg"} layout="intrinsic" width={84} height={60}/>
                <Image alt="Medicare logo"
                src={"/images/magellan.svg"} layout="intrinsic" width={101} height={35}/>
              <div>
                <h5 className="mb-0" style={{color: "#99a0b2"}}>and more</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="spacer"></div>

 
  <div className="content-section" style={{backgroundColor: "#F9F9F9"}}>
    <div className="container text-center">
    <h1 className="mb-4 section-title text-center">Our Commitment</h1>
      <p>At DaniCare Psychiatry, we believe everyone deserves access to quality mental health care. We
        accept a wide range of insurance plans to make psychiatric services accessible for insured
        patients. For those without insurance, we offer flexible and affordable payment options, ensuring that mental health support is within reach for all.</p>
    </div>
  </div>

  
<div className="content-section">
  <div className="container">
  <h1 className="mb-4 section-title text-center">Insurance Plans We Accept</h1>
    <p className="text-center">We accept most major insurance providers, including:</p>
    <ul className="insurance-list">
      <li>Aetna Insurance fosr Psychiatry Services</li>
      <li>Blue Cross Blue Shield Mental Health Coverage</li>
      <li>Cigna Behavioral Health Insurance</li>
      <li>UnitedHealthcare Psychiatry Services</li>
      <li>Medicare Mental Health Services</li>
      <li>Medicaid Psychiatric Care</li>
      <li>And many more</li>
    </ul>
    <p className="text-center mt-3">
      Not sure if your insurance covers our services? Contact us or reach out to your provider. We&apos;ll help verify your coverage and answer any questions about benefits or co-pays.
    </p>
  </div>
</div>



<div className="content-section" style={{backgroundColor: "#F9F9F9"}}>
  <div className="container">
  <h1 className="mb-4 section-title text-center">Options for Uninsured Patients</h1>
 <div className="text-center">  <Image
      src="/images/uninsured.jpg"   
      alt="Uninsured Patients"
      className="img-fluid mb-4" 
      width={400}
      height={400}    
    />
    </div>
  
    <p>
      For patients without insurance, we offer flexible and affordable payment options tailored to suit various budgets. Cost should never be a barrier to accessing mental health care, and DaniCare Psychiatry is committed to making our services accessible to everyone.
    </p>
  </div>
</div>


  <div className="content-section">
    <div className="container">
    <h1 className="mb-4 section-title text-center">Why Choose DaniCare Psychiatry?</h1>
      <div className="row gy-4">
       
        <div className="col-md-4">
          <div className="d-flex align-items-start">
            <i className="fas fa-check-circle icon-box"></i>
            <div>
              <h5>Broad Insurance Coverage</h5>
              <p>We work with a variety of insurance plans to make accessing psychiatric care easy and convenient for insured patients.</p>
            </div>
          </div>
        </div>
     
        <div className="col-md-4">
          <div className="d-flex align-items-start">
            <i className="fas fa-wallet icon-box"></i>
            <div>
              <h5>Flexible Payment Plans</h5>
              <p>Our affordable payment options ensure that uninsured patients have access to high-quality psychiatric care.</p>
            </div>
          </div>
        </div>
       
        <div className="col-md-4">
          <div className="d-flex align-items-start">
            <i className="fas fa-heart icon-box"></i>
            <div>
              <h5>Accessible Mental Health Support</h5>
              <p>We&apos;re dedicated to providing affordable and accessible mental health services for everyone, regardless of insurance status.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="content-section bg-light">
    <div className="container text-center">
    <h1 className="mb-4 section-title text-center">Questions About Insurance or Payment?</h1>
      <p>If you have questions about your insurance plan or would like to discuss payment options, please reach out to our team. We&apos;re here to help you access the care you deserve.</p>
      <Link href="/patients" className="btn-primary btn-lg">Get Started</Link>
    </div>
  </div> 
        </>
    );
};

export default InsuranceLayout; 