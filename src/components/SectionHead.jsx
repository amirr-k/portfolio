import React from 'react';
import './SectionHead.css';

/**
 * Mono eyebrow over a large statement. Used by every section. `align="right"`
 * swings the whole header — eyebrow, title, and supporting line — to the far
 * margin.
 */
export default function SectionHead({ eyebrow, title, align = 'left', children }) {
    return (
        <header className={`sechead${align === 'right' ? ' sechead--right' : ''}`}>
            <div className="sechead__eyebrow reveal">
                <span className="label">{eyebrow}</span>
            </div>
            <h2 className="h1 sechead__title reveal" style={{ '--reveal-delay': '80ms' }}>
                {title}
            </h2>
            {children ? (
                <p className="lede sechead__sub reveal" style={{ '--reveal-delay': '160ms' }}>
                    {children}
                </p>
            ) : null}
        </header>
    );
}
