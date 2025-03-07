"use client";
import Image from "next/image";
import { useState } from "react";
import styles from './BecomePatientPage.module.scss'; // Ensure the SCSS file is correctly placed

const BecomePatientPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    insurance: "",
    states: "",
    contact: "",
    reason: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setResponseMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setResponseMessage(`Error: ${response.statusText}`);
        return;
      }

      const result = await response.json();
      setResponseMessage(result.message || "Thank you for your submission! We will contact you shortly.");

      // Clear form after submission
      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          phone: "",
          reason: "",
          states: "",
          contact: "",
          insurance: "",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMessage("Error: Unable to send message. Please try again.");
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
                Kindly fill in the information to become a Patient on DaniCare.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Name and age fields */}
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
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="age" className="form-label">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className="form-label">Email</label>
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

                {/* Phone, Insurance, and State */}
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="insurance" className="form-label">Insurance Provider</label>
                      <input
                        type="text"
                        className="form-control"
                        id="insurance"
                        value={formData.insurance}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="states" className="form-label">State</label>
                      <select
                        className="form-control"
                        id="states"
                        value={formData.states}
                        onChange={handleChange}
                      >
                        <option value="">Select State</option>
                        {/* Add more states here */}
                        <option value="New York">New York</option>
                        <option value="California">California</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="contact" className="form-label">Preferred Contact Method</label>
                      <select
                        className="form-control"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                      >
                        <option value="">Select Contact Method</option>
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                        <option value="SMS">SMS</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Reason for visit */}
                <div className="row">
                  <div className="col-md-14">
                    <div className={styles.formGroup}>
                      <label htmlFor="reason" className="form-label">Reason for Visit</label>
                      <textarea
                        className="form-control"
                        id="reason"
                        rows="4"
                        value={formData.reason}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </form>

              {responseMessage && (
                <div className="mt-4 text-center bg-info">
                  <p>{responseMessage}</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-6">
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
