"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./PsychiatristLayout.module.scss";

const PsychiatristLayout = () => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const handleToggleBio = () => {
    setIsBioExpanded(!isBioExpanded);
  };

  return (
    <>
      <div className={`container-fluid mb-4 heropage-bg`}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-5 pt-3">
            <h2 className="sec-dark mb-4 heropage-heading">Our Psychiatrist</h2>
            <p className="heropage-description">
              At DaniCare, our dedicated psychiatrists provide personalized,
              compassionate care to support your mental well-being. Explore our
              team of experts and discover the care you deserve.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Image
              src="/images/pattern-bright.png"
              alt="hero background"
              width={1440}
              height={187}
              priority
              className={styles.heroPattern}
            />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="text-center mb-5">Meet Our Psychiatrists</h1>

        <div className="row mb-5 align-items-center">
          <div className="col-md-4 text-center bg-patterngray">
            <Image
              src="/images/dolani.webp"
              alt="Dr. Dolani Ajanaku"
              width={500}
              height={500}
              className={styles.profileImage}
            />
          </div>
          <div className="col-md-8">
            <div className={styles.psychiatristBio}>
              <h3>Dr. Dolani Ajanaku, M.D</h3>
              <p>
                <strong>Specialization:</strong> General Psychiatry, Anxiety
                Disorders, Depression, Cognitive Behavioral Therapy
              </p>

              <p>
                Dr. Dolani Ajanaku, our esteemed Psychiatrist, brings a wealth
                of expertise to our practice, serving a diverse range of
                individuals seeking comprehensive mental health care. With a
                strong educational background, including a B.A. in Biological
                Sciences from Rutgers University and an M.D. from Rutgers
                University School of Medicine, Dr. Ajanaku is dedicated to
                providing personalized psychiatric care.
                <span
                  id="full-bio-1"
                  className={`collapse ${isBioExpanded ? "show" : ""}`}
                >
                  <br />
                  <br />
                  Having completed General Psychiatry Residency at USF/Stony
                  Brook University and advanced training in Child and Adolescent
                  Psychiatry at Montefiore Medical Center in Bronx, NY, Dr.
                  Ajanaku specializes in a holistic approach to mental
                  well-being. DaniCare offers comprehensive treatment options
                  tailored to unique goals, encompassing meticulous psychiatric
                  evaluation, suitable medical assessments, personalized
                  follow-up sessions, discussions on lifestyle adjustments, and
                  adept medication management.
                  <br />
                  <br />
                  Beyond the credentials, DaniCare understands the diverse
                  needs of our patients, serving a wide scope and coverage.
                  Mental well-being is our top priority, and DaniCare is
                  committed to creating a warm and supportive environment for
                  psychiatric care.
                  <br />
                  <br />
                  Thank you for considering DaniCare as your partner in mental
                  health. DaniCare looks forward to supporting individuals on
                  the path to a healthier and happier life.
                </span>
              </p>

              {!isBioExpanded && (
                <button
                  className="btn-primary btn-sm"
                  type="button"
                  onClick={handleToggleBio}
                  aria-expanded={isBioExpanded}
                >
                  Read Full Bio
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PsychiatristLayout;
