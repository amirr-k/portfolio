import React from 'react';
import './Footer.css';
import { LINKS } from '../data/site';

export default function Footer() {
    const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <span className="label">
                    © {new Date().getFullYear()} Amir Kiadi
                </span>

                <span className="label footer__built">
                    Built in React · Deployed on GitHub Pages
                </span>

                <div className="footer__links">
                    <a className="label" href={LINKS.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a className="label" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <button className="label" onClick={toTop}>
                        Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}
