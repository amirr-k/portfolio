import React, { useState } from 'react';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
    // Skip the intro on in-session re-renders so it never feels like a toll gate.
    const [intro, setIntro] = useState(
        () => !sessionStorage.getItem('introSeen')
    );

    useReveal();

    const finishIntro = () => {
        sessionStorage.setItem('introSeen', '1');
        setIntro(false);
    };

    return (
        <>
            {intro && <Loader onDone={finishIntro} />}

            <div className="grid-backdrop" aria-hidden="true" />

            <div className="shell">
                <Nav />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Work />
                    <Gallery />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}
