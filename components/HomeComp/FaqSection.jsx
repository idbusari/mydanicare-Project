import Link from "next/link";
import "./FaqSection.scss";

const FaqSection = () => {
    return (
        <section id="faqs" className="aos-init">
            <div className="container faq-container">
                <div className="row justify-content-center mb-3 mb-sm-5">
                    <div className="col-10 text-center">
                        <p className="subheader-caps-medium text-sapphire-light mb-2 mb-sm-3">FREQUENTLY ASKED QUESTIONS</p>
                        <h2 className="mb-4">What&apos;s on your mind?</h2>
                        <p className="text-large mb-4 mb-md-5">If your question isn&apos;t answered below, view our full list of FAQs <Link className="text-oxford-medium" title="faqs" href="/faqs/">here</Link>.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        What types of mental health conditions does DaniCare Psychiatry treat?
                                    </button>
                                </h3>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>We offer treatment for a wide range of mental health conditions, including ADHD, insomnia,
                                          depression, bipolar disorder, anxiety disorders, PTSD, OCD, schizophrenia, and more. Our team
                                          uses evidence-based approaches to provide personalized care for each patient.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Do you provide assessments before starting treatment?
                                    </button>
                                </h3>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Yes, we begin with comprehensive assessments to understand each patient’s unique needs. Using
                                          tools like the PHQ-9 and GAD-7, we evaluate symptoms thoroughly before deciding on a
                                          treatment plan.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What treatment options are available for ADHD?
                                    </button>
                                </h3>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Our ADHD treatments typically involve a combination of medication management and therapeutic
                                          support. This approach is designed to help improve focus, reduce impulsivity, and enhance
                                          productivity in daily life.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How does DaniCare Psychiatry approach insomnia treatment?
                                    </button>
                                </h3>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>We address both the mental and physical aspects of insomnia through sleep-focused therapy,
                                          medication, and lifestyle adjustments, helping you restore a healthy sleep pattern and improve
                                          overall well-being.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What therapies are offered for depression?
                                    </button>
                                </h3>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>For depression, we offer a comprehensive approach that may include medication, cognitive
                                          behavioral therapy (CBT), and lifestyle support to help improve mood, resilience, and overall life
                                          satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        How does DaniCare Psychiatry support patients with bipolar disorder?
                                    </button>
                                </h3>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Our treatment for bipolar disorder includes mood-stabilizing medications, therapy, and practical
                                          coping strategies aimed at maintaining stability and helping you lead a balanced life.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        What anxiety treatments do you provide?
                                    </button>
                                </h3>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Our anxiety treatments often combine medication, therapeutic techniques, and mindfulness
                                          practices to help manage symptoms and bring calm to your everyday life.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Does DaniCare Psychiatry offer online treatment options?
                                    </button>
                                </h3>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Yes, we offer both in-person and online psychiatry services to make quality mental health care
                                          accessible and convenient for our patients.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        What is telepsychiatry, and how does it work?
                                    </button>
                                </h3>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Telepsychiatry allows you to meet with our mental health professionals from the comfort of your
                                          home via secure video calls. It’s an effective and flexible way to receive ongoing psychiatric care
                                          without needing to travel.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        How does DaniCare Psychiatry ensure personalized care?
                                    </button>
                                </h3>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>We start with an in-depth assessment to understand your unique symptoms, challenges, and
                                          goals. This assessment informs a tailored treatment plan that aligns with your needs and is
                                          regularly adjusted as necessary.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingEleven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        Does DaniCare Psychiatry accept insurance?
                                    </button>
                                </h3>
                                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>Yes, DaniCare Psychiatry accepts insurance for our services, aiming to make our treatments as
                                          accessible and affordable as possible. Please contact us to verify coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header text-gray-dark" id="headingTwelve">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                        How does DaniCare Psychiatry ensure personalized care?
                                    </button>
                                </h3>
                                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve"
                                    data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p>We start with an in-depth assessment to understand your unique symptoms, challenges, and
                                          goals. This assessment informs a tailored treatment plan that aligns with your needs and is
                                          regularly adjusted as necessary.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
