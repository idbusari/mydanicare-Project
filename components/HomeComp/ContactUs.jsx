import Link from 'next/link'; 
import './ContactUs.scss';

const ContactUs = () => {
    return (
      <section id="contactUs">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="text-sapphire-medium mb-4 ">
                Start your journey to better mental health today, with our expert care by your side
              </h2>
              <Link href="/become-a-patient" className="btn-primary mt-5 mt-md-4" title="Start Your Journey">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactUs;
