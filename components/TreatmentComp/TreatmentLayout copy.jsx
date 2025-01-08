import Image from "next/image";
import Link from "next/link";
import "./TreatmentLayout.scss";

const TreatmentLayout = () => {
    return ( 
   <>
        <div className="container-fluid mb-4 heropage-bg">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center mt-5 pt-3">
                    <h2 className="sec-dark b-4 heropage-heading">
                        Treatment</h2>
                    <p className="heropage-description">
                        At DaniCare, your journey is not just ours to guide but to walk together, hand in hand</p>

                </div>
                <Image src={"/images/pattern-bright.png"} alt="hero background" width={1440} height={187} layout="intrinsic" style={{ color: "transparent", width: "1440" }} />
            </div>

        </div>
        <div className="spacer"></div>
        <div className="container mt-5">

            <div className="row section align-items-center ">
                <div className="col-md-6 slide-left">
                    <h2>Compassionate Care, Effective Treatment</h2>
                    <p>At DaniCare Psychiatry, we believe in treating more than just symptoms, we treat the person. Our compassionate, expert-led care is designed to help you achieve lasting mental well-being with support tailored to your unique needs. Whether you&apos;re connecting with us in person or through our convenient online psychiatry services, we&apos;re here to make quality mental health care accessible, personalized, and effective.</p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 text-center slide-right">
                    <Image src={"/images/compassionateCare.webp"} width={400} height={400} layout="intrinsic" alt="Compassionate Care" className="img-fluid" />
                </div>
            </div>

            <div className="row section align-items-center">
                <div className="col-md-6 order-md-2 slide-right">
                    <h2>ADHD Treatment</h2>
                    <p>Achieve Focus and Fulfillment. Living with ADHD can be challenging, but effective treatment can make all the difference. Our ADHD services blend medication management with therapy, providing a structured approach that supports focus, reduces impulsivity, and improves productivity. We aim to help children, teens, and adults alike find success in school, work, and daily life.</p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 order-md-1  slide-left">
                    <Image style={{ borderRadius: "20px" }} src={"/images/adhdTreatment3.png"} width={400} height={400} alt="ADHD Treatment" className="img-fluid" />
                </div>
            </div>

            <div className="row section align-items-center">
                <div className="col-md-6 slide-left">
                    <h2>Insomnia Treatment</h2>
                    <p>Reclaim Restful, Restorative Sleep. Insomnia affects both the mind and body, and our treatments target both to help you find restful sleep. We provide a combination of medication management and lifestyle coaching designed to reestablish healthy sleep routines. Our goal is to restore not just sleep but also the energy and well-being that comes from quality rest.</p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 text-center slide-right">
                    <Image src={"/images/insomniaTreatment.webp"} width={400} height={400} layout="intrinsic" alt="Insomnia Treatment" className="img-fluid" />
                </div>
            </div>


            <div className="row section align-items-center">
                <div className="col-md-6 order-md-2 slide-right">
                    <h2>Depression Treatment</h2>
                    <p>Find Joy and Balance Again. Depression can feel overwhelming, but there’s a way forward. Our approach to depression treatment includes medication management, therapy options like cognitive-behavioral therapy (CBT), and lifestyle support to uplift your mood and rebuild resilience. We’re here to help you rediscover hope, joy, and balance in daily life.</p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 order-md-1 slide-left">
                    <Image src={"/images/depressionTreatment.webp"} width={400} height={400} alt="Depression Treatment" className="img-fluid" />
                </div>
            </div>


            <div className="row section align-items-center">
                <div className="col-md-6 slide-left">
                    <h2>Bipolar Disorder Treatment</h2>
                    <p>Balanced Care for a Stable Life
                        Living with bipolar disorder requires specialized care. Our treatment plans include moodstabilizing medications and practical strategies to manage mood swings effectively. We work with you to build stability, allowing you to achieve a fulfilling life and navigate life&apos;s ups and downs with confidence. For additional therapy support, we connect you with reputable external providers as part of a holistic care approach.
                    </p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 text-center slide-right">
                    <Image style={{ borderRadius: "20px" }} src={"/images/bipolarTreatment.png"} width={400} height={400} layout="intrinsic" alt="Bipolar Disorder Treatment" className="img-fluid" />
                </div>
            </div>


            <div className="row section align-items-center">
                <div className="col-md-6 order-md-2 slide-right">
                    <h2>Anxiety Treatment</h2>
                    <p>Overcome Worry, Embrace Calm
                        Anxiety can be all-consuming, but effective psychiatric care can help you reclaim peace of mind. Our anxiety treatments combine medication management and mindfulness practices tailored to reduce symptoms, manage stress, and bring calm to everyday life. For patients who may benefit from therapy, we facilitate connections with trusted providers to complement your treatment plan.</p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 order-md-1 slide-left">
                    <Image style={{ borderRadius: "20px" }} src={"/images/anxietyTreatment.png"} width={400} height={400} layout="intrinsic" alt="Anxiety Treatment" className="img-fluid" />
                </div>
            </div>

            <div className="row section align-items-center">
                <div className="col-md-6 slide-left">
                    <h2>Comprehensive Mental Health Care</h2>
                    <p>Compassionate Support for PTSD, OCD, and More. Our services extend to a wide range of psychiatric conditions, including PTSD, OCD, and schizophrenia. At DaniCare, we create individualized treatment plans that combine medication and consistent support, allowing each patient to receive the specialized care they need. Our goal is to provide comprehensive, compassionate support that meets you where you are.
                    </p>
                    <Link href="/become-a-patient" className="btn btn-custom">Get Started</Link>
                </div>
                <div className="col-md-6 text-center slide-right">
                    <Image style={{ borderRadius: "20px" }} src={"/images/mentalTreatment.png"} width={400} height={400} layout="intrinsic" alt="Comprehensive Mental Health Care" className="img-fluid" />
                </div>
            </div>


        </div>

    </>
    );
};

export default TreatmentLayout;