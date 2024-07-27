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
import './FeatureService.css';

const FeatureService = () => {
  return (
    <section className="featured-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <h2 className="cursor-scale">Latest in Real Estate</h2>
          </div>
          <div className="col-sm-12">
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
                  slidesPerView: 4,
                },
              }}
            >
              {/* SwiperSlide 1 */}
              <SwiperSlide>
                <div className="item">
                  <div className="card">
                    <div className="card-img">
                      <div className="zoom-effect">
                        <Image
                          className="img-responsive"
                          src="/assets/images/house/our-properties-1.jpg"
                          width={500}
                          height={300}
                          alt="Property 1"
                        />
                      </div>
                    </div>
                    <div className="card-info">
                      <p className="text-title">Property 1</p>
                      <p className="text-body">Property 1 description and details</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="btn btn-info">
                        Read More
                      </button>
                      <div className="card-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SwiperSlide 2 */}
              <SwiperSlide>
                <div className="item">
                  <div className="card">
                    <div className="card-img">
                      <div className="zoom-effect">
                        <Image
                          className="img-responsive"
                          src="/assets/images/house/our-properties-2.jpg"
                          width={500}
                          height={300}
                          alt="Property 2"
                        />
                      </div>
                    </div>
                    <div className="card-info">
                      <p className="text-title">Property 2</p>
                      <p className="text-body">Property 2 description and details</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="btn btn-info">
                        Read More
                      </button>
                      <div className="card-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SwiperSlide 3 */}
              <SwiperSlide>
                <div className="item">
                  <div className="card">
                    <div className="card-img">
                      <div className="zoom-effect">
                        <Image
                          className="img-responsive"
                          src="/assets/images/house/our-properties-3.jpg"
                          width={500}
                          height={300}
                          alt="Property 3"
                        />
                      </div>
                    </div>
                    <div className="card-info">
                      <p className="text-title">Property 3</p>
                      <p className="text-body">Property 3 description and details</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="btn btn-info">
                        Read More
                      </button>
                      <div className="card-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SwiperSlide 4 */}
              <SwiperSlide>
                <div className="item">
                  <div className="card">
                    <div className="card-img">
                      <div className="zoom-effect">
                        <Image
                          className="img-responsive"
                          src="/assets/images/house/our-properties-4.jpg"
                          width={500}
                          height={300}
                          alt="Property 4"
                        />
                      </div>
                    </div>
                    <div className="card-info">
                      <p className="text-title">Property 4</p>
                      <p className="text-body">Property 4 description and details</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="btn btn-info">
                        Read More
                      </button>
                      <div className="card-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SwiperSlide 5 */}
              <SwiperSlide>
                <div className="item">
                  <div className="card">
                    <div className="card-img">
                      <div className="zoom-effect">
                        <Image
                          className="img-responsive"
                          src="/assets/images/house/our-properties-5.jpg"
                          width={500}
                          height={300}
                          alt="Property 5"
                        />
                      </div>
                    </div>
                    <div className="card-info">
                      <p className="text-title">Property 5</p>
                      <p className="text-body">Property 5 description and details</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="btn btn-info">
                        Read More
                      </button>
                      <div className="card-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SwiperSlide 6 */}
              <SwiperSlide>
                <div className="item">
                  <div className="card">
                    <div className="card-img">
                      <div className="zoom-effect">
                        <Image
                          className="img-responsive"
                          src="/assets/images/house/our-properties-3.jpg"
                          width={500}
                          height={300}
                          alt="Property 6"
                        />
                      </div>
                    </div>
                    <div className="card-info">
                      <p className="text-title">Property 6</p>
                      <p className="text-body">Property 6 description and details</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="btn btn-info">
                        Read More
                      </button>
                      <div className="card-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
