"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./ReviewSection.scss";

const ReviewSection = () => {
  const reviews = [
    {
      text: "The providers at DaniCare have a great and caring disposition. They listen to what you have to say in order to help you. A very good team.",
      name: "George Narvaez",
      stars: 5,
    },
    {
      text: "Had a great Zoom meeting today with the team at DaniCare. They were kind, supportive, and understanding of my needs and mental health issues.",
      name: "Kabie Phillips",
      stars: 5,
    },
    {
      text: "Helpful, quick, and works with me to accommodate my situation. I highly recommend DaniCare to you.",
      name: "Brandon Boudreaux",
      stars: 5,
    },
    {
      text: "Very attentive and detailed in going through medical history. Was able to have telehealth visit and my needed prescriptions all in the same day.",
      name: "Kristin Waters",
      stars: 5,
    },
    {
      text: "The providers at DaniCare are always so helpful and understanding. They take the time not only to listen to you but to assist.",
      name: "Lucia Mackintosh",
      stars: 5,
    },
    {
      text: "The providers at DaniCare truly care about what they do and their patients. I’m looking forward to continuing to work with them.",
      name: "Dustin Rulo",
      stars: 5,
    },
  ];

  return (
    <section
      className="review-section py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/reviewbgg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="container mt-5 mb-5">
        <h2 className="text-center text-white mb-5">Real Stories. Real Results</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card review-card">
                <div className="card-body">
                  <p className="review-text">&quot;{review.text}&quot;</p>
                  <div className="review-footer">
                    <p className="reviewer-name">{review.name}</p>
                    <div className="review-stars">
                      {[...Array(review.stars)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
