import React from 'react';
import './navigation.css'
//import imageOne from './resources2/logo.png';
import {Link} from 'react-scroll';

const NavigationBar = () => {
    return (
        <nav className="NavigationBar">
            <div className="menu">
                <span className="menuItemName">Amir Kiadi</span>
                <div className="menuLinks">
                    <Link className="menuItem" activeClass='active' to='about' spy={true} offset={-45}>About Me</Link>
                    <Link className="menuItem" activeClass='active' to='projects' spy={true} offset={-45}>Projects</Link>
                    <Link className="menuItem" activeClass='active' to='gallery' spy={true} offset={-45}>Gallery</Link>
                    <Link className="menuItem" activeClass='active' to='contact' spy={true} offset={-45}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
export default NavigationBar