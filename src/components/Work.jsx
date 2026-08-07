import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Work.css';
import SectionHead from './SectionHead';
import { PROJECTS, ARCHIVE } from '../data/site';
import { ArrowUpRight } from './Icons';

/**
 * Projects read as a numbered index rather than a wall of cards. On pointer
 * devices the artwork rides the cursor with a little lag; on touch the whole
 * preview layer is skipped.
 */
export default function Work() {
    const [active, setActive] = useState(null);
    const previewRef = useRef(null);

    const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
    const raf = useRef(0);
    const canHover = useRef(false);

    useEffect(() => {
        canHover.current =
            window.matchMedia('(hover: hover)').matches &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    // Ease the preview toward the pointer each frame instead of pinning it.
    const tick = useCallback(() => {
        const p = pos.current;
        p.x += (p.tx - p.x) * 0.14;
        p.y += (p.ty - p.y) * 0.14;
        if (previewRef.current) {
            previewRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
        }
        raf.current = requestAnimationFrame(tick);
    }, []);

    useEffect(() => {
        if (active === null) {
            cancelAnimationFrame(raf.current);
            raf.current = 0;
            return undefined;
        }
        if (!raf.current) raf.current = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(raf.current);
            raf.current = 0;
        };
    }, [active, tick]);

    const onMove = (event) => {
        if (!canHover.current) return;
        pos.current.tx = event.clientX;
        pos.current.ty = event.clientY;
    };

    const onEnter = (event, index) => {
        if (!canHover.current) return;
        // Seed target and current together so the panel fades in where the
        // cursor already is rather than flying across the screen.
        pos.current.x = pos.current.tx = event.clientX;
        pos.current.y = pos.current.ty = event.clientY;
        setActive(index);
    };

    return (
        <section className="section work" id="work">
            <div className="container">
                <SectionHead index="03" eyebrow="Work" title="Things I have built.">
                    Systems that had to hold up under real conditions — concurrency,
                    failure, and latency budgets that actually mattered.
                </SectionHead>

                <ol
                    className="work__list"
                    onPointerMove={onMove}
                    onPointerLeave={() => setActive(null)}
                >
                    {PROJECTS.map((project, i) => (
                        <li
                            className="reveal"
                            key={project.title}
                            style={{ '--reveal-delay': `${i * 70}ms` }}
                        >
                            <a
                                className={`work__row ${
                                    active !== null && active !== i ? 'is-dimmed' : ''
                                }`}
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                onPointerEnter={(e) => onEnter(e, i)}
                                onFocus={() => setActive(i)}
                                onBlur={() => setActive(null)}
                            >
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
                                    <span className="label">{project.year}</span>
                                    <ArrowUpRight className="work__arrow" />
                                </span>
                            </a>
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

            {/* Cursor-tracked preview layer. Typographic when a project has no
                artwork — better an honest panel than a stock screenshot. */}
            <div
                className={`work__preview ${active !== null ? 'is-live' : ''}`}
                ref={previewRef}
                aria-hidden="true"
            >
                {PROJECTS.map((project, i) => (
                    <div
                        className={`work__card ${active === i ? 'is-current' : ''}`}
                        key={project.title}
                    >
                        {project.image ? (
                            <img src={project.image} alt="" loading="lazy" />
                        ) : (
                            <div className="work__cardType">
                                <span className="label">{project.index} — {project.year}</span>
                                <span className="work__cardTitle">{project.title}</span>
                                <span className="work__cardStack">
                                    {project.stack.join('  ·  ')}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
