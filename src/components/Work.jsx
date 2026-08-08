import React from 'react';
import './Work.css';
import SectionHead from './SectionHead';
import { PROJECTS, ARCHIVE } from '../data/site';
import { ArrowUpRight } from './Icons';

/**
 * Projects read as a numbered index rather than a wall of cards. Hovering a
 * row recedes the others — handled entirely in CSS, so this component holds
 * no state.
 */
export default function Work() {
    return (
        <section className="section work" id="work">
            <div className="container">
                <SectionHead eyebrow="Work" title="Things I’ve built.">
                    Showcasing the projects I’m most proud of.
                </SectionHead>

                <ol className="work__list">
                    {PROJECTS.map((project, i) => (
                        <li
                            className="reveal"
                            key={project.title}
                            style={{ '--reveal-delay': `${i * 70}ms` }}
                        >
                            {/* A div, not an anchor — the row carries two
                                destinations, and anchors cannot nest. The demo
                                link stretches over the whole row; source sits
                                above it. */}
                            <div className="work__row">
                                <span className="label work__index">{project.index}</span>

                                <span className="work__main">
                                    <span className="work__title">{project.title}</span>
                                    <span className="work__summary">{project.summary}</span>
                                    <span className="work__stack">
                                        {project.stack.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </span>
                                </span>

                                <span className="work__meta">
                                    <span className="label work__year">{project.year}</span>
                                    <span className="work__links">
                                        <a
                                            className="work__demo"
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Demo
                                            <ArrowUpRight className="work__arrow" />
                                        </a>
                                        <a
                                            className="work__source"
                                            href={project.source}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Source
                                            <ArrowUpRight className="work__arrow" />
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="work__archive reveal">
                    <span className="label work__archiveLabel">Earlier</span>
                    <ul>
                        {ARCHIVE.map((item) => (
                            <li key={item.title}>
                                <a href={item.href} target="_blank" rel="noreferrer">
                                    <span className="work__archiveTitle">{item.title}</span>
                                    <span className="work__archiveNote">{item.note}</span>
                                    <span className="label work__archiveYear">{item.year}</span>
                                    <ArrowUpRight />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
