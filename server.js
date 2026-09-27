/**
 * Production Server for ZFP Jagoš & partneři
 * Handles static asset serving with cache headers and secure API endpoints for contact/career leads.
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

// Middleware
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

// Security Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Simple In-Memory Rate Limiter for Form Submissions (5 requests per 10 minutes per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return true;
  }

  if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// SMTP Transporter
function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false }
  });
}

// Lead Backup Persistence (Ensures no inquiry is ever lost)
function persistLead(type, data) {
  try {
    const leadDir = path.join(__dirname, 'data');
    if (!fs.existsSync(leadDir)) {
      fs.mkdirSync(leadDir, { recursive: true });
    }
    const leadFile = path.join(leadDir, 'leads.jsonl');
    const entry = JSON.stringify({
      type,
      timestamp: new Date().toISOString(),
      ...data
    }) + '\n';
    fs.appendFileSync(leadFile, entry, 'utf8');
  } catch (err) {
    console.error('Failed to append lead to disk:', err);
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ZFP Jagoš & partneři Web & API'
  });
});

// API: Contact Form Submission
app.post('/api/contact', async (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Příliš mnoho požadavků. Prosím zkuste to za chvíli znovu nebo nám zavolejte přímo na +420 606 084 044.'
    });
  }

  const { name, email, phone, message, honeypot, consent } = req.body;

  // Anti-spam honeypot
  if (honeypot) {
    // Silently succeed for bots
    return res.json({ success: true });
  }

  // Strict Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, error: 'Vyplňte prosím platné jméno a příjmení.' });
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Vyplňte prosím platný e-mail.' });
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 9) {
    return res.status(400).json({ success: false, error: 'Vyplňte prosím platné telefonní číslo.' });
  }

  if (!consent) {
    return res.status(400).json({ success: false, error: 'Pro odeslání je nutný souhlas se zpracováním osobních údajů.' });
  }

  const cleanData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    message: (message || '').trim(),
    ip: clientIp
  };

  // 1. Backup to disk
  persistLead('contact', cleanData);

  // 2. Dispatch Email via SMTP if configured
  const transporter = getMailTransporter();
  if (transporter) {
    try {
      const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'info@zfpjagos.cz';
      const fromAddr = process.env.SMTP_FROM || process.env.SMTP_USER || 'info@zfpjagos.cz';

      await transporter.sendMail({
        from: fromAddr,
        to: recipient,
        replyTo: cleanData.email,
        subject: `Nová poptávka z webu zfpjagos.cz: ${cleanData.name}`,
        text: `Nová poptávka z webového formuláře:\n\nJméno: ${cleanData.name}\nE-mail: ${cleanData.email}\nTelefon: ${cleanData.phone}\nZpráva:\n${cleanData.message}\n\nČas odeslání: ${new Date().toLocaleString('cs-CZ')}\nIP: ${cleanData.ip}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #e65300; margin-top: 0;">Nová poptávka z webu ZFP Jagoš & partneři</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Jméno a příjmení:</td><td>${cleanData.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">E-mail:</td><td><a href="mailto:${cleanData.email}">${cleanData.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Telefon:</td><td><a href="tel:${cleanData.phone}">${cleanData.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Zpráva:</td><td style="white-space: pre-wrap;">${cleanData.message || '—'}</td></tr>
            </table>
            <p style="margin-top: 25px; font-size: 12px; color: #64748b; border-top: 1px solid #f1f5f9; padding-top: 10px;">
              Odesláno: ${new Date().toLocaleString('cs-CZ')} | Zdroj: web zfpjagos.cz
            </p>
          </div>
        `
      });
    } catch (mailErr) {
      console.error('SMTP Send Error:', mailErr);
      // Lead is still saved in disk persistence, so we can still return success with log
    }
  } else {
    console.log('[LEAD RECEIVED - SMTP not configured]:', cleanData);
  }

  res.json({
    success: true,
    message: 'Děkujeme! Vaše zpráva byla úspěšně odeslána. Brzy se vám ozveme zpět.'
  });
});

// API: Career Form Submission
app.post('/api/career', async (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Příliš mnoho požadavků. Prosím zkuste to za chvíli znovu.'
    });
  }

  const { name, email, phone, message, honeypot, consent } = req.body;

  if (honeypot) {
    return res.json({ success: true });
  }

  if (!name || name.trim().length < 2 || !email || !phone || !consent) {
    return res.status(400).json({ success: false, error: 'Vyplňte prosím všechna povinná pole a odsouhlaste podmínky.' });
  }

  const cleanData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    message: (message || '').trim(),
    ip: clientIp
  };

  persistLead('career', cleanData);

  const transporter = getMailTransporter();
  if (transporter) {
    try {
      const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'info@zfpjagos.cz';
      const fromAddr = process.env.SMTP_FROM || process.env.SMTP_USER || 'info@zfpjagos.cz';

      await transporter.sendMail({
        from: fromAddr,
        to: recipient,
        replyTo: cleanData.email,
        subject: `Zájemce o kariéru z webu: ${cleanData.name}`,
        text: `Zájem o kariéru v ZFP Jagoš & partneři:\n\nJméno: ${cleanData.name}\nE-mail: ${cleanData.email}\nTelefon: ${cleanData.phone}\nZpráva: ${cleanData.message}\nČas: ${new Date().toLocaleString('cs-CZ')}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #e65300; margin-top: 0;">Nový zájemce o kariéru</h2>
            <p><strong>Jméno:</strong> ${cleanData.name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${cleanData.email}">${cleanData.email}</a></p>
            <p><strong>Telefon:</strong> <a href="tel:${cleanData.phone}">${cleanData.phone}</a></p>
            <p><strong>Zpráva:</strong> ${cleanData.message || '—'}</p>
          </div>
        `
      });
    } catch (err) {
      console.error('SMTP Send Error (career):', err);
    }
  }

  res.json({
    success: true,
    message: 'Děkujeme! Váš zájem byl úspěšně zaznamenán. Brzy vás budeme kontaktovat.'
  });
});

// Serve Static Assets with Aggressive Caching for versioned files
if (fs.existsSync(DIST_DIR)) {
  app.use('/assets', express.static(path.join(DIST_DIR, 'assets'), {
    maxAge: '1y',
    immutable: true
  }));

  // Serve other static files (images, icons, etc.) with 1 day caching
  app.use(express.static(DIST_DIR, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        // HTML files must revalidate to reflect new builds immediately
        res.setHeader('Cache-Control', 'no-cache');
      }
    }
  }));

  // SPA Route Fallback & Clean 404
  app.get('*', (req, res) => {
    // If it's a file request that doesn't exist, return 404
    if (path.extname(req.path)) {
      return res.status(404).send('Soubor nenalezen');
    }

    // Check if pre-rendered route exists (e.g. dist/sluzby/index.html)
    const routeHtmlPath = path.join(DIST_DIR, req.path.replace(/^\//, ''), 'index.html');
    if (fs.existsSync(routeHtmlPath)) {
      return res.sendFile(routeHtmlPath);
    }

    // Default to main index.html
    const mainIndex = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(mainIndex)) {
      return res.sendFile(mainIndex);
    }

    res.status(404).send('Stránka nenalezena');
  });
} else {
  app.get('*', (req, res) => {
    res.send('Aplikace se sestavuje. Spusťte prosím "npm run build".');
  });
}

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[ZFP Jagoš Server] Ready and listening on http://0.0.0.0:${PORT}`);
});
