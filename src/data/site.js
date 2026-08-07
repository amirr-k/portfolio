import projectSite from '../resources2/project1.png';
import projectShell from '../resources2/shell.png';
import projectUCMe from '../resources2/UCMe.png';
import projectAWS from '../resources2/AWS.png';

import firstCar from '../resources2/FirstCar.jpg';
import athlete from '../resources2/Athlete.jpg';
import puppy from '../resources2/puppy.jpg';
import grownUp from '../resources2/GrownUp.jpg';
import sanFrancisco from '../resources2/sanFrancisco.jpg';
import sunset from '../resources2/sunset.jpg';
import sanFran2 from '../resources2/sanFran2.jpg';
import sanFran3 from '../resources2/IMG_3431.jpg';

export const NAV_SECTIONS = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
];

export const ROLES = [
    'Computer Engineer',
    'Software Engineer',
    'Developer',
    'Researcher',
    'Athlete',
];

export const LINKS = {
    github: 'https://github.com/amirr-k',
    linkedin: 'https://linkedin.com/in/amirr-k',
    resume: 'https://drive.google.com/file/d/1WnRczErYMbXcgzlKvXlrkqJR1Rzf_nTZ/view?usp=sharing',
    email: 'amir.kiadi@outlook.com',
};

export const STATS = [
    { value: 'UC San Diego', label: 'Computer Engineering' },
    { value: 'Bay Area', label: 'California' },
    { value: 'Since age 8', label: 'Writing code' },
];

export const STACK = [
    'Python',
    'C / C++',
    'Java',
    'React',
    'PostgreSQL',
    'FastAPI',
    'Git',
    'AWS',
];

export const PROJECTS = [
    {
        index: '01',
        title: 'amirkiadi.com',
        year: '2025',
        summary:
            'This site. Built from scratch in React with no UI framework — every component, transition and layout primitive is hand-written.',
        stack: ['React', 'CSS', 'GitHub Actions'],
        image: projectSite,
        href: 'https://github.com/amirr-k/portfolio',
    },
    {
        index: '02',
        title: 'Optimized UNIX Shell',
        year: '2024',
        summary:
            'A UNIX shell in C built on POSIX process management — fork, execvp, pipes and redirection. Passes 100% of 20+ test cases and runs past the original spec on performance.',
        stack: ['C', 'POSIX', 'Systems'],
        image: projectShell,
        href: 'https://github.com/amirr-k/Optimized-Unix-Shell',
    },
    {
        index: '03',
        title: 'UCMe',
        year: '2025',
        summary:
            'A full-stack matchmaking platform pairing students by interest and preference. JWT auth, relational modelling and a typed API layer end to end.',
        stack: ['React', 'FastAPI', 'PostgreSQL'],
        image: projectUCMe,
        href: 'https://github.com/amirr-k/UCMe',
    },
    {
        index: '04',
        title: 'Voice Controlled AWS',
        year: '2025',
        summary:
            'Start and stop EC2 instances by speaking. Speech hits Transcribe, intent routes through Lambda, and the whole round trip closes in 18 seconds.',
        stack: ['AWS Lambda', 'Transcribe', 'React'],
        image: projectAWS,
        href: 'https://github.com/amirr-k/Voice-Controlled-AWS',
    },
];

export const GALLERY = [
    {
        image: firstCar,
        title: 'First Car',
        caption: '70,000 miles together and counting.',
        span: 'wide',
    },
    {
        image: athlete,
        title: 'Weightlifting',
        caption: 'Four years in and still showing up.',
        span: 'tall',
    },
    {
        image: puppy,
        title: "Man's Best Friend",
        caption: 'Noah, as a puppy.',
    },
    {
        image: sanFrancisco,
        title: 'Twin Peaks',
        caption: "New Year's Eve, 2023.",
        span: 'tall',
    },
    {
        image: sunset,
        title: 'First Photo',
        caption: 'The oldest picture in my camera roll — August 2019, the day I moved to California.',
        span: 'wide',
    },
    {
        image: sanFran2,
        title: 'Adventures in the City',
        caption: 'With my closest friends from high school.',
    },
    {
        image: grownUp,
        title: "Where'd the Time Go",
        caption: 'Noah today, at five years old.',
    },
    {
        image: sanFran3,
        title: 'Twin Peaks, Again',
        caption: "New Year's Eve, 2024. This one is becoming a tradition.",
        span: 'tall',
    },
];
