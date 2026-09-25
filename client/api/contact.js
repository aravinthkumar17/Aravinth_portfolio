import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let cachedTransporter;

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

  return cachedTransporter;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, message, company } = req.body ?? {};

  // Honeypot: real users never fill a field named "company" on this form.
  if (company) {
    return res.status(400).json({ message: 'Invalid submission.' });
  }

  const errors = {};
  if (typeof name !== 'string' || !name.trim()) errors.name = 'Name is required.';
  else if (name.trim().length > 120) errors.name = 'Name is too long.';

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) errors.email = 'A valid email is required.';

  if (typeof message !== 'string' || message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  else if (message.trim().length > 4000) errors.message = 'Message is too long.';

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ message: 'Please correct the highlighted fields.', errors });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();
  const to = process.env.CONTACT_TO_EMAIL || 'aravindhezekiel17@gmail.com';
  const transporter = getTransporter();

  try {
    if (transporter) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        replyTo: cleanEmail,
        to,
        subject: `New portfolio message from ${cleanName}`,
        text: `From: ${cleanName} <${cleanEmail}>\n\n${cleanMessage}`,
        html: `<p><strong>From:</strong> ${cleanName} (${cleanEmail})</p><p>${cleanMessage.replace(/\n/g, '<br />')}</p>`,
      });
    } else {
      console.log('[contact] SMTP not configured, logging message instead:', { name: cleanName, email: cleanEmail, message: cleanMessage });
    }

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[contact] failed to send message:', err);
    return res.status(502).json({ message: 'Could not deliver your message right now. Please email directly instead.' });
  }
}
