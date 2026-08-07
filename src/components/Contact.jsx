import React, { useState } from 'react';
import './Contact.css';
import SectionHead from './SectionHead';
import { LINKS } from '../data/site';
import { HAS_FORM_BACKEND, WEB3FORMS_ENDPOINT, WEB3FORMS_KEY } from '../config';
import { ArrowRight, Spinner } from './Icons';

const EMPTY = { name: '', email: '', message: '' };
const SENT_KEY = 'contactSent';

export default function Contact() {
    const [values, setValues] = useState(EMPTY);
    const [status, setStatus] = useState('idle'); // idle | sending | error
    const [error, setError] = useState('');

    // Once a message lands, the form stays closed for the rest of the session
    // so nobody wonders whether it went through and sends the same note twice.
    const [sent, setSent] = useState(
        () => sessionStorage.getItem(SENT_KEY) === '1'
    );

    const update = (field) => (event) =>
        setValues((v) => ({ ...v, [field]: event.target.value }));

    const submit = async (event) => {
        event.preventDefault();
        if (status === 'sending') return;

        // Honeypot: real people never fill a field they cannot see.
        if (event.target.botcheck?.checked) return;

        // No key configured yet — hand off to the visitor's mail client so the
        // form still does something useful.
        if (!HAS_FORM_BACKEND) {
            const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
            const body = encodeURIComponent(`${values.message}\n\nFrom ${values.name} (${values.email})`);
            window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
            return;
        }

        setStatus('sending');
        setError('');

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `Portfolio enquiry from ${values.name}`,
                    from_name: 'amirkiadi.com',
                    ...values,
                }),
            });

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Something went wrong.');
            }

            sessionStorage.setItem(SENT_KEY, '1');
            setValues(EMPTY);
            setStatus('idle');
            setSent(true);
        } catch (err) {
            setStatus('error');
            setError(err.message || 'Could not send. Try email instead.');
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <SectionHead eyebrow="Contact" title="Let’s build something.">
                    Open to internships, new grad roles, and side projects worth staying
                    up for. I read everything that lands here.
                </SectionHead>

                <div className="contact__grid">
                    {sent ? (
                        <div className="contact__done" role="status">
                            <span className="contact__check" aria-hidden="true">
                                <svg viewBox="0 0 52 52">
                                    <circle cx="26" cy="26" r="24" />
                                    <path d="M15 27l8 8 15-16" />
                                </svg>
                            </span>
                            <h3 className="contact__doneTitle">Thank you.</h3>
                            <p className="contact__doneText">
                                Your message is on its way. I’ll get back to you
                                shortly.
                            </p>
                        </div>
                    ) : (
                    <form className="contact__form reveal" onSubmit={submit} noValidate>
                        {/* Hidden from people, irresistible to bots */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            className="contact__honeypot"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <div className="field">
                            <label className="label" htmlFor="cf-name">
                                Name
                            </label>
                            <input
                                id="cf-name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                placeholder="Your name"
                                value={values.name}
                                onChange={update('name')}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="cf-email">
                                Email
                            </label>
                            <input
                                id="cf-email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="you@company.com"
                                value={values.email}
                                onChange={update('email')}
                            />
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="cf-message">
                                Message
                            </label>
                            <textarea
                                id="cf-message"
                                name="message"
                                rows={5}
                                required
                                placeholder="What are you working on?"
                                value={values.message}
                                onChange={update('message')}
                            />
                        </div>

                        <div className="contact__submit">
                            <button
                                className="btn btn--solid"
                                type="submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' && <Spinner />}
                                {status === 'sending' ? 'Sending' : 'Send message'}
                                {status === 'sending' ? null : <ArrowRight />}
                            </button>

                            <p
                                className="contact__status"
                                role="status"
                                aria-live="polite"
                            >
                                {status === 'error' && error}
                            </p>
                        </div>
                    </form>
                    )}

                    <aside className="contact__aside reveal" style={{ '--reveal-delay': '90ms' }}>
                        <span className="label">Direct</span>
                        <ul className="contact__list">
                            <li>
                                <a className="link" href={`mailto:${LINKS.email}`}>
                                    {LINKS.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    className="link"
                                    href={`tel:${LINKS.phone.replace(/-/g, '')}`}
                                >
                                    {LINKS.phone}
                                </a>
                            </li>
                        </ul>

                        <span className="label contact__elsewhere">Elsewhere</span>
                        <ul className="contact__list">
                            <li>
                                <a className="link" href={LINKS.github} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a className="link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
}
