import './WhatWeDo.scss';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  return (
<section className="what-we-do-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <p className="subheader-caps-medium text-sapphire-light mb-2">Comprehensive Care</p>
        <h1 className="mb-4 section-title">What We Offer</h1>
        <div>
          <h3 className="text-sapphire-medium mb-3">
            <i className="fa fa-heartbeat mr-2"></i> Personalize Care Plans
          </h3>
          <p className="what-we-do-text">
            We understand that mental health is unique to each individual. Our experts create customized care plans to address your specific needs.
          </p>
        </div>
        <div>
          <h3 className="text-sapphire-medium mb-3">
            <i className="fa fa-video mr-2"></i> Virtual Visit
          </h3>
          <p className="what-we-do-text">
            Transforming mental healthcare through virtual visits – connecting you with expert psychiatrists from the comfort of your space.
          </p>
        </div>
        <div>
          <h3 className="text-sapphire-medium mb-3">
            <i className="fa fa-briefcase mr-2"></i> Experienced Professional
          </h3>
          <p className="what-we-do-text">
            Licensed psychiatrist with years of experience and expertise to guide you on your journey to mental wellness.
          </p>
        </div>
        <div>
          <h3 className="text-sapphire-medium mb-3">
            <i className="fa fa-calendar-check mr-2"></i> Flexible Appointments
          </h3>
          <p className="what-we-do-text">
            We offer convenient appointment scheduling to accommodate your busy lifestyle. Your mental health should never be compromised by a hectic schedule.
          </p>
        </div>
        <div>
          <h3 className="text-sapphire-medium mb-3">
            <i className="fa fa-lock mr-2"></i> Confidential and Supportive Environment
          </h3>
          <p className="what-we-do-text">
            Your privacy is our priority. DaniCare provides a safe and confidential space where you can openly discuss your concerns.
          </p>
        </div>
        <p className="mt-4">
          <Link href="/become-a-patient" className="btn-primary" title="Start Your Journey Today">
          Explore Care
          </Link>
        </p>
      </div>
      <div className="col-12 col-md-6 text-center">
        <Image
          src={'/images/consultation1.jpg'}
          width={667}
          height={1000}
          alt="What We Do"
          className="what-we-do-image"
        />
      </div>
    </div>
  </div>
</section>



  );

};

export default WhatWeDo;