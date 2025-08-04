
import React from 'react';
import './Home2.css';
import me from '../../assets/img/mynewimg.jpg';

const Home = () => {
  return (
    <div id="hero">
      <div className="hero-content">
        <div className="text-section">
          <h1 className='animate__animated animate__lightSpeedInLeft'>
            YOUR NEXT <br />
            GENERATION <br />
            DIGITAL <br />
            PARTNER
          </h1>
          <p className="sub-text">Grow Together ! </p>
          <a href="#contact" className="cta-btn">LET'S CONNECT</a>
        </div>

        <div className="image-section animate__animated animate__flipInY">
          <div className="profile-container">
            <div className="profile-image">
              <img src={me}  alt="Priyanka Jadoun" />
            </div>
          </div>
          <div className="profile-name">PRIYANKA JADOUN</div>
          <div className="profile-title">WEB DEVELOPER</div>
        </div>
      </div>
    </div>
  );
};

export default Home;



