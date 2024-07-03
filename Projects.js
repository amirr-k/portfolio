import React from 'react';
import './Projects.css'
import git from './resources2/Git.png'
import imgOne from './resources2/project1.png'



const Projects = () =>
    {
        return (
            <section id = 'projects'>
                <div className = "opening">
                            <text className = "projectText">PROJECTS</text>
                            <text className = "projectLine">______________________________________</text>
                </div>
                <div>
                <body className = "projectBoxes">
                        <div className = "boxOne">
                            <div class="projectOne">
                                <h2>amirkiadi.com</h2>
                                <p>Built from scratch using React.js, CSS, and HTML, 
                                    this website showcases my UI/UX design and frontend development capabilities. 
                                    It has been designed to give a brief glimpse into who I am
                                    through an interactive, user-friendly interface.
                                </p>
                                <img src = {imgOne} alt = '' className = "projImage"></img>
                                <button className = "button">
                                        <img src = {git} alt = ""></img>
                                </button>
                                </div>
                         </div>
                        <div className = "boxTwo">
                            <div class="projectTwo">
                                <h2 className = 'coming'>[COMING SOON] </h2>
                            </div>
                        </div>
                        <div className = "boxThree">
                            <div class="projectThree">
                                <h2 className = 'coming'>[COMING SOON] </h2>
                            </div>
                        </div>
                        <div className = "boxFour">
                            <div class="projectFour">
                                <h2 className = 'coming'>[COMING SOON] </h2>
                            </div>
                            </div>
                    </body>
                </div>
                
            </section>

        );
    }


export default Projects;