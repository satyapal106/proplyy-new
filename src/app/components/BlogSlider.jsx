'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import Image from 'next/image';
import './BlogSlider.css';

const BlogSlider = () => {

    return (
        <main>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay, Parallax ,EffectCoverflow, Keyboard, Mousewheel]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                keyboard={{ enabled: true }}
                // mousewheel={{ thresholdDelta: 70 }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    1560: {
                        slidesPerView: 5
                    }
                }}
                className="swiper-item"
            >
                <SwiperSlide className="swiper-blog swiper-slide--one">
                    <div>
                        <h2>Jellyfish</h2>
                        <p>Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria.</p>
                        <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-blog swiper-slide--two">
                    <div>
                        <h2>Seahorse</h2>
                        <p>Seahorses are mainly found in shallow tropical and temperate salt water throughout the world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves.</p>
                        <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-blog swiper-slide--three">
                    <div>
                        <h2>Octopus</h2>
                        <p>Octopuses inhabit various regions of the ocean, including coral reefs, pelagic waters, and the seabed; some live in the intertidal zone and others at abyssal depths. Most species grow quickly, mature early, and are short-lived.</p>
                        <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-blog swiper-slide--four">
                    <div>
                        <h2>Shark</h2>
                        <p>Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head.</p>
                        <a href="https://en.wikipedia.org/wiki/Shark" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-blog swiper-slide--five">
                    <div>
                        <h2>Dolphin</h2>
                        <p>Dolphins are widespread. Most species prefer the warm waters of the tropic zones, but some, such as the right whale dolphin, prefer colder climates. Dolphins feed largely on fish and squid, but a few, such as the orca, feed on large mammals such as seals.</p>
                        <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Image src="/assets/images/section/bg1.webp" width={500} height={500} alt="" className="bg" />
            <Image src="/assets/images/section/bg1.webp" width={500} height={500} alt="" className="bg2" />
        </main>
    );
};

export default BlogSlider;
