"use client"; 

import { useState } from "react";
import styles from './ReferPatientPage.module.scss';

const ReferPatientPage = () => {

  const [formData, setFormData] = useState({
    state: "",
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    insurance: "",
    reason: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });
  
    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // If the response is not OK (e.g., 404, 500), log the error and handle it
        const errorText = await response.text(); // Get the raw response text (e.g., HTML error page)
        console.error('Error response:', errorText);
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      // Attempt to parse JSON only if the response is OK
      const data = await response.json();
      setFormData({
        state: "",
        firstName: "",
        lastName: "",
        dob: "",
        phone: "",
        email: "",
        insurance: "",
        reason: "",
      });
      setStatus({ success: true, message: "Referral submitted successfully!" });
      console.log(data);
  
    } catch (error) {
      console.error("Error submitting form:", error);
      // Check for network or server-side errors
      setStatus({ success: false, message: error.message || "An unexpected error occurred." });
    }
  };
  

  return (<>
    <div className={styles.pageContainer}>
    <div className="content-section">
    <div className="container">
    <h1 className="mb-4 section-title text-center">Refer a Patient</h1>
      <p className="text-center">DaniCare Psychiatry welcomes referrals from healthcare providers, therapists, and family members looking to support a loved one&apos;s mental health. Our team works collaboratively to provide expert, compassionate psychiatric care for individuals of all ages. With a seamless referral process and an experienced team of board-certified psychiatrists, we ensure your patients receive the specialized care they need.
        </p>
        <div className="spacer"></div>
      <div className="row gy-4 ">
      
        <div className="col-md-6">
          <div className="d-flex align-items-start">
            <i className={`${styles.iconLarge} fas fa-handshake me-3`}></i>
            <div>
              <h5>Seamless Referral Process</h5>
              <p>Our easy-to-navigate referral process ensures that your patients get the care they need without unnecessary delays.</p>
            </div>
          </div>
        </div>
       
        <div className="col-md-6">
          <div className="d-flex align-items-start">
            <i className={`${styles.iconLarge} fas fa-stethoscope me-3`}></i>
            <div>
              <h5>Expert Psychiatric Care</h5>
              <p>Our experienced team of psychiatrists provides specialized support for individuals of all ages, addressing a wide range of mental health needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </div>

  <div className="spacer"></div>

       <div className="container">
      <h1 className={styles.pageTitle}>Referral Form</h1>
      <div className={`${styles.formContainer} row justify-content-center`}>
        <div className="col-lg-10">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* State */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="state" className="form-label">
                    Patient&apos;s State
                  </label>
                  <select
                    id="state"
                    className="form-select"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Select State</option>
        <option value="New York">New York</option>
        <option value="New Jersey">New Jersey</option>
        <option value="Texas">Texas</option>
        <option value="California">California</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="New Mexico">New Mexico</option>
        <option value="Arizona">Arizona</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Idaho">Idaho</option>
        <option value="Florida">Florida</option>
                  </select>
                </div>
              </div>

              {/* First Name */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* Date of Birth */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* Insurance */}
              <div className="col-md-4">
                <div className={styles.formGroup}>
                  <label htmlFor="insurance" className="form-label">
                    Insurance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Reason for Referral */}
              <div className="col-md-8">
                <div className={styles.formGroup}>
                  <label htmlFor="reason" className="form-label">
                    Reason For Referral (Optional)
                  </label>
                  <textarea
                    className="form-control"
                    id="reason"
                    rows="3"
                    value={formData.reason}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn-primary">
                Submit Referral
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status.message && (
            <div
              className={`mt-3 alert ${
                status.success ? "alert-success" : "alert-danger"
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ReferPatientPage;
