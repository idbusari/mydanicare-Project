import Image from "next/image";
import Link from "next/link";
import './AboutIntro.scss';

const AboutIntro = () => {
    return (
        <section id="aboutUs" style={{ padding: '50px 0' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h1 className="mb-4 section-title">About Us</h1>
                        <p>
                            At DaniCare, we are revolutionizing psychiatric care, setting a new standard grounded in empathy,
                            compassion, and an unwavering commitment to our patients. Our mission is not merely to improve mental
                            health services but to transform them into a holistic, patient-centered experience that prioritizes
                            individual well-being above all else. 
                        </p>
                        <p>
                            We’re not just changing the game; we’re creating a brighter future for mental health care—one patient, one
                            breakthrough, and one act of compassion at a time. Join us as we lead the transformation.
                        </p>

                        <div>
                            <Link href="/psychiatry-service-provider"><button className="btn-yellow">Discover More</button></Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <Image
                            src={'/images/talk.webp'}
                            alt="About Us Image"
                            className="img-fluid rounded shadow hide-on-mobile"
                            layout="intrinsic"
                            width={701}
                            height={449}
                        />
                    </div>
                </div>
            </div>
        </section>

    );

};

export default AboutIntro;