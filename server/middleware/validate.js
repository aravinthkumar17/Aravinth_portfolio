const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(req, res, next) {
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

  req.body = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  next();
}
