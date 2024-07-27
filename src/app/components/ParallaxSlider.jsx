'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import Image from 'next/image';
import './ParallaxSlider.css';

export const ParallaxSlider = () => {
  const slides = [
    {
      image: "https://imgpanda.com/upload/ib/7h4GtHmC8Y.jpg",
      subheading: "On demand live support",
      heading: ["Delivering creative", "digital products"],
      description: "We're a fully dedicated corporate service agency collaborating with brands all over the world.",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    },
    {
      image: "https://imgpanda.com/upload/ib/NqHhOwv4t0.jpg",
      subheading: "On demand live support",
      heading: ["Start your online", "business today"],
      description: "We're a fully dedicated corporate service agency collaborating with brands all over the world.",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    },
    {
      image: "https://imgpanda.com/upload/ib/bRqJVoCe3b.jpg",
      subheading: "On demand live support",
      heading: ["Awesome Solutions", "For your Business"],
      description: "We're a fully dedicated corporate service agency collaborating with brands all over the world.",
      link: "https://www.fiverr.com/aliali44/develop-or-customize-a-wordpress-theme"
    }
  ];

  return (
    <section className="creative-parallax--slider">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Parallax]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            parallax
            className="parallax-slider slider-wrap col-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="swiper-slide--inner text-center text-white">
                  <div className="slide--bg">
                    <div className="slide-bg--inner"></div>
                  </div>
                  <div className="slide-detail">
                    <div className="slide-main--subheading mb-3">
                      <span><i className="fa-solid fa-award"></i> {slide.subheading}</span>
                    </div>
                    <div className="slide-main--heading mb-3">
                      <div className="from-left cursor-scale">{slide.heading[0]}</div>
                      <div className="from-right cursor-scale ">{slide.heading[1]}</div>
                    </div>
                    <div className="slide-des mb-3">
                      <p className='cursor-scale small'>{slide.description}</p>
                    </div>
                    <div className="slide-cta mb-3">
                      <a href={slide.link} className="slide-btn gradient-btn btn btn-primary">
                        Get Started Now <span><i className="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </div>
                    <div className="slide-badge d-flex justify-content-center align-items-center">
                      <span className="patch-check me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                          <path fill="currentColor" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638l-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89l-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622l-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01l.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637l.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89l.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622l.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                        </svg>
                      </span>
                      <span className="badge-heading">Decided Quality</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
