"use client";
import Image from "next/image";
import { useState } from "react";
import styles from './BecomePatientPage.module.scss';

const BecomePatientPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    insurance: "",
    state: "",
    contact: "",
    reason: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Ensure the response is not empty before parsing
      const text = await response.text();
      const result = text ? JSON.parse(text) : null;

      if (response.ok) {
        setResponseMessage("Thank you for your submission! We will contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          phone: "",
          insurance: "",
          state: "",
          contact: "", 
          reason: "",
        });
      } else {
        setResponseMessage(`Error: ${result?.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
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
                Kindly fill the following information to become a Patient on DaniCare.
              </p>
              <form onSubmit={handleSubmit}>
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
                      <label htmlFor="dob" className="form-label">Date of Birth (m/d/y)</label>
                      <input
                        type="text"
                        className="form-control"
                        id="dob"
                        placeholder="e.g., 12/25/1990"
                        value={formData.dob}
                        onChange={handleChange}
                        required
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
                        required
                      />
                    </div>
                  </div>
                </div>

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
                        required
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
                        required
                      />
                    </div>
                  </div>
                </div>
               
                <div className="row">
  <div className="col-md-6">
    <div className={styles.formGroup}>
      <label htmlFor="state" className="form-label">
        State
      </label>
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
        <option value="New Mexico">New Mexico</option>
        <option value="Arizona">Arizona</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Idaho">Idaho</option>
        <option value="Florida">Florida</option>
      </select>
    </div>
  </div>

  <div className="col-md-6">
    <div className={styles.formGroup}>
      <label htmlFor="contact" className="form-label">
        Preferred Contact Method
      </label>
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
                  <button type="submit" className="btn btn-primary btn-lg">Submit</button>
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
              src={"/images/becomePatient.webp"}
              width={681}
              height={540}
              layout="intrinsic"
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
