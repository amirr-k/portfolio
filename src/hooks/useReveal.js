import { useEffect } from 'react';

/**
 * Reveals every `.reveal` inside the document once as it enters the viewport.
 * The original site re-hid elements on exit, which made scrolling back up feel
 * broken — content should stay revealed once you've seen it.
 */
export default function useReveal() {
    useEffect(() => {
        const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
        if (!nodes.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    });
}
