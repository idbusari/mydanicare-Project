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
    immcase: "",
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
        immcase: "",
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
              <div className="col-md-4 mt-3">
                <label htmlFor="state" className="form-label"> State</label>
                <select id="state" className="form-select" value={formData.state} onChange={handleChange}>
                  <option value="">Select State</option>
                  {["New York", "New Jersey", "Texas", "California", "Pennsylvania", "New Mexico", "Arizona", "Oklahoma", "Idaho", "Florida"].map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <div className="col-md-4 mt-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              
              <div className="col-md-4 mt-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mt-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="text" className="form-control" id="dob" placeholder="e.g., MM DD YYYY without any special characters" value={formData.dob} onChange={handleChange} />
              </div>

              <div className="col-md-4 mt-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="col-md-4 mt-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3">
  <label htmlFor="immstatus" className="form-label">Immigration Status</label>
  <select
    id="immstatus"
    className="form-control"
    value={formData.immstatus}
    onChange={handleChange}
  >
    <option value="">Select One</option>
    <option value="us_citizen">U.S. Citizen</option>
    <option value="green_card">Lawful Permanent Resident (Green Card Holder)</option>
    <option value="asylum">Asylum Seeker / Granted Asylum</option>
    <option value="tps">Temporary Protected Status (TPS)</option>
    <option value="daca">DACA (Deferred Action for Childhood Arrivals)</option>
    <option value="visa_holder">Visa Holder (e.g., H-1B, F-1, etc.)</option>
    <option value="no_status">No Current Legal Status</option>
    <option value="other">Other (Please Specify in text box)</option>
    <option value="prefer_not_say">Prefer not to say</option>
  </select>
</div>


                           <div className="col-md-6 mt-3">
  <label htmlFor="immcase" className="form-label">Immigration Case</label>
  <select
    id="immcase"
    className="form-control"
    value={formData.immcase}
    onChange={handleChange}
  >
    <option value="">Select One</option>
    <option value="Assylum_Cases">Asylum & Protection-Based Cases</option>
    <option value="Waiver_Cases">Family-Based & Waiver Cases</option>
    <option value="Victim_Visa">Victim-Based Visas</option>
    <option value="Removal_Defense">Removal Defense</option>
    <option value="Others">Other Common Needs</option>
  </select>
</div>
            </div>

            <div className="row">
          
              <div className="col-md-12 mt-3">
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
