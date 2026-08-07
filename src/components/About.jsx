import React from 'react';
import './About.css';
import SectionHead from './SectionHead';
import { STATS, STACK, LINKS } from '../data/site';
import { ArrowUpRight } from './Icons';

export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <SectionHead index="01" eyebrow="About" title="Engineer, since before I could drive.">
                    My father sat me in front of an HTML file when I was eight. I have
                    been building things on screens ever since, and I have wanted the
                    same job the whole time.
                </SectionHead>

                <div className="about__grid">
                    <div className="about__body reveal">
                        <p>
                            I am finishing a B.S. and M.S. in Computer Engineering at the
                            University of California, San Diego. Most of my time goes to
                            backend and systems work — distributed services, concurrency,
                            and the machine learning that increasingly sits behind both.
                        </p>
                        <p>
                            I care about the parts of software people feel but rarely name:
                            how quickly a page settles, what a service does the moment a
                            worker dies, how little a program can do and still be correct.
                            That instinct shows up the same way in a control loop written in
                            C, a build system that has to survive failure, and this website.
                        </p>
                    </div>

                    <dl className="about__stats reveal" style={{ '--reveal-delay': '90ms' }}>
                        {STATS.map((stat) => (
                            <div className="about__stat" key={stat.value}>
                                <dt className="label">{stat.label}</dt>
                                <dd>{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="about__stack reveal">
                    <span className="label about__stackLabel">Stack</span>
                    <ul className="about__chips">
                        {STACK.map((item, i) => (
                            <li key={item} style={{ '--i': i }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about__links reveal">
                    {[
                        { label: 'GitHub', href: LINKS.github },
                        { label: 'LinkedIn', href: LINKS.linkedin },
                        { label: 'Résumé', href: LINKS.resume },
                    ].map((item) => (
                        <a
                            className="about__link"
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{item.label}</span>
                            <ArrowUpRight />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
