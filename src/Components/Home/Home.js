// import React from 'react';
// import "./Home.css"
// import Nav from '../Nav/Nav';
// import SocialIcon from '../Social_Icon/Social-Icon';

// function Home() {
//     return (
//         <div className='overlay'>
//             <div className='container'>
//                 <Nav />
//                 <div id="name-social-container" style={{ textAlign: 'center' }}>
//                     <div className="text-center">
//                         <h1 id="my-name">
//                             Priyanka
//                         </h1>

//                     </div>
//                     <SocialIcon/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home

import React from 'react';
import './Home.css';
import logo from '../../assets/img/logo.png'; // rename to logo.png
// import bg from '../../assets/img/bg2.png';
import hero from '../../assets/img/hero.png';
import me from '../../assets/img/my.png';
import SocialIcon from '../Social_Icon/Social-Icon';


const Home = () => {
    return (
        <div className="hero" >
            <div className="overlay"></div> {/* Transparent overlay image */}

                        {/* <div className='container'>
                        <div id="name-social-container" style={{ textAlign: 'center', marginTop: "20%"}}>
                            <div className="text-center">
                                <h1 id="my-name">
                                    Priyanka
                                </h1>

                            </div>
                            <SocialIcon />
                        </div>
                        </div> */}
            <div className="hero-content">
                <div className="text-section">
                    {/* <img src={logo} alt="Web Bloom Logo" className="logo" /> */}
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
                    {/* <div className="info-text">
            <p>Design 📸</p>
            <p>Develop 👩‍💻</p>
            <p>Deliver 📩</p>
          </div> */}
                </div>
            </div>

        </div>
    );
};

export default Home;
