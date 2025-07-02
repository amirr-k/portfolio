import React, { useEffect, useRef } from 'react';
import './about.css';
import Python from './resources2/python.svg'
import C from './resources2/C++.webp'
import Git from './resources2/Git.png'
import Java from './resources2/java.png'
import SQL from './resources2/postgresql.svg'
import reactt from './resources2/react.svg'
import Resume from './resources2/resume.jpg'
import LinkedIn from './resources2/linkedIn.png'

const AboutMe = () => {
    const titleRef = useRef(null);
    const aboutTextRef = useRef(null);
    const realTextRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        if (aboutTextRef.current) observer.observe(aboutTextRef.current);
        if (realTextRef.current) observer.observe(realTextRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (aboutTextRef.current) observer.unobserve(aboutTextRef.current);
            if (realTextRef.current) observer.unobserve(realTextRef.current);
        };
    }, []);

    return (
        <section id="about">
            <div className="Opener">
                <div ref={titleRef} className="title">ABOUT ME</div>
            </div>
            <div ref={aboutTextRef} className="aboutText">
                <p ref={realTextRef} className="realText">
                    I am a Computer Engineering student
                    at the University of California, San Diego. My journey started at the age of 8 years old when my father introduced me
                    basic HTML. Ever since, I have developed a deep passion for programming and have been driven by one clear goal; to become a Software Engineer.
                </p>
            </div>
            <div className="devStack">
                <div className='devSection'>Development Stack</div>
                <div className="iconRow">
                    <div className="Python">
                        <img src={Python} alt="Python" />
                    </div>
                    <div className="CPlusPlus">
                        <img src={C} alt="C++" />
                    </div>
                    <div className="Git">
                        <img src={Git} alt="Git" />
                    </div>
                    <div className="React">
                        <img src={reactt} alt="React" />
                    </div>
                    <div className='Java'>
                        <img src={Java} alt="Java" />
                    </div>
                    <div className="SQL">
                        <img src={SQL} alt="SQL" />
                    </div>
                </div>
            </div>
            <div className="socials">
                <div className='socialSection'>Connect</div>
                <div className="socialButtons">
                    <button id="gitButton" className="gitButton" onClick={() => window.open('https://github.com/amirr-k', '_blank')}>
                        <div className="gitImg">
                            <img src={Git} alt="GitHub" />
                        </div>
                        <span className="gitText">GitHub</span>
                    </button>
                    <button id="LIButton" className="LIButton" onClick={() => window.open('https://linkedin.com/in/amirkiadi', '_blank')}>
                        <div className="LIImg">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </div>
                        <span className="LinkedText">LinkedIn</span>
                    </button>
                    <button id="ResumeButton" className="ResumeButton" onClick={() => window.open('https://drive.google.com/file/d/1WnRczErYMbXcgzlKvXlrkqJR1Rzf_nTZ/view?usp=sharing', '_blank')}>
                        <div className="ResumeImg">
                            <img src={Resume} alt="Resume" />
                        </div>
                        <span className="ResumeText">Resume</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;