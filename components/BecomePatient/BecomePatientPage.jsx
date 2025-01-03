"use client"
import Image from "next/image";
import { useState } from "react";
import styles from './BecomePatientPage.module.scss';

const BecomePatientPage = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    insurance: "",
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

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Thank you for your submission! We will contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          phone: "",
          reason: "",
          insurance: "",
        });
      } else {
        setResponseMessage(`Error: ${result.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error(error);
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


                  <div className="col-md-6">
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

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
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

                  <div className="col-md-6">
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


                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="insurance" className="form-label">
                        Insurance Provider
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
                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className={styles.formGroup}>
                      <label htmlFor="reason" className="form-label">
                        Reason for visit
                      </label>
                      <textarea
                        className="form-control"
                        id="reason"
                        rows="4" // You can adjust the number of rows as per your preference
                        value={formData.reason}
                        onChange={handleChange}
                      />
                    </div>
                  </div>


                  <div className="col-md-6">

                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn-primary btn-lg">
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
