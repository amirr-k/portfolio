import React from 'react';
import './navigation.css'
import imageOne from './resources2/logo.png';
import {Link} from 'react-scroll';

const NavigationBar = () => {
            return (
                  


                    <nav className = "NavigationBar">
                        <div className = "picture">
                        <img src = {imageOne} alt ="imageOne" className = "imageOne"></img>
                        </div>
                        <div className = "menu">
                                <Link className = "menuItemName">Amir Kiadi</Link>
                                <Link className = "menuItem">About Me</Link>
                                <Link className = "menuItem">Projects</Link>
                                <Link className = "menuItem">Gallery</Link>
                                <Link className = "menuItem">Contact</Link>
                        </div>
                    </nav>
            );
        }
export default NavigationBar