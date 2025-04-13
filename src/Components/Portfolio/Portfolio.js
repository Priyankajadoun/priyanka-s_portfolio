import React from 'react';
import "./Portfolio.css"
import ipod from "../../assets/img/ipod.png"
import stopwatch from "../../assets/img/stopwatch.png"
import busybuy from "../../assets/img/busybuy.png"
import tooltip from "../../assets/img/tooltip.png"
import devotion from "../../assets/img/devotion.png"
import digitalAlly from "../../assets/img/digitalAlly.png"



const info = [
    {id:1, image:devotion,para:"This is an devotion website using html,css and js.and using some library like bootstrap.", href:"https://vocal-dasik-082aef.netlify.app/"},
    {id:2, image:stopwatch,para:"This is an stopwatch web app which is designed using html,css and js." ,href:"https://dainty-valkyrie-48542b.netlify.app/"},
    {id:3, image:ipod,para:"This is an ipod web app which is developed by using react js a javascript library. ",href:"https://stately-kataifi-1264e4.netlify.app/"},
    {id:4, image:tooltip,para:"This is an tooltip component which is developed by using react js a javascript library. ",href:"https://mytooltipusingreact.netlify.app/"},
    {id:5, image:busybuy,para:"This is an e-commerce website which is developed by using react js a javascript library and firebase database. ",href:"https://buy-busy-using-react.netlify.app/"},
    {id:6, image:digitalAlly,para:"This is an marketing agency website using html,css and js.and using some library like bootstrap.",href:"https://silly-melomakarona-33f888.netlify.app/"}
  ]
  

function Portfolio() {
  return (
    <div>
        <section id="portfolio">
            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-th-list"></i>
                </span>
                <span> Portfolio </span>
            </h1>
            <div id="portfolio-container">
            {info.map((item, i) => 
                        <div className="portfolio-image-container" key={item.id}>
                            <a href={item.href}>
                            <img  href={item.href} src={item.image} />
                            <div className="portfolio-details">
                                <p>
                                    {item.para}
                                </p>
                            </div>
                            </a>
                           
                        </div>
                    
                )}
</div>
            {/* <div id="portfolio-container">
   
                <div className="portfolio-image-container">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png"/>
                    <div className="portfolio-details">
                        <p>
                            Write here basic details about the project.
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png"/>
                    <div className="portfolio-details">
                        <p>
                            Write here basic details about the project.
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png"/>
                    <div className="portfolio-details">
                        <p>
                            Write here basic details about the project.
                        </p>
                    </div>

                </div>
                <div class="portfolio-image-container">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png"/>
                    <div class="portfolio-details">
                        <p>
                            Write here basic details about the project.
                        </p>
                    </div>

                </div>
                <div class="portfolio-image-container">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png"/>
                    <div class="portfolio-details">
                        <p>
                            Write here basic details about the project.
                        </p>
                    </div>

                </div>
                <div className="portfolio-image-container">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png"/>
                    <div className="portfolio-details">
                        <p>
                            Write here basic details about the project.
                        </p>
                    </div>

                </div>

            </div> */}
        </section>
    </div>
  )
}

export default Portfolio