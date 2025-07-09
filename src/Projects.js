import React, { useEffect, useRef } from 'react';
import './Projects.css'
import git from './resources2/Git.png'
import imgOne from './resources2/project1.png'
import imgTwo from './resources2/shell.png'

const Projects = () => {
    const titleRef = useRef(null);
    const projectsRef = useRef([]);

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
        projectsRef.current.forEach(project => {
            if (project) observer.observe(project);
        });

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            projectsRef.current.forEach(project => {
                if (project) observer.unobserve(project);
            });
        };
    }, []);

    return (
        <section id='projects'>
            <div className="opening">
                <div ref={titleRef} className="projectText">PROJECTS</div>
            </div>
            <div className="projectBoxes">
                <div ref={el => projectsRef.current[0] = el} className="boxOne">
                    <div className="projectOne">
                        <h2>amirkiadi.com</h2>
                        <p>Built from scratch using React.js, CSS, and HTML, 
                            this website showcases my UI/UX design and frontend development capabilities. 
                            It has been designed to give a brief glimpse into who I am
                            through an interactive, user-friendly interface.
                        </p>
                        <img src={imgOne} alt="Project Preview" className="projImage" />
                        <button className="button" onClick={() => window.open('https://github.com/amirr-k/portfolio', '_blank')}>
                            <img src={git} alt="GitHub" />
                        </button>
                    </div>
                </div>
                <div ref={el => projectsRef.current[1] = el} className="boxTwo">
                     <div className="projectOne">
                        <h2>Optimized UNIX Shell Clone</h2>
                        <p>Built a UNIX shell in C with POSIX process management (fork, execvp, etc), 
                            passing 100% of tests across 20+ cases. It has been optimized beyond 
                            the original project specifications for improved performance.
                        </p>
                        <img src={imgTwo} alt="Project Preview" className="projImageTwo" />
                        <button className="button" onClick={() => window.open('https://github.com/amirr-k/Optimized-Unix-Shell', '_blank')}>
                            <img src={git} alt="GitHub" />
                        </button>
                    </div>
                </div>
                <div ref={el => projectsRef.current[2] = el} className="boxThree">
                    <div className="projectThree">
                        <h2 className='coming'>[COMING SOON]</h2>
                    </div>
                </div>
                <div ref={el => projectsRef.current[3] = el} className="boxFour">
                    <div className="projectFour">
                        <h2 className='coming'>[COMING SOON]</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;