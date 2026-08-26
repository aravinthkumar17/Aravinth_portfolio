import { useId, useState } from 'react';
import Reveal from '../ui/Reveal.jsx';
import { profile } from '../../data/resume.js';
import { sendContactMessage, resumeDownloadUrl } from '../../lib/api.js';

const initialState = { name: '', email: '', message: '' };

const quickFacts = [
  { label: 'Location', value: profile.location },
  { label: 'Availability', value: 'Junior / Mid Front-End' },
  { label: 'Reply time', value: 'Within 1–2 days' },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please add a short message.';
  else if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const formId = useId();

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus('error');
      setStatusMessage('Please fix the highlighted fields.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');
    try {
      await sendContactMessage(values);
      setStatus('success');
      setStatusMessage("Thanks — your message is in! I'll reply within a day or two.");
      setValues(initialState);
    } catch (err) {
      setStatus('error');
      setStatusMessage(err.message || 'Could not send your message. Please email me directly instead.');
    }
  };

  return (
    <section id="contact" className="x-section" aria-labelledby="contact-heading">
      <div className="x-container--wide">
        <Reveal as="div" className="x-banner">
          <div className="contact-banner__grid">
            <div className="contact-banner__col">
              <h2 id="contact-heading" className="contact-banner__heading">
                Open to roles. <em>Let's talk.</em>
              </h2>
              <p className="contact-banner__desc">
                Junior/mid front-end positions — reach out directly and I'll reply within a day or two.
              </p>
              <div className="x-cluster">
                <a className="x-btn x-btn--on-accent" href={resumeDownloadUrl()} download>
                  Download CV
                </a>
                <a
                  className="x-btn x-btn--on-accent"
                  href={`https://wa.me/${profile.phone.replace(/[\s+]/g, '')}?text=${encodeURIComponent(
                    "Hi Aravinth, I'd like to talk about a role.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Call me
                </a>
              </div>
              {/* <p className="contact-banner__micro">
                Prefer a document?{' '}
                <a href={resumeDownloadUrl()} download>
                  Download résumé →
                </a>
              </p> */}

              <dl className="contact-banner__facts">
                {quickFacts.map((fact) => (
                  <div className="contact-banner__fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="contact-banner__col contact-banner__col--form">
              <h2 className="contact-banner__heading">
                Send a <em>quick note.</em>
              </h2>
              <p className="contact-banner__desc">Tell me about the role, and I'll get back to you.</p>

              <form className="contact-banner__form" onSubmit={handleSubmit} noValidate>
                <div className="contact-banner__field">
                  <label htmlFor={`${formId}-name`} className="visually-hidden">
                    Name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  />
                  {errors.name && (
                    <small role="alert" id={`${formId}-name-error`}>
                      {errors.name}
                    </small>
                  )}
                </div>

                <div className="contact-banner__field">
                  <label htmlFor={`${formId}-email`} className="visually-hidden">
                    Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={values.email}
                    onChange={handleChange('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  />
                  {errors.email && (
                    <small role="alert" id={`${formId}-email-error`}>
                      {errors.email}
                    </small>
                  )}
                </div>

                <div className="contact-banner__field">
                  <label htmlFor={`${formId}-message`} className="visually-hidden">
                    Message
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    placeholder="What's the role?"
                    value={values.message}
                    onChange={handleChange('message')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                  />
                  {errors.message && (
                    <small role="alert" id={`${formId}-message-error`}>
                      {errors.message}
                    </small>
                  )}
                </div>

                <button type="submit" className="x-btn x-btn--on-accent contact-banner__submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>

                <p role="status" aria-live="polite" className="contact-banner__status" data-status={status === 'error' ? 'error' : 'default'}>
                  {statusMessage}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
