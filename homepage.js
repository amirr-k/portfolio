import React, { useState, useEffect } from 'react';
import './homepage.css';
import imageOne from './resources2/logo.png';

function propagateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //function that creates a delay
}

async function typeText(setTypewriterText) {
    const strings = [' Student.', 'n Athlete.', ' Software Engineer.', 'n Aspiring Attorney.'];
    let time = 90; 
    let currentIndex = 0;
    //setup ends here
    while (1) //infinite loop
                { 
                    let currentWord = strings[currentIndex]; //word with i'th letter included
                    for (let i = 0; i <= currentWord.length; ++i) //loop each letter
                        {
                            setTypewriterText(currentWord.slice(0,i)); //append next letter to text
                            await propagateDelay(time); //wait before typing next letter
                        }
                    
                    await propagateDelay(time*10);

                    for (let j = currentWord.length; j >= 0; --j)
                            {
                                setTypewriterText(currentWord.slice(0, j)); //append next letter to text
                                await propagateDelay(time); //wait before deleting next letter
                            }
                    
                    await propagateDelay(time*10);
                     
                    if (currentIndex === 3) //last word,
                            {
                                currentIndex = 0; //go to beginning
                            }
                    else // otherwise,
                            {
                                currentIndex = currentIndex + 1; //onto next
                            }
                    
                }
}

const Homepage = () => {
    
    return (
        <nav className="Homepage">
            <div className="picture">
                <img src={imageOne} alt="imageOne" className="imageOne" />
            </div>
            <div className="text">
                <text>Welcome to my portfolio!</text>
            </div>
            <div className="staticText">
                <text className="intro">My name is </text>
                <text className="name">Amir Kiadi</text>
            </div>
            <div className="line">
                <text className="intro">______________________________________</text>
                <text className="intro">______________________________________</text>
            </div>
            <div className="typeWriter">
                <text className="iAmA">I am a</text>
                <span className="enterWords">{typewriterText}</span>
                <text className="cursor">︳</text>
            </div>
        </nav>
    );
};

export default Homepage;
