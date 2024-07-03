import React from 'react';
import './gallery.css'
import firstCar from './resources2/FirstCar.jpg'
import athlete from './resources2/Athlete.jpg'
import puppy from './resources2/puppy.jpg'
import grown from './resources2/GrownUp.jpg'
import sanFran from './resources2/sanFrancisco.jpg'
import sunset from './resources2/sunset.jpg'
import sanFran2 from './resources2/sanFran2.jpg'



const Gallery = () =>
    {
        return (
            <section id = 'gallery'>
                 <div className = "galleryText">
                            <text className = "gallery">GALLERY</text>
                            <text className = "galleryLine">______________________________________</text>
                </div>
                <div className = "pictures">  
                    <img src = {firstCar} alt = '' className = "firstCar"></img>
                    <img src = {athlete} alt = '' className = "athletePic"></img>
                    <img src = {puppy} alt = '' className = "puppyPic"></img>
                    <img src = {sanFran} alt = '' className = "sfPic"></img>
                    <img src = {grown} alt = '' className = "grownPic"></img>
                    <img src = {sunset} alt = '' className = "sunPic"></img>
                    <img src = {sanFran2} alt = '' className = "sfPic2"></img>
                </div>
            </section>
        );
    }


export default Gallery;