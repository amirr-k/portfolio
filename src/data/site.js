import firstCar from '../assets/first-car.jpg';
import weightlifting from '../assets/weightlifting.jpg';
import noahPuppy from '../assets/noah-puppy.jpg';
import noahGrown from '../assets/noah-grown.jpg';
import twinPeaks2023 from '../assets/twin-peaks-2023.jpg';
import firstPhoto from '../assets/first-photo.jpg';
import cityFriends from '../assets/city-friends.jpg';
import twinPeaks2024 from '../assets/twin-peaks-2024.jpg';
import bear from '../assets/bear.jpg';
import childhood from '../assets/childhood.jpg';

export const NAV_SECTIONS = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
];

export const ROLES = [
    'Software Engineer',
    'Computer Engineer',
    'Systems Programmer',
    'Researcher',
    'Athlete',
];

export const LINKS = {
    github: 'https://github.com/amirr-k',
    linkedin: 'https://linkedin.com/in/amirr-k',
    email: 'amir.kiadi@outlook.com',
    phone: '650-224-9677',
};

export const STATS = [
    { value: 'UC San Diego', label: 'B.S. + M.S. Computer Engineering' },
    { value: '3.9 / 4.0', label: 'GPA' },
    { value: 'San Diego, California', label: 'Location' },
];

export const STACK = [
    'Go',
    'C / C++',
    'Python',
    'Java',
    'TypeScript',
    'React',
    'Next.js',
    'FastAPI',
    'PostgreSQL',
    'PyTorch',
    'Kafka',
    'Redis',
    'Docker',
    'AWS',
];

/* Roles are summarised at a high level and linked out — nothing lifted
   verbatim from the résumé. */
export const EXPERIENCE = [
    {
        company: 'IBM',
        role: 'Software Engineer Intern',
        period: 'Jun 2026 — Present',
        summary:
            'Working on machine learning for database query performance, plus internal agentic tooling that takes manual review work off engineers.',
        tags: ['PyTorch', 'FastMCP', 'Next.js'],
        href: 'https://www.ibm.com',
    },
    {
        company: 'IEEE — RoboCup',
        role: 'Software Engineer',
        period: 'Oct 2025 — May 2026',
        summary:
            'Firmware and communications for competitive autonomous robots: control loops in C, a real-time tuning pipeline, and hardened network handling.',
        tags: ['C', 'C++', 'Protobuf'],
        href: 'https://ieeeatucsd.org/',
    },
    {
        company: 'SEE Lab, UC San Diego',
        role: 'Machine Learning Research Assistant',
        period: 'Jan 2025 — Aug 2025',
        summary:
            'Adversarial robustness research, building the evaluation and tuning infrastructure that made large experiment sweeps tractable.',
        tags: ['Python', 'PyTorch', 'Research'],
        href: 'https://seelab.ucsd.edu/',
    },
];

/* `image` is optional. Projects without artwork fall back to a generated
   typographic panel rather than a placeholder screenshot. */
export const PROJECTS = [
    {
        index: '01',
        title: 'Real Time Delivery Dispatch Engine',
        year: '2026',
        summary:
            'A live dispatch system that assigns drivers to orders as conditions change, routes around road closures on the fly, and streams the whole fleet to a map in real time.',
        stack: ['Go', 'React', 'PostgreSQL', 'WebSockets'],
        demo: 'https://amirr-k.github.io/dispatch-lab/',
        source: 'https://github.com/amirr-k/dispatch-lab',
    },
    {
        index: '02',
        title: 'Cloud-Native Distributed Build Accelerator',
        year: '2026',
        summary:
            'A distributed build system that figures out the smallest set of work a change actually requires, spreads it across workers, and keeps going when those workers die.',
        stack: ['Java', 'Spring Boot', 'Kafka', 'Redis'],
        demo: 'https://amirr-k.github.io/forge-ci/',
        source: 'https://github.com/amirr-k/forge-ci',
    },
    {
        index: '03',
        title: 'Blackjack Reinforcement Learning Agent',
        year: '2025',
        summary:
            'An agent that learns Blackjack from scratch until it plays near-optimally, with the simulation core compiled to WebAssembly so it runs entirely in the browser.',
        stack: ['C++', 'Python', 'WebAssembly'],
        demo: 'https://blackjack-rl-agent.vercel.app/',
        source: 'https://github.com/amirr-k/optimized-blackjack',
    },
];

/* Earlier work, kept as a compact index rather than full cards. */
export const ARCHIVE = [
    {
        title: 'amirkiadi.com',
        year: '2026',
        note: 'This site, built in React with no UI framework',
        href: 'https://github.com/amirr-k/portfolio',
    },
    {
        title: 'Optimized UNIX Shell',
        year: '2024',
        note: 'POSIX process management in C',
        href: 'https://github.com/amirr-k/Optimized-Unix-Shell',
    },
    {
        title: 'UCMe',
        year: '2025',
        note: 'Full-stack student matchmaking platform',
        href: 'https://github.com/amirr-k/UCMe',
    },
    {
        title: 'Voice Controlled AWS',
        year: '2025',
        note: 'Speech-driven EC2 control via Lambda',
        href: 'https://github.com/amirr-k/Voice-Controlled-AWS',
    },
];

/* `focus` sets object-position for photos whose subject sits away from the
   centre and would otherwise be cropped out of the tile. */
export const GALLERY = [
    {
        image: firstCar,
        title: 'First Car',
        caption: '70,000 miles together and counting.',
        span: 'wide',
        focus: '50% 72%',
    },
    {
        image: weightlifting,
        title: 'Weightlifting',
        caption: 'Four years in and still showing up.',
        span: 'tall',
    },
    {
        image: noahPuppy,
        title: "Man's Best Friend",
        caption: 'Noah, as a puppy.',
        span: 'tall',
    },
    {
        image: twinPeaks2023,
        title: 'Twin Peaks',
        caption: "New Year's Eve, 2023.",
        span: 'tall',
    },
    {
        image: firstPhoto,
        title: 'First Photo',
        caption:
            'The oldest picture in my camera roll. August 2019, the day I moved to California.',
        span: 'wide',
    },
    {
        image: cityFriends,
        title: 'Adventures in the City',
        caption: 'With my closest friends from high school.',
    },
    {
        image: noahGrown,
        title: "Where'd the Time Go",
        caption: 'Noah today, at five years old.',
    },
    {
        image: twinPeaks2024,
        title: 'Twin Peaks, Again',
        caption: "New Year's Eve, 2024. Seems like I've started a tradition...",
        span: 'tall',
    },
    {
        image: bear,
        title: 'Bear',
        caption: 'Hugging Bearl before departing for the summer.',
        span: 'tall',
    },
    {
        image: childhood,
        title: 'Childhood',
        caption: 'My favorite photo in the world.',
        span: 'tall',
    },
];
