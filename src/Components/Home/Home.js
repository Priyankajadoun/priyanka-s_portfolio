

import React from 'react';
import './Home.css';
import me from '../../assets/img/my.png';



const Home = () => {
    return (
        <div className="hero" >
            <div className="overlay"></div> {/* Transparent overlay image */}
            <div className="hero-content">
                <div className="text-section">
                    <h1>
                        YOUR NEXT <br />
                        GENERATION <br />
                        DIGITAL <br />
                        PARTNER
                    </h1>
                    <p className="sub-text">Grow Together !</p>
                </div>

                <div className="image-section">
                    <img src={me} alt="Priyanka Jadoun" className="hero-img" />
                    
                </div>
            </div>

        </div>
    );
};

export default Home;
