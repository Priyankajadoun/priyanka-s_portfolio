import React from 'react';
import "./Contact.css"
// import { Send, SendAndArchive } from '@mui/icons-material';
import SocialIcon from '../Social_Icon/Social-Icon';

function Contact() {
  return (
    <div>
      <section id="contact">
        <h1 className="section-heading mb75px" style={{ display: 'table' }}>
          <span style={{color:"white"}}>
            <i className="fa-regular fa-address-card"></i>
          </span >
          <span style={{color:"white"}}>Contact</span>
        </h1>
        <div id="form-container">
          <div id="form">
            <form action='https://formspree.io/f/xwpkongp' method='POST'>
              <div className="form-field">
                <input className="form" type="text" name="name" placeholder=" Enter Your Name" autoComplete='off' required/>
              </div>
              <div className="form-field">
                <input className="form" type="email" name="Email" placeholder=" Enter Your Email" autoComplete='off' required/>
              </div>
              <div className="form-field">

                <textarea className="form" name="Message" placeholder="Message" cols={30} rows={4} autoComplete='off' required></textarea>
              </div>
              <div style={{paddingLeft: "25%"}}>


                <button className="send-button" type='submit'>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div id="details">
            <div className="get-in-touch">
              <h5>
                Get in touch
              </h5>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
              </p> */}
            </div>
            <h6 className="address-heading">
              My Address
            </h6>
            <div className="address">
              <span><i className="fa-solid fa-location-dot"></i></span>
              <span>Agra,India</span>
            </div>
            <div className="address">
              <span><i className="fa-solid fa-mobile-screen-button"></i></span>
              <span>+919068057526</span>
            </div>
            <div className="address">
              <span><i className="fa-regular fa-envelope"></i></span>
              <span>jadounpriyanka1@gmail.com</span>




            </div>

          </div>
        </div>
        <div className="contact-social-icon">
        <SocialIcon/>
        </div>
        </section >
    </div >
  )
}

export default Contact