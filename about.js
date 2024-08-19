import React from 'react';
import './about.css';
import Python from './resources2/python.svg'
import C from './resources2/C++.webp'
import Git from './resources2/Git.png'
import CSS from './resources2/css.webp'
import JS from './resources2/JS.webp'
import HTML from './resources2/html.png'
import reactt from './resources2/react.svg'
import LinkedIn from './resources2/linkedin.webp'
import Resume from './resources2/resume.jpg'



const AboutMe = () =>
        {
            return (
                <about>
                    <section id = 'about'>
                        <div className = "Opener">
                            <text className = "title">ABOUT ME</text>
                            <text className = "aboutLine">______________________________________</text>
                        </div>
                        <div className = "aboutText">
                            <text className = "symbolOne">┏</text>
                            <text className = "symbolThree">┓</text>
                                <p className = "realText"> 
                                    I am a passionate Computer Engineering student 
                                    at the University of California, San Diego.
                                    My dream is to be a Software Engineer working in
                                    Silicon Valley, and my ambition drives me to work towards this goal 
                                    every day. 
                                </p>
                            <text className = "symbolTwo">┛</text>
                            <text className = "symbolFour">┗</text>
                        </div>
                        <div className = "devStack">
                            <text className='devSection'>Development Stack</text>
                            <div className = "icons">
                                    <div className = "Python">
                                         <img src = {Python} className='P' alt =""></img>
                                    </div>
                                         <img src = {C} className='CPlusPlus' alt =''></img>
                                    <div className = "Git">
                                         <img src = {Git} className='G' alt =""></img>
                                    </div>
                                         <img src = {reactt} className='React' alt=''></img>
                                    <div className = 'CSS'>
                                        <img src = {CSS} className='CSS' alt=''></img>
                                    </div>
                                    <div className = 'JS'>
                                        <img src = {JS} className='JS' alt = ''></img>
                                    </div>
                                    <div className = "HTML">
                                        <img src = {HTML} className='HTML' alt = ''></img>
                                    </div>
                            </div>
                        <div className = "socials">
                            <text className='socialSection'>Connect</text>
                            <div className = "buttons">
                                <button id="gitButton" class="gitButton">
                                        <div className = "gitImg">
                                            <img src={Git} alt="GitHub"></img>
                                        </div>
                                        <text class="gitText">GitHub</text>
                                </button>
                                <button id="LIButton" class="LIButton">
                                        <div className = "LIImg">
                                            <img src={LinkedIn} alt="LinkedIn"></img>
                                        </div>
                                        <text class="LinkedText">LinkedIn</text>
                                </button>
                                <button id="ResumeButton" class="ResumeButton">
                                        <div className = "ResumeImg">
                                            <img src={Resume} alt="ResumeImg"></img>
                                        </div>
                                        <text class="ResumeText">Resume</text>
                                </button>

                            </div>
                        </div>
                            
                        </div>
                    </section>
                    </about>
                );
        }

export default AboutMe;