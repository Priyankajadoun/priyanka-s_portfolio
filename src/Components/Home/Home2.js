// import React from 'react';
// import './Home2.css';
// import me from '../../assets/img/mynewimg.jpg'; // Your main profile image
// import Nav from '../Nav/Nav';
// import SocialIcon from '../Social_Icon/Social-Icon';

// const Home = () => {
//   return (
//     <div className="hero">

//       <div className="hero-content">
//         {/* Left Side Text */}
//         <div className="text-section">
//           <h1>
//             YOUR NEXT <br />
//             GENERATION <br />
//             DIGITAL <br />
//             PARTNER
//           </h1>
//           <p className="sub-text">grow together ! home2</p>

//         </div>

//         {/* Right Side Image/Profile */}
//         <div className="image-section">
//           <div className="profile-container">
//             <div className="profile-image">
//               <img src={me} alt="Priyanka Jadoun" />
//             </div>
//             <div className="profile-name">
//               <span>PRIYANKA JADOUN</span>
//             </div>
//             <div className="profile-title">
//               <span>WEB DEVELOPER</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

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


// import React from 'react';
// import './Home2.css';
// import me from '../../assets/img/mynewimg.jpg';
// import Nav from '../Nav/Nav';
// import SocialIcon from '../Social_Icon/Social-Icon';

// const Home = () => {
//   return (
//     <div className="hero">
//       <div className="hero-content">
//         <div className="text-section">
//           <h1>
//             YOUR NEXT <br />
//             GENERATION <br />
//             DIGITAL <br />
//             PARTNER
//           </h1>
//           <p className="sub-text">grow together ! home2</p>
//         </div>

//         <div className="image-section">
//           <div className="profile-container">
//             <div className="profile-image">
//               <img src={me} alt="Priyanka Jadoun" />
//             </div>
//             <div className="profile-name">PRIYANKA JADOUN</div>
//             <div className="profile-title">WEB DEVELOPER</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

