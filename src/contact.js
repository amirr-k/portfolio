import React, { useEffect, useRef } from 'react';
import './contact.css';

const ContactMe = () => {
    const titleRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        if (infoRef.current) observer.observe(infoRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (infoRef.current) observer.unobserve(infoRef.current);
        };
    }, []);

    return (
        <section id="contact">
            <div ref={titleRef} className="contact">CONTACT</div>
            <div ref={infoRef} className="info">
                <div className="contact-item">
                    <div className="contact-icon">📱</div>
                    <div className="phone">650-224-9677</div>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <button id='email' className="email" onClick={() => window.open('mailto:amir.kiadi@outlook.com', 'blank')}>amir.kiadi@outlook.com</button>
                </div>
                <div className="contact-message">
                    <p>Always looking for cool projects to work on, feel free to contact me.</p>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;