"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './BecomePatientPage.module.scss';

const BecomePatientPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    insurance: "",
    plannos: "",
    state: "",
    contact: "",
    refsource: "",
    reason: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      window.dataLayer.push({
        event: 'form_submission',
        form_id: 'become_patient_form',
        form_name: 'Become a Patient Form'
      });

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      const result = text ? JSON.parse(text) : null;

      if (response.ok) {
        setResponseMessage("Thank you for your submission! We will contact you shortly.");
        window.dataLayer.push({
          event: 'form_submission_success',
          form_id: 'become_patient_form'
        });
        
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          phone: "",
          insurance: "",
          plannos:"",
          state: "",
          contact: "", 
          refsource: "",
          reason: "",
        });
      } else {
        setResponseMessage(`Error: ${result?.error || "Something went wrong."}`);
        window.dataLayer.push({
          event: 'form_submission_error',
          form_id: 'become_patient_form',
          error: result?.error || "Unknown error"
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResponseMessage("Error: Unable to send message. Please try again.");
      window.dataLayer.push({
        event: 'form_submission_error',
        form_id: 'become_patient_form',
        error: error.message
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.formSection}>
              <h1 className={styles.heading}>Become a Patient</h1>
              <p className={styles.description}>
                Kindly fill the following information to become a Patient on DaniCare.
              </p>
              <form 
                onSubmit={handleSubmit}
                id="become_patient_form"
                data-gtm-form="become_patient_form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  

  <div className="col-md-6">
  <div className={styles.formGroup}>
    <label htmlFor="age" className="form-label">Date of Birth</label>
    <input
      type="text"
      className="form-control"
      id="age"
      placeholder="MM/DD/YYYY or MM-DD-YYYY"
      value={formData.age}
      onChange={handleChange}
      pattern="^(0[1-9]|1[0-2])[-\/](0[1-9]|[12][0-9]|3[01])[-\/](19|20)\d{2}$"
      title="Use MM/DD/YYYY or MM-DD-YYYY format only"
      required
    />
  </div>
</div>

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="state" className="form-label">State</label>
                      <select
                        className="form-control"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        <option value="New York">New York</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="Texas">Texas</option>
                        <option value="California">California</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className="form-label">Email</label>
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
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="insurance" className="form-label">Insurance Provider</label>
                      <input
                        type="text"
                        className="form-control"
                        id="insurance"
                        value={formData.insurance}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="plannos" className="form-label">Plan Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="plannos"
                        value={formData.plannos}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="contact" className="form-label">Contact Method</label>
                      <select
                        className="form-control"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                      >
                        <option value="">Select Method</option>
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                        <option value="SMS">SMS</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="refsource" className="form-label">Referral Source</label>
                      <select
                        className="form-control"
                        id="refsource"
                        value={formData.refsource}
                        onChange={handleChange}
                      >
                        <option value="">Select Source</option>
                        <option value="Google">Google</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend">Friend</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className={styles.formGroup}>
                      <label htmlFor="reason" className="form-label">Reason for Visit</label>
                      <textarea
                        className="form-control"
                        id="reason"
                        rows="4"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    data-gtm-form="become_patient_form"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {responseMessage && (
                <div className="mt-4 text-center alert alert-info">
                  <p>{responseMessage}</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-6 imageSection">
            <Image
              src="/images/becomePatient.webp"
              width={681}
              height={540}
              alt="Become a Patient"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePatientPage;