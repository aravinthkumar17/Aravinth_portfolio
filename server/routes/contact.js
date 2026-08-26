import { Router } from 'express';
import nodemailer from 'nodemailer';
import { validateContactPayload } from '../middleware/validate.js';
import { contactRateLimiter } from '../middleware/rateLimit.js';

const router = Router();

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

router.post('/', contactRateLimiter, validateContactPayload, async (req, res) => {
  const { name, email, message } = req.body;
  const to = process.env.CONTACT_TO_EMAIL || 'aravindhezekiel17@gmail.com';
  const transporter = getTransporter();

  try {
    if (transporter) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br />')}</p>`,
      });
    } else {
      // No SMTP configured (e.g. local dev) — log instead of failing the request.
      console.log('[contact] SMTP not configured, logging message instead:', { name, email, message });
    }

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[contact] failed to send message:', err);
    res.status(502).json({ message: 'Could not deliver your message right now. Please email directly instead.' });
  }
});

export default router;
