'use client'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutSection.css';

const AboutSection = () => {
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
            <h1 className="cursor-scale">Customized solutions, crafted <br /> in collaboration!</h1>
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
                <ul className="list-group">
                  <li className="list-group-item"><a href="#">Developer Resource 1</a></li>
                  <li className="list-group-item"><a href="#">Developer Resource 2</a></li>
                  <li className="list-group-item"><a href="#">Developer Resource 3</a></li>
                </ul>
              </div>
              <div className={`tab-pane fade ${activeTab === 'partners' ? 'show active' : ''}`} id="partners" role="tabpanel" aria-labelledby="partners-tab">
                <ul className="list-group">
                  <li className="list-group-item">Partner Resource 1</li>
                  <li className="list-group-item">Partner Resource 2</li>
                  <li className="list-group-item">Partner Resource 3</li>
                </ul>
              </div>
              <div className={`tab-pane fade ${activeTab === 'corporates' ? 'show active' : ''}`} id="corporates" role="tabpanel" aria-labelledby="corporates-tab">
                <ul className="list-group">
                  <li className="list-group-item">Corporate Resource 1</li>
                  <li className="list-group-item">Corporate Resource 2</li>
                  <li className="list-group-item">Corporate Resource 3</li>
                </ul>
              </div>
              <div className={`tab-pane fade ${activeTab === 'consumers' ? 'show active' : ''}`} id="consumers" role="tabpanel" aria-labelledby="consumers-tab">
                <ul className="list-group">
                  <li className="list-group-item">Consumer Resource 1</li>
                  <li className="list-group-item">Consumer Resource 2</li>
                  <li className="list-group-item">Consumer Resource 3</li>
                </ul>
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
