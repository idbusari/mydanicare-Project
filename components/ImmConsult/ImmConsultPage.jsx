"use client";

import { useState } from "react";
import styles from "./ImmConsultPage.module.scss";

const ImmConsultPage = () => {
  const [formData, setFormData] = useState({
    state: "",
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    immstatus: "",
    passnumm: "",
    others: "",
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
      const response = await fetch("/api/imm", {
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
        immstatus: "",
        passnumm: "",
        others: "",
      });
      setStatus({ success: true, message: "Submission is succesful!" });
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ success: false, message: error.message || "An unexpected error occurred." });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <h1 className="mb-4 section-title text-center"> Psychiatric Evaluation Service - Immigration</h1>
        <p className="text-center">
          Need a psychiatric evaluation for your immigration case? Our board-certified psychiatrist provides confidential, professional assessments, 
          for asylum, hardship waivers, VAWA petitions, U visas, and more. Each evaluation is thorough, objective, and backed by clinical expertise,
          delivered via secure telepsychiatry or in-person appointments.
        </p>
        <div className="spacer"></div>
        
        <h2 className={styles.pageTitle}>Book Appointment Now</h2>
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="state" className="form-label"> State</label>
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
                <input type="text" className="form-control" id="dob" placeholder="e.g., MM DD YYYY without any special characters" value={formData.dob} onChange={handleChange} />
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
              <div className="col-md-6">
                <label htmlFor="immstatus" className="form-label">Immigration Status</label>
                <input type="text" className="form-control" id="immstatus" value={formData.immstatus} onChange={handleChange} />
              </div>

              <div className="col-md-6">
                <label htmlFor="passnumm" className="form-label"> Passport Number </label>
                <input type="text" className="form-control" id="passnumm" rows="3" value={formData.passnumm} onChange={handleChange}></input>
              </div>
            </div>

            <div className="row">
          
              <div className="col-md-12">
                <label htmlFor="others" className="form-label">Any other related information (Optional)</label>
                <textarea className="form-control" id="others" rows="3" value={formData.others} onChange={handleChange}></textarea>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn-primary">Submit </button>
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

export default ImmConsultPage;
