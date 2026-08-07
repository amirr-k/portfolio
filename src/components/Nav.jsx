import React, { useEffect, useState } from 'react';
import './Nav.css';
import { NAV_SECTIONS } from '../data/site';
import useActiveSection from '../hooks/useActiveSection';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const active = useActiveSection(SECTION_IDS);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock the page behind the mobile overlay so it can't scroll underneath.
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    const go = (event, id) => {
        event.preventDefault();
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const toTop = (event) => {
        event.preventDefault();
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
                <div className="nav__inner">
                    <a className="nav__brand" href="#top" onClick={toTop}>
                        Amir Kiadi
                    </a>

                    <nav className="nav__links" aria-label="Sections">
                        {NAV_SECTIONS.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => go(e, section.id)}
                                className={`nav__link ${
                                    active === section.id ? 'is-active' : ''
                                }`}
                                aria-current={
                                    active === section.id ? 'true' : undefined
                                }
                            >
                                {section.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        className={`nav__toggle ${menuOpen ? 'is-open' : ''}`}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <div
                className={`navsheet ${menuOpen ? 'is-open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className="navsheet__links">
                    {NAV_SECTIONS.map((section, i) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => go(e, section.id)}
                            style={{ '--i': i }}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            <span className="navsheet__index">
                                0{i + 1}
                            </span>
                            {section.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
