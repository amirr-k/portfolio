import { useEffect, useState } from 'react';

/**
 * Scroll spy. Returns the id of the section currently owning the viewport.
 * Picks the entry closest to the top of the viewport rather than the first
 * intersecting one, so fast scrolls don't leave the nav on a stale item.
 */
export default function useActiveSection(ids) {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top)
                    );
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}
