import React from 'react';
import "./Skills.css";

function Skills() {
  return (
    <div> 
      <section id="skills">
    <h1 className="section-heading mb75px">
        <span>
       <i className="fa-solid fa-chalkboard-user"></i>
        </span>
        <span>SKILLS</span>
    </h1>
       <div className="skills-display">
           <div className="skill-progress">
               <div className="eighty-five-percent" style={{width:'75%', backgroundColor:'blue'}}>
                  <div className="skill-name">
                      <span>Java</span>
                   </div> 
               </div>
           </div>
           <div className="skill-progress">
               <div className="eighty-five-percent"style={{width:'95%' , backgroundColor:'#ff3d03'}}>
                  <div className="skill-name">
                      <span>HTML</span>
                   </div> 
               </div>
           </div>
           <div className="skill-progress">
               <div className="eighty-five-percent"style={{width:'85%' , backgroundColor:'#58036c73'}}>
                  <div className="skill-name">
                      <span>CSS</span>
                   </div> 
               </div>
           </div>
           <div class="skill-progress">
               <div class="eighty-five-percent"style={{ width:'65%' , backgroundColor:'#1a7a69'}}>
                  <div class="skill-name">
                      <span>Javascript</span>
                   </div> 
               </div>
           </div>
           <div class="skill-progress">
               <div class="eighty-five-percent"style={{width:'70%' , backgroundColor:'blue'}}>
                  <div class="skill-name">
                      <span>ReactJs</span>
                   </div> 
               </div>
           </div>
           <div className="skill-progress">
               <div className="eighty-five-percent"style={{ width:'60%' , backgroundColor:'#58036c73'}}>
                  <div className="skill-name">
                      <span>DSA</span>
                   </div> 
               </div>
           </div>
       </div>
   </section>
   </div>
  )
}

export default Skills
