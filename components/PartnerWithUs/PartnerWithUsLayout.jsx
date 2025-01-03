"use client"; 
import { useState } from "react";
import "./PartnerWithUs.module.scss"

const PartnerWithUsLayout = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); 

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! Thank you for contacting us.");
        setFormData({ name: "", email: "", organization: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || "Failed to send message."}`);
      }
    } catch (error) {
      setStatus("Error: Unable to connect to the server.");
      console.log(error.message);
    }
  };

  return (
    <>

<section
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/partnergroup2.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h1 className="hero-heading mb-4">Partner With Us</h1>
        <p className="hero-description">
          Join hands with us to create meaningful impacts in the field of mental health. Together, we can make a difference!
        </p>
      </div>
    </div>
  </div>
</section>


    
<section className="container-fluid">
  <div className="container py-5">
  <h1 className="mb-4 section-title text-center">Why Partner With Us?</h1>
  <p>24/7 On-Demand Telepsychiatry Consultations for Health Systems and Hospitals
  DaniCare Psychiatry partners with health systems and hospitals to deliver critical psychiatric support for Emergency Departments (EDs) and medical floors. Here’s how we enhance your patient care as an extension of your team</p>
    <div className="row align-items-center">
     

      
      <div className="container mt-4">
  <div className="row">
    {/* Item 1 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
        <i className="fas fa-clock text-primary"></i>
        </div>
        <div>
          <h5>24/7 Availability</h5>
          <p>
            Our telepsychiatry service is available around the clock, ensuring immediate psychiatric care for patients at any hour.
          </p>
        </div>
      </div>
    </div>

    {/* Item 2 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-bolt text-success"></i>
        </div>
        <div>
          <h5>On-Demand Consultations</h5>
          <p>
            We provide rapid-response consultations for EDs and medical floors, enabling timely psychiatric evaluations and interventions when urgent needs arise.
          </p>
        </div>
      </div>
    </div>

    {/* Item 3 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
        <i className="fas fa-handshake text-warning"></i>
        </div>
        <div>
          <h5>Collaborative Partnership</h5>
          <p>
            Working closely with your medical team, we seamlessly integrate into your workflow, acting as an extension of your existing staff.
          </p>
        </div>
      </div>
    </div>

    {/* Item 4 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-stethoscope text-danger"></i>
        </div>
        <div>
          <h5>Expert Psychiatric Care</h5>
          <p>
            Our board-certified psychiatrists bring specialized mental health expertise to manage acute symptoms, assess mental health crises, and support complex cases.
          </p>
        </div>
      </div>
    </div>

    {/* Item 5 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-shield text-info"></i>
        </div>
        <div>
          <h5>Secure Telepsychiatry Platform</h5>
          <p>
            Using a HIPAA-compliant video platform, we ensure secure consultations that maintain patient privacy and uphold hospital standards.
          </p>
        </div>
      </div>
    </div>

    {/* Item 6 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-heart text-pink"></i>
        </div>
        <div>
          <h5>Enhanced Patient Care</h5>
          <p>
            By collaborating with your providers, we improve patient outcomes, streamline care delivery, and optimize resources in high-demand settings.
          </p>
        </div>
      </div>
    </div>

    {/* Item 7 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-sign-out text-secondary"></i>
        </div>
        <div>
          <h5>Seamless Support After Discharge</h5>
          <p>
            Our team provides continuity of care post-discharge, helping patients transition smoothly and reducing the risk of readmission.
          </p>
        </div>
      </div>
    </div>

    {/* Item 8 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-exchange text-dark"></i>
        </div>
        <div>
          <h5>Timely Care Across the Clinical Spectrum</h5>
          <p>
            DaniCare’s telepsychiatry model facilitates swift, effective care across a range of psychiatric needs, from acute interventions to ongoing support.
          </p>
        </div>
      </div>
    </div>

    {/* Item 9 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <div className="icon-box me-3">
          <i className="fa fa-users text-primary"></i>
        </div>
        <div>
          <h5>Improved Patient Activation & Engagement</h5>
          <p>
            We empower patients to actively participate in their mental health journey, fostering greater engagement and long-term stability.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  </div>
</section>


     
      <div className="spacer"></div>

    <div className="container-fluid bg-danicare">
      <div className="container py-5">
      <h1 className="mb-4 section-title text-center">Partner With Us</h1>
      <p className="text-center mb-5">
        Fill out the form below to express your interest in partnering with us. We look forward to collaborating with you!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="organization" className="form-label">
                  Organization Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
          {status && (
            <div className="mt-3 text-center bg-warning">
              <p>{status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default PartnerWithUsLayout;
