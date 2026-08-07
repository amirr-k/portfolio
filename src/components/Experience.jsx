import React from 'react';
import './Experience.css';
import SectionHead from './SectionHead';
import { EXPERIENCE } from '../data/site';
import { ArrowUpRight } from './Icons';

export default function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <SectionHead index="02" eyebrow="Experience" title="Where I have worked.">
                    Infrastructure, embedded control, and applied machine learning across
                    industry, research, and competition.
                </SectionHead>

                <ol className="exp__list">
                    {EXPERIENCE.map((job, i) => (
                        <li
                            className="reveal"
                            key={job.company}
                            style={{ '--reveal-delay': `${i * 70}ms` }}
                        >
                            <a
                                className="exp__row"
                                href={job.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* Rail marker doubles as the timeline node */}
                                <span className="exp__rail" aria-hidden="true">
                                    <span className="exp__node" />
                                </span>

                                <span className="exp__body">
                                    <span className="exp__head">
                                        <span className="exp__company">
                                            {job.company}
                                            <ArrowUpRight className="exp__arrow" />
                                        </span>
                                        <span className="label exp__period">{job.period}</span>
                                    </span>

                                    <span className="exp__role">{job.role}</span>
                                    <span className="exp__summary">{job.summary}</span>

                                    <span className="exp__tags">
                                        {job.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </span>
                                </span>
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
