import React from 'react';
import './About.css';
import SectionHead from './SectionHead';
import { STATS, STACK, LINKS } from '../data/site';
import { ArrowUpRight } from './Icons';

export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <SectionHead
                    eyebrow="About"
                    title="Engineering, before I could ride a bike."
                >
                    At eight years old, my father sat me down in front of a 2004 IBM
                    ThinkPad and taught me the basics of HTML. Before I knew how to ride
                    a bike, I was hooked on programming. Fittingly, my first software
                    engineering job turned out to be at IBM, in the summer of 2026.
                </SectionHead>

                <div className="about__grid">
                    <div className="about__body reveal">
                        <p>
                            Things have certainly changed since then. AI has accelerated
                            how software gets written, and technology stacks keep shifting
                            underneath us. Even so, my passion and commitment to software
                            engineering have not faltered in the slightest.
                        </p>
                        <p>
                            Most of my time goes to backend and systems work: distributed
                            services, concurrency, and the machine learning that now both
                            speeds up how software is built and lives inside the product
                            itself.
                        </p>
                        <p>
                            In essence, I care about the parts of software people feel but
                            rarely name. How quickly a page settles. What a service does
                            the moment a worker dies. How little a program can do and still
                            be correct.
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
