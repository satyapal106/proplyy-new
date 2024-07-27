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
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="creative-testimonial--slider">
      <div
        className="testimonial-inner"
        style={{
          backgroundImage: 'url(https://imgpanda.com/upload/ib/2Tgg58L106.png)',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="cursor-scale testimonial-heading text-center">
                {`Trusted by the world's fastest growing companies`}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="https://imgpanda.com/upload/ib/3T9Coa4eFQ.png"
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <Image
                        src="https://imgpanda.com/upload/ib/07fXcY3EIH.png"
                        alt="Company Logo"
                        className="img-fluid mb-3"
                      />
                      <p className="testimonial-text">
                        Their team is easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks
                        guys for all your hard work. Trust us, we looked for a
                        very long time.
                      </p>
                      <span className="testimonial-author">
                       {` Herman Miller, Monday`}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="https://imgpanda.com/upload/ib/EG2hj3Ch4z.png"
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <Image
                        src="https://imgpanda.com/upload/ib/VUrKtb4s8h.png"
                        alt="Company Logo"
                        className="img-fluid mb-3"
                      />
                      <p className="testimonial-text">
                        Their team is easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks
                        guys for all your hard work. Trust us, we looked for a
                        very long time.
                      </p>
                      <span className="testimonial-author">
                        Matthew Taylor, Invision
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide--inner text-center">
                    <div className="slide-avatar mb-3">
                      <Image
                        src="https://imgpanda.com/upload/ib/CEnecSuafy.png"
                        alt="Avatar"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-detail">
                      <Image
                        src="https://imgpanda.com/upload/ib/qisrv7T2JJ.png"
                        alt="Company Logo"
                        className="img-fluid mb-3"
                      />
                      <p className="testimonial-text">
                        Their team is easy to work with and helped me make
                        amazing websites in a short amount of time. Thanks
                        guys for all your hard work. Trust us, we looked for a
                        very long time.
                      </p>
                      <span className="testimonial-author">
                        Leonel Mooney, Logitech
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components as needed */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
