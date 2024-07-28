'use client'
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutSection.css';

const AboutSection = () => {

  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.from(h1Ref.current, {
      scrollTrigger: {
        trigger: h1Ref.current,
        start: 'top 80%',
        end: 'bottom 30%',
        scrub: true,
      },
      opacity: 0,
      y: -50,
      duration: 1,
    });

    gsap.from(pRef.current, {
      scrollTrigger: {
        trigger: pRef.current,
        start: 'top 80%',
        end: 'bottom 30%',
        scrub: true,
      },
      opacity: 0,
      x: 50,
      duration: 1,
    });
  }, []);

  const [activeTab, setActiveTab] = useState('developers');
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTabHover = (tab) => {
    setHoveredTab(tab);
  };

  const getImageId = () => {
    switch (hoveredTab || activeTab) {
      case 'developers':
        return 'developer-img';
      case 'partners':
        return 'partner-img';
      case 'corporates':
        return 'corporate-img';
      case 'consumers':
        return 'consumer-img';
      default:
        return 'developer-img';
    }
  };

  return (
    <section
      className="about-section"
      style={{
        backgroundImage: "url('https://apexa-html-demo.netlify.app/assets/img/bg/blog_post_bg.jpg')",
      }}
    >
      <div className="container">
        <div id="custom-solutions" className="row align-items-center">
          <div className="col-md-9 col-sm-12">
            <h1 ref={pRef} className="cursor-scale about-heading">Customized solutions, crafted <br /> in collaboration!</h1>
            <span>If you are a</span>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'developers' ? 'active' : ''}`}
                  onClick={() => handleTabChange('developers')}
                  onMouseEnter={() => handleTabHover('developers')}
                  onMouseLeave={() => setHoveredTab(null)}
                  type="button"
                  role="tab"
                  aria-controls="developers"
                  aria-selected={activeTab === 'developers'}
                >
                  Developers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'partners' ? 'active' : ''}`}
                  onClick={() => handleTabChange('partners')}
                  onMouseEnter={() => handleTabHover('partners')}
                  onMouseLeave={() => setHoveredTab(null)}
                  type="button"
                  role="tab"
                  aria-controls="partners"
                  aria-selected={activeTab === 'partners'}
                >
                  Channel Partners
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'corporates' ? 'active' : ''}`}
                  onClick={() => handleTabChange('corporates')}
                  onMouseEnter={() => handleTabHover('corporates')}
                  onMouseLeave={() => setHoveredTab(null)}
                  type="button"
                  role="tab"
                  aria-controls="corporates"
                  aria-selected={activeTab === 'corporates'}
                >
                  Corporates
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'consumers' ? 'active' : ''}`}
                  onClick={() => handleTabChange('consumers')}
                  onMouseEnter={() => handleTabHover('consumers')}
                  onMouseLeave={() => setHoveredTab(null)}
                  type="button"
                  role="tab"
                  aria-controls="consumers"
                  aria-selected={activeTab === 'consumers'}
                >
                  Consumers
                </button>
              </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
              <div className={`tab-pane fade ${activeTab === 'developers' ? 'show active' : ''}`} id="developers" role="tabpanel" aria-labelledby="developers-tab">
                <p>Developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className={`tab-pane fade ${activeTab === 'partners' ? 'show active' : ''}`} id="partners" role="tabpanel" aria-labelledby="partners-tab">
                <p>Channel Partner Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className={`tab-pane fade ${activeTab === 'corporates' ? 'show active' : ''}`} id="corporates" role="tabpanel" aria-labelledby="corporates-tab">
                <p>Corporates Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className={`tab-pane fade ${activeTab === 'consumers' ? 'show active' : ''}`} id="consumers" role="tabpanel" aria-labelledby="consumers-tab">
                <p>Consumers Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <img
              src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstart-image.6f61ffa6.png&w=640&q=75"
              alt="Developer"
              id="developer-img"
              className={`img-fluid ${getImageId() === 'developer-img' ? '' : 'd-none'}`}
            />
            <img
              src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchannelpartner.73537ff6.png&w=640&q=75"
              alt="Partner"
              id="partner-img"
              className={`img-fluid ${getImageId() === 'partner-img' ? '' : 'd-none'}`}
            />
            <img
              src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcorporate.5a441703.png&w=640&q=75"
              alt="Corporate"
              id="corporate-img"
              className={`img-fluid ${getImageId() === 'corporate-img' ? '' : 'd-none'}`}
            />
            <img
              src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconsumer.c16de992.png&w=640&q=75"
              alt="Consumer"
              id="consumer-img"
              className={`img-fluid ${getImageId() === 'consumer-img' ? '' : 'd-none'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
