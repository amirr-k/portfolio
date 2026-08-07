/**
 * Contact form delivery.
 *
 * GitHub Pages serves static files only, so the form posts straight from the
 * visitor's browser to Web3Forms, which sends the mail. Nothing runs on our
 * host. The key is public by design and only authorises "email Amir" — the
 * honeypot field in the form is what keeps bots out.
 *
 * Get a key in about a minute at https://web3forms.com — enter your email,
 * they send you the key, paste it below.
 *
 * Until a real key is set, the form degrades to opening the visitor's mail
 * client with the message pre-filled, so it is never dead.
 */
export const WEB3FORMS_KEY =
    process.env.REACT_APP_WEB3FORMS_KEY || 'PASTE_YOUR_WEB3FORMS_KEY_HERE';

export const HAS_FORM_BACKEND =
    Boolean(WEB3FORMS_KEY) && WEB3FORMS_KEY !== 'PASTE_YOUR_WEB3FORMS_KEY_HERE';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
