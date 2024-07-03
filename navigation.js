import React from 'react';
import './navigation.css'
//import imageOne from './resources2/logo.png';
import {Link} from 'react-scroll';

const NavigationBar = () => {
            return (
                  


                    <nav className = "NavigationBar">
                        <div className = "menu">
                                <text className = "menuItemName">Amir Kiadi</text>
                                <Link className = "menuItem" activeClass='active' to='about' spy = {true} offset = {-10}>About Me</Link>
                                <Link className = "menuItem" activeClass='active' to='projects' spy = {true}>Projects</Link>
                                <Link className = "menuItem" activeClass='active' to='gallery' spy = {true} offset = {140}>Gallery</Link>
                                <Link className = "menuItem" activeClass='active' to='contact' spy = {true} offset = {50}>Contact</Link>
                        </div>
                    </nav>
            );
        }
export default NavigationBar