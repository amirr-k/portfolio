import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import { ROLES } from '../data/site';

const NAME = ['Amir', 'Kiadi'];

export default function Hero() {
    const [role, setRole] = useState(0);
    const spotlightRef = useRef(null);

    useEffect(() => {
        const id = setInterval(
            () => setRole((i) => (i + 1) % ROLES.length),
            2600
        );
        return () => clearInterval(id);
    }, []);

    // A soft light that trails the pointer across the hero. Pointer-driven only —
    // touch devices and reduced-motion users never see it.
    useEffect(() => {
        const el = spotlightRef.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (!window.matchMedia('(hover: hover)').matches) return;

        let frame = 0;
        const onMove = (event) => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
                el.style.setProperty('--my', `${event.clientY - rect.top}px`);
                el.style.setProperty('--lit', '1');
                frame = 0;
            });
        };
        const onLeave = () => el.style.setProperty('--lit', '0');

        const parent = el.parentElement;
        parent.addEventListener('pointermove', onMove);
        parent.addEventListener('pointerleave', onLeave);
        return () => {
            parent.removeEventListener('pointermove', onMove);
            parent.removeEventListener('pointerleave', onLeave);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="hero" id="top">
            <div className="hero__spotlight" ref={spotlightRef} aria-hidden="true" />

            <div className="container hero__inner">
                <div className="hero__eyebrow">
                    {/* Each place is its own element so it stays a separate flex
                        item when the dot is dropped and the row stacks on mobile. */}
                    <span className="label">
                        <span>San Francisco Bay Area</span>
                        <span className="hero__dot" aria-hidden="true" />
                        <span>UC San Diego</span>
                    </span>
                </div>

                <h1 className="hero__name">
                    {NAME.map((word, w) => (
                        <span className="hero__word" key={word}>
                            {word.split('').map((char, c) => (
                                <span
                                    className="hero__char"
                                    key={`${word}-${c}`}
                                    style={{ '--d': `${(w * 4 + c) * 42 + 120}ms` }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>

                <div className="hero__role">
                    <span className="hero__roleTrack" key={role}>
                        {ROLES[role]}
                    </span>
                </div>

                <div className="hero__actions">
                    <button className="btn btn--solid" onClick={() => jump('work')}>
                        View work
                    </button>
                    <button className="btn btn--ghost" onClick={() => jump('contact')}>
                        Get in touch
                    </button>
                </div>
            </div>
        </section>
    );
}
