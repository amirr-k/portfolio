import React from 'react';

/**
 * Hand-rolled icon set. Uniform 24px box, 1.5 stroke, currentColor — a stock
 * icon library would drag in a dependency and mismatched stroke weights.
 */
const base = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
};

export const ArrowUpRight = (props) => (
    <svg {...base} {...props}>
        <path d="M7 17 17 7M8 7h9v9" />
    </svg>
);

export const ArrowRight = (props) => (
    <svg {...base} {...props}>
        <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
);

export const Close = (props) => (
    <svg {...base} {...props}>
        <path d="M6 6l12 12M18 6L6 18" />
    </svg>
);

export const ChevronLeft = (props) => (
    <svg {...base} {...props}>
        <path d="M15 5l-7 7 7 7" />
    </svg>
);

export const ChevronRight = (props) => (
    <svg {...base} {...props}>
        <path d="M9 5l7 7-7 7" />
    </svg>
);

export const Spinner = (props) => (
    <svg {...base} {...props} className="spin">
        <path d="M12 3a9 9 0 1 0 9 9" />
    </svg>
);
