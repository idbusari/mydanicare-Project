"use client"; 
import { useEffect } from 'react';
import Link from 'next/link';
import "./ReviewSection.scss"

const ReviewSection = () => {
  useEffect(() => {
    // Initialize Swiper after component mounts
    if (typeof window !== 'undefined') {
      const Swiper = window.Swiper;  // Get the global Swiper object from the window
      new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        autoplay: {
          delay: 3500, //
          disableOnInteraction: true,
        },
      });
    }
  }, []);

  return (
    <section
      className="review-section py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/reviewbgg.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="container mt-5 mb-5">
        <h2 className="text-center text-white mb-5">Real Stories. Real Results</h2>

        {/* Swiper Container */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* Swiper Slide 1 */}
            <div className="swiper-slide">
              <div className="row">
                <div className="col-md-4">
                  <div className="card review-card">
                    <div className="card-body">
                      <p className="review-text">
                        &quot;The providers at DaniCare have a great and caring disposition. They listen to what you have to say in order to help you. A very good team&quot;
                      </p>
                      <div className="review-footer">
                        <p className="reviewer-name">George Narvaez</p>
                        <div className="review-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card review-card">
                    <div className="card-body">
                      <p className="review-text">
                        &quot;Had a great Zoom meeting today with the team at DaniCare. They were kind, supportive, and understanding of my needs and mental health issues&quot;
                      </p>
                      <div className="review-footer">
                        <p className="reviewer-name">Kabie Phillips</p>
                        <div className="review-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card review-card">
                    <div className="card-body">
                      <p className="review-text">
                        &quot;Helpful, quick, and works with me to accommodate my situation. I highly recommend DaniCare to you&quot;
                      </p>
                      <div className="review-footer">
                        <p className="reviewer-name">Brandon Boudreaux</p>
                        <div className="review-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Swiper Slide 2 */}
            <div className="swiper-slide">
              <div className="row">
                <div className="col-md-4 mobiletop">
                  <div className="card review-card">
                    <div className="card-body">
                      <p className="review-text">
                        &quot;Very attentive and detailed in going through medical history. Was able to have telehealth visit and my needed prescriptions all in the same day.&quot;
                      </p>
                      <div className="review-footer">
                        <p className="reviewer-name">Kristin Waters</p>
                        <div className="review-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mobiletop">
                  <div className="card review-card">
                    <div className="card-body">
                      <p className="review-text">
                        &quot;The providers at DaniCare are always so helpful and understanding. They take the time not only to listen to you but to assist.&quot;
                      </p>
                      <div className="review-footer">
                        <p className="reviewer-name">Lucia Mackintosh</p>
                        <div className="review-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card review-card">
                    <div className="card-body">
                      <p className="review-text">
                        &quot;The providers at DaniCare truly care about what they do and their patients. I’m looking forward to continuing to work with them&quot;
                      </p>
                      <div className="review-footer">
                        <p className="reviewer-name">Dustin Rulo</p>
                        <div className="review-stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Pagination */}
          <div className="swiper-pagination"></div>
        </div>

        <div className="text-center">
          <Link href="/reviews">
            <button className="btn-primary mt-4">Read More Reviews</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
