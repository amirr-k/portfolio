import React from 'react';
import './Projects.css'



const Projects = () =>
    {
        return (
            <proj>
                <div className = "opening">
                            <text className = "projectText">Projects</text>
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
                
            </proj>

        );
    }


export default Projects;