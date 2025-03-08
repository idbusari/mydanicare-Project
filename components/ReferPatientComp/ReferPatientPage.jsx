"use client";

import { useState } from "react";
import styles from "./ReferPatientPage.module.scss";

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
    setFormData((prev) => ({ ...prev, [id]: value }));
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
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Request failed with status ${response.status}`);
      }

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
      setStatus({ success: false, message: error.message || "An unexpected error occurred." });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <h1 className="mb-4 section-title text-center">Refer a Patient</h1>
        <p className="text-center">
          DaniCare Psychiatry welcomes referrals from healthcare providers, therapists, and family members looking to support a loved one&apos;s mental health.
        </p>
        <div className="spacer"></div>
        
        <h2 className={styles.pageTitle}>Referral Form</h2>
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">Patient&apos;s State</label>
                <select id="state" className="form-select" value={formData.state} onChange={handleChange}>
                  <option value="">Select State</option>
                  {["New York", "New Jersey", "Texas", "California", "Pennsylvania", "New Mexico", "Arizona", "Oklahoma", "Idaho", "Florida"].map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div className="col-md-4">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              
              <div className="col-md-4">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dob" value={formData.dob} onChange={handleChange} />
              </div>

              <div className="col-md-4">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="col-md-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="insurance" className="form-label">Insurance</label>
                <input type="text" className="form-control" id="insurance" value={formData.insurance} onChange={handleChange} />
              </div>

              <div className="col-md-8">
                <label htmlFor="reason" className="form-label">Reason For Referral (Optional)</label>
                <textarea className="form-control" id="reason" rows="3" value={formData.reason} onChange={handleChange}></textarea>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn-primary">Submit Referral</button>
            </div>

            {status.message && (
              <div className={`mt-3 alert ${status.success ? "alert-success" : "alert-danger"}`}>
                {status.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferPatientPage;
