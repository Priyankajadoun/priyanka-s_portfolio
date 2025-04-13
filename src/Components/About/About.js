import React from 'react'
import "./About.css"
import myimg from "../../assets/img/4.jpeg";

function About() {
  return (
    <>
    <section id="about">
            <div id="my-image">
                <img src={myimg} alt='my_img'/>
            </div>

            <div id="about-para">

                <p>
                Dedicated and innovative web developer with 9 months of hands-on 
experience in creating dynamic and responsive web applications. Searching 
for a challenging role at progressive organisation that offers immense 
growth opportunities and to implement and advance knowledge and skills to
contribute to the success of organisation.
                </p>

            </div>

        </section>
    </>
  )
}

export default About