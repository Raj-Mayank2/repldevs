import React from 'react';
import './Home.css';
import mission from '../../assets/mission.jpg'

import webdesign from '../../assets/webdesign.png'
const Home = () => {
    return (
        <>
            <div className='home-container'>

                <div className='home-content'>
                    <h1>Introducing <span>REPL</span></h1>
                    <p><span>REPL DEVS </span>is a collaborative team of all the developers of our college working together to make interactive and user-friendly websites. Our mission is to foster creativity, collaboration, and learning in the ever-evolving world of technology. Whether you’re a coding pro or just starting your journey, Repl Devs offers you a platform to grow, build, and showcase your skills.</p>
                    <button onClick={() => window.open('https://lu.ma/t249fa71')} className='btn1'>Register for Battle 2.0</button>

                </div>
                <div className='right-content'>
                    <img src={webdesign} alt="" />
                </div>

            </div>
            <div className='mission'>
                <h1>Our <span>Mission</span></h1>
                <p>
                    "At <span>REPL Devs</span>, our mission is to foster innovation and collaboration among college developers, empowering them to build user-friendly, interactive, and impactful web solutions. Together, we strive to bridge the gap between learning and real-world application through teamwork and creativity."
                </p>
                <div class="button-container">
                    <button onClick={() => window.open('https://lu.ma/t249fa71')} class="btn primary">Battle 2.0</button>
                    <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSesex1Z7srGaWxgpYAcFb4Z4eW3hBWxSVg5w2I8dRXZsKCL7w/viewform?usp=sf_link', '_blank', 'noopener,noreferrer')} class="btn secondary">Become a Member</button>
                </div>
                <div class="info-container">
                    <div class="image-section">
                        <img src={mission} alt="Account Plan Preview" />
                    </div>
                    <div class="sidebar">
                    <h3>Empowering Collaboration and Innovation</h3> 
                    <p>Repl empowers aspiring developers to collaborate, learn, and build together, driving innovation and fostering growth in coding and web development.</p> 
                    <h3>Turning Data into Progress</h3> 
                    <p>At Repl, we use data-driven insights to plan, execute, and evaluate projects, turning ideas into meaningful progress for our community.</p> 
                    <h3>Seamless Communication for Success</h3> 
                    <p>Repl connects members with integrated communication tools, ensuring seamless collaboration and knowledge sharing across all our initiatives.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;