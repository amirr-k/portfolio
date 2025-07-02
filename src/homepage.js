import React, { useState, useEffect} from 'react';
import './homepage.css';
import imageOne from './resources2/CenterIcon.gif';

function propagateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //function that creates a delay
}

async function typingAnimation(setText) {
    const strings = ['Computer Engineer', 'Researcher', 'Software Engineer', 'Student', 'Athlete'];
    let time = 40; 
    let currentIndex = 0;
    //setup ends here
    while (1) //infinite loop
                { 
                    let currentWord = strings[currentIndex]; //word with i'th letter included
                    for (let i = 0; i <= currentWord.length; ++i) //loop each letter
                        {
                            setText(currentWord.slice(0,i)); //display i'th letter using function
                            await propagateDelay(time*1.2); //wait before typing next letter
                        }
                    
                    await propagateDelay(time*20);

                    for (let j = currentWord.length; j >= 0; --j)
                            {
                                setText(currentWord.slice(0, j)); //remove j'th letter using function
                                await propagateDelay(time); //wait before deleting next letter
                            }
                    
                    await propagateDelay(time*20);
                     
                    if (currentIndex === 4) //last word,
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
    const [outputText, setText] = useState(""); //initialize empty state(s)
    useEffect(()=>{typingAnimation(setText);}, []);
    //follow useEffect to update outputText state

    return (
        <div className="Homepage">
            <div className="picture">
                <img src={imageOne} alt="imageOne" className="imageOne" width={340} height={340} />
            </div>
            <div className="staticText">
                <span className="name">Amir Kiadi</span>
            </div>
            <div className="typeWriter">
                <span className="enterWords">{outputText}</span>
                <span className="cursor">|</span>
            </div>
            <div className="chatButtonContainer">
                <div className="chatPromptText">About Me</div>
                <button
                  className="chatButton bounceArrow"
                  onClick={() => window.scrollBy({ top: 600, behavior: 'smooth' })}
                  style={{ border: 'none', background: 'none' }}
                >
                  ↓
                </button>
            </div>
        </div>
    );
};

export default Homepage;
