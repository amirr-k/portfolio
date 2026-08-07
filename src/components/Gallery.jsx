import React, { useCallback, useEffect, useState } from 'react';
import './Gallery.css';
import SectionHead from './SectionHead';
import { GALLERY } from '../data/site';
import { ChevronLeft, ChevronRight, Close } from './Icons';

export default function Gallery() {
    const [open, setOpen] = useState(null);

    const close = useCallback(() => setOpen(null), []);
    const step = useCallback(
        (delta) =>
            setOpen((i) =>
                i === null ? i : (i + delta + GALLERY.length) % GALLERY.length
            ),
        []
    );

    useEffect(() => {
        if (open === null) return undefined;

        const onKey = (event) => {
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowRight') step(1);
            if (event.key === 'ArrowLeft') step(-1);
        };

        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', onKey);
        };
    }, [open, close, step]);

    const current = open === null ? null : GALLERY[open];

    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <SectionHead eyebrow="Gallery" title="Outside the terminal.">
                    Moments frozen in time.
                </SectionHead>

                <div className="gal__grid">
                    {GALLERY.map((item, i) => (
                        <button
                            className={`gal__item reveal ${
                                item.span ? `is-${item.span}` : ''
                            }`}
                            key={item.title}
                            style={{ '--reveal-delay': `${(i % 4) * 70}ms` }}
                            onClick={() => setOpen(i)}
                            aria-label={`Open ${item.title}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                style={item.focus ? { objectPosition: item.focus } : undefined}
                            />
                            <span className="gal__caption">
                                <span className="gal__title">{item.title}</span>
                                <span className="gal__sub">{item.caption}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {current && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={current.title}
                    onClick={close}
                >
                    <button className="lightbox__close" onClick={close} aria-label="Close">
                        <Close width={20} height={20} />
                    </button>

                    <button
                        className="lightbox__nav is-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            step(-1);
                        }}
                        aria-label="Previous photo"
                    >
                        <ChevronLeft width={22} height={22} />
                    </button>

                    {/* Stop propagation so clicking the photo itself doesn't dismiss */}
                    <figure
                        className="lightbox__figure"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={current.image} alt={current.title} />
                        <figcaption>
                            <span className="lightbox__title">{current.title}</span>
                            <span className="lightbox__sub">{current.caption}</span>
                            <span className="label lightbox__count">
                                {String(open + 1).padStart(2, '0')} /{' '}
                                {String(GALLERY.length).padStart(2, '0')}
                            </span>
                        </figcaption>
                    </figure>

                    <button
                        className="lightbox__nav is-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            step(1);
                        }}
                        aria-label="Next photo"
                    >
                        <ChevronRight width={22} height={22} />
                    </button>
                </div>
            )}
        </section>
    );
}
