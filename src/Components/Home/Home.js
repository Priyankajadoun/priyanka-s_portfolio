import React from 'react';
import "./Home.css"
import Nav from '../Nav/Nav';
import SocialIcon from '../Social_Icon/Social-Icon';

function Home() {
    return (
        <div className='overlay'>
            <div className='container'>
                <Nav />
                <div id="name-social-container" style={{ textAlign: 'center' }}>
                    <div className="text-center">
                        <h1 id="my-name">
                            Priyanka
                        </h1>

                    </div>
                    <SocialIcon/>
                </div>
            </div>
        </div>
    )
}

export default Home