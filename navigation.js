import React from 'react';
import './navigation.css'
import imageOne from './resources2/logo.png';
import {Link} from 'react-scroll';



const NavigationBar = () => {
            return (
                    <nav className = "NavigationBar">
                        <Link className = "homeButton">
                            <img src = {imageOne} alt ="imageOne" className = "imageOne">
                                </img>
                                <text> Amir Kiadi </text>
                            </Link>
                        <div className = "menu">
                                <Link className = "menuItem">About Me</Link>
                                <Link className = "menuItem">Projects</Link>
                                <Link className = "menuItem">Gallery</Link>
                        </div>
                        <button className = "menuButton">
                           Contact
                        </button>
                    </nav>
            );
        }
export default NavigationBar