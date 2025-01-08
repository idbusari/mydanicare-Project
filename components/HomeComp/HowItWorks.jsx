import Image from "next/image";
import Link from "next/link";
import './HowItWorks.scss';

const HowItWorks = () => {
    return (
<section className="how-it-works-section">
  <div className="container">
    <p className="subheader-caps-medium text-sapphire-light mb-2 text-center">
      How It Works
    </p>
    <h2 className="sec-dark mb-4 text-center">
      Personalized virtual support, guiding you every step of the journey.
    </h2>
    <br />
    <div className="row align-items-center">
      <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
        <Image
          src={'/images/virtual.png'}
          alt="How It Works"
          layout="intrinsic"
          width={667}
          height={1000}
          className="how-it-works-image"
        />
      </div>
      <div className="col-12 col-md-8">
        <div className="how-it-works-container">
          <div className="how-it-works-content py-2 px-3 mb-3">
            <Link href="#" data-slide="1">
              <h3 className="text-sapphire-medium mb-2">
                Comprehensive Initial Consultation
              </h3>
              <p>
                Let your provider know how you’re feeling, get to know you, and
                provide 1:1 support.
              </p>
            </Link>
          </div>
          <div className="how-it-works-content py-2 px-3 mb-3">
            <Link href="#" data-slide="2">
              <h3 className="text-sapphire-medium mb-2">
                Personalized Care Plan Development
              </h3>
              <p>
                Creating a tailored care plan that addresses individual health
                needs and goals for optimal well-being.
              </p>
            </Link>
          </div>
          <div className="how-it-works-content py-2 px-3 mb-3">
            <Link href="#" data-slide="3">
              <h3 className="text-sapphire-medium mb-2">
                Regular Follow-Ups for Progress Monitoring
              </h3>
              <p>
                Regular follow-ups track progress, allowing adjustments to
                treatment based on patient needs, ensuring better health
                outcomes.
              </p>
            </Link>
          </div>
          <div className="how-it-works-content py-2 px-3 mb-3">
            <Link href="#" data-slide="4">
              <h3 className="text-sapphire-medium mb-2">
                Seamless integration of advanced telepsychiatry technology
              </h3>
              <p>
                Effortlessly incorporating cutting-edge telepsychiatry tools to
                provide accessible, high-quality mental health care from
                anywhere.
              </p>
            </Link>
          </div>
          <div className="how-it-works-content py-2 px-3 mb-3">
            <Link href="#" data-slide="5">
              <h3 className="text-sapphire-medium mb-2">
                Focus on long-term wellness and adapting care over time
              </h3>
              <p>
                Emphasizing sustained well-being by continuously adapting care
                to meet evolving needs for lasting health outcomes.
              </p>
            </Link>
          </div>
        </div>
        <p className="text-start mt-3">
          <Link
            href="/become-a-patient"
            className="btn-primary"
            title="Start Treatment Now"
          >
            Start Treatment Now
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>

    );

};

export default HowItWorks;