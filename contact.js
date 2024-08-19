import React from 'react';
import './contact.css'




const ContactMe = () =>
    {
        return (
            <section id = 'contact'>
                    <div className = "contactText">
                            <text className = "contact">CONTACT</text>
                            <text className = "contactLine">______________________________________</text>
                    </div>
                    <div className = "info">
                            <text className = "phone">
                                    650-224-9677
                            </text>
                             <text className = "email">
                              akiadimoghaddam@ucsd.edu
                                </text>      
                    </div>
                    
                    
                </section>
        );
       
    }


export default ContactMe;