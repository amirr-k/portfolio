import React from 'react';
import './homepage.css';
import imageOne from './resources2/logo.png';

const Homepage = () => {
    return (

        <nav className = "Homepage">
            <div className = "picture">
                    <img src = {imageOne} alt ="imageOne" className = "imageOne"></img>
            </div>

        </nav>
    );
}
export default Homepage