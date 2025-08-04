

import React from 'react'
import "./Eduction.css"
import logo from "../../assets/img/logo.jpg"

const info = [
  { id: "1", logo: "https://tse3.mm.bing.net/th?id=OIP.J0zlVpwkHht3q7O2hXdYXwAAAA&pid=Api&P=0&h=180", course: "Bachelor of Technology", institute: "Eshan College of Engineering", duration: "2017 - 2021" },
  { id: "2", logo: logo , course: " Higher Secondary ", institute: "Govind Inter College", duration: "2016 - 2017" },
  { id: "3", logo: logo, course: "Matriculation", institute: " G.S.B.F.K.I.C", duration: "2014 - 2015" }
]

function Education() {
  return (
    <div>
      <section id="education">
        <h1 className="section-heading mb75px">
          <span>
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <span>Eduction</span>
        </h1>
        <div className="timeline">
          {info.map((item, i) =>
            <div className="box" key={item.id}>
              <div className="box-header-container">
                <div className=" box-img ">
                <img src={item.logo} alt=''/>
                </div>
                <div className="box-heading">
                  <p className="heading-color">
                    {item.course}
                  </p>
                  <p className="institute">
                    {item.institute}
                  </p>
                </div>
                <p className="duration">
                  {item.duration}
                </p>
              </div>
            </div>
          )}


          <div className="divider">
          <div className="car">
              <i className="fa-solid fa-car-side"></i>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Education;