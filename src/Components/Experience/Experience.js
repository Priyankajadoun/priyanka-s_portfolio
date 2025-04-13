import React from 'react'
import "./Experience.css"
import mobiloitte from "../../assets/img/mobiloitte.png"
import VOCSO from "../../assets/img/VOCSO.png"

const info = [
  {
    id: 1, heading: "Web developer", company: "Mobiloitte technologies india pvt. ltd",image:mobiloitte,
    para: " Working at Mobiloitte Technology provides a dynamic and innovative environment for individuals with a passion for software development and Web development.and I learnt many skills from here."
  },
  { id: 2, heading: "Web developer", company: "VOCSO Technologies Pvt. Ltd", image:VOCSO, para: "Working at VOCSO Technology Pvt Ltd offers individuals the opportunity to be part of a professional team dedicated to creating professionally designed and functional websites that effectively convert visitors into customers. The company specializes in developing custom e-commerce websites, content management systems, custom website designs, and rich media websites." },
]

function Experience() {
  return (
    <div>
      <section id="experience">
        <h1 className="section-heading mb75px">
          <span>
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <span>Work Experience</span>
        </h1>
        <div className="timeline">
          {info.map((item, i) =>
            <div className="box" key={item.id}>
              <div className="box-header-container">
                <div className=" box-img ">
                <img src={item.image} alt=''/>
                </div>
                <div className="box-heading">
                  <p className="heading-color">
                    {item.heading}
                  </p>
                  <p className="company">
                    {item.company}
                  </p>
                </div>
                <p className="box-para">
                  {item.para}
                </p>
              </div>
            </div>
          )}


          <div className="divider">
            <div className="aeroplane">
              <i className="fa-solid fa-plane"></i>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Experience