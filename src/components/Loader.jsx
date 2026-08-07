import React, { useEffect, useState } from 'react';
import './Loader.css';

/**
 * Two-beat intro: a hairline draws under the name, then the whole panel
 * lifts away. Kept under 1.4s — an intro that outstays its welcome reads
 * as slow, not considered.
 */
export default function Loader({ onDone }) {
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const lift = setTimeout(() => setLeaving(true), 1100);
        const done = setTimeout(onDone, 1900);
        return () => {
            clearTimeout(lift);
            clearTimeout(done);
        };
    }, [onDone]);

    return (
        <div className={`loader ${leaving ? 'is-leaving' : ''}`}>
            <div className="loader__content">
                <span className="loader__name">Amir Kiadi</span>
                <span className="loader__rule" />
                <span className="label loader__meta">Portfolio — 2026</span>
            </div>
        </div>
    );
}
