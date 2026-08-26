import { Router } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESUME_PATH = path.join(__dirname, '..', 'assets', 'resume.pdf');

const router = Router();

router.get('/', (req, res) => {
  if (!fs.existsSync(RESUME_PATH)) {
    return res.status(404).json({
      message: 'Resume file not found on the server. Add your PDF at server/assets/resume.pdf.',
    });
  }

  res.download(RESUME_PATH, 'Aravinth-Kumar-V-Resume.pdf');
});

export default router;
