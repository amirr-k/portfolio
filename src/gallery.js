import React, { useEffect, useRef } from 'react';
import './gallery.css'
import firstCar from './resources2/FirstCar.jpg'
import athlete from './resources2/Athlete.jpg'
import puppy from './resources2/puppy.jpg'
import grown from './resources2/GrownUp.jpg'
import sanFran from './resources2/sanFrancisco.jpg'
import sunset from './resources2/sunset.jpg'
import sanFran2 from './resources2/sanFran2.jpg'
import sanFran3 from './resources2/IMG_3431.jpg'

const Gallery = () => {
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

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
        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    const galleryItems = [
        { image: firstCar, title: "First Car", description: "70,000 Miles Driven Together and Counting..." },
        { image: athlete, title: "Weightlifting", description: "A hobby I've been commited to for the past 4 years" },
        { image: puppy, title: "Man's Best Friend", description: "My dog, Noah, as a puppy." },
        { image: sanFran, title: "Twin Peaks, 2023", description: "Visited with my girlfriend on New Year's Eve" },
        { image: sunset, title: "First Photo", description: "The first picture in my camera roll, taken the day I moved to California in August of 2019." },
        { image: sanFran2, title: "Adventures in the City", description: "Here with my best friends from high school." },
        { image: grown, title: "Where'd All the Time Go?", description: "Noah today at 5 years old." },
        { image: sanFran3, title: "Twin Peaks, 2024", description: "Visited (again) my girlfriend on New Year's Eve. This is may be a new tradition." }
    ];

    return (
        <section id='gallery'>
            <div ref={titleRef} className="gallery">GALLERY</div>
            <div className="gallery-mobile-warning">
              You seem to be on a mobile device. Please rotate to landscape mode for gallery support.
            </div>
            <div className="galleryGrid">
                {galleryItems.map((item, index) => (
                    <div 
                        key={index}
                        ref={el => cardsRef.current[index] = el}
                        className="flipCard"
                    >
                        <div className="flipCardInner">
                            <div className="flipCardFront">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="flipCardBack">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;