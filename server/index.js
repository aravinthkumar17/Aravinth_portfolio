import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import contactRouter from './routes/contact.js';
import resumeRouter from './routes/resume.js';

const app = express();
const PORT = process.env.PORT || 4000;
const ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(helmet());
app.use(cors({ origin: ORIGIN }));
app.use(compression());
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactRouter);
app.use('/api/resume', resumeRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
