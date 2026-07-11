// ─── Simple in-memory rate limiter (per-IP, resets per cold start) ────────────
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 3;       // max submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

// ─── HTML entity sanitizer — prevents XSS injection in email body ─────────────
function sanitize(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// ─── Email format validation ──────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  // ── Security headers ────────────────────────────────────────────────────────
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // ── Strict CORS — only allow requests from the actual portfolio domain ──────
  const allowedOrigins = [
    'https://sreehari-academic-research-portfoli.vercel.app',
    'http://localhost:5173',
    'http://localhost:4173',
  ];
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ── Preflight ───────────────────────────────────────────────────────────────
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // ── Rate limiting (per source IP) ───────────────────────────────────────────
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      error: 'Too many requests. Please wait an hour before trying again.',
    });
  }

  // ── Extract & type-check body ───────────────────────────────────────────────
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message.' });
  }

  // ── Input length limits (prevent large payload abuse) ──────────────────────
  if (typeof name !== 'string' || name.trim().length > 100) {
    return res.status(400).json({ error: 'Name must be a string of 100 characters or fewer.' });
  }
  if (typeof email !== 'string' || email.trim().length > 254) {
    return res.status(400).json({ error: 'Email must be 254 characters or fewer.' });
  }
  if (typeof message !== 'string' || message.trim().length > 5000) {
    return res.status(400).json({ error: 'Message must be 5000 characters or fewer.' });
  }

  // ── Email format validation (server-side, bypass-proof) ────────────────────
  if (!EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  // ── API key guard ───────────────────────────────────────────────────────────
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not configured in environment variables.');
    return res.status(500).json({ error: 'Email service is not configured. Please contact directly.' });
  }

  // ── Sanitize all user inputs before embedding in HTML ──────────────────────
  const safeName = sanitize(name.trim());
  const safeEmail = sanitize(email.trim());
  const safeMessage = sanitize(message.trim());

  try {
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'sreeharitm11@gmail.com';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: receiver,
        subject: `Portfolio inquiry from ${safeName}`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f9fa; border-radius: 12px;">
            <div style="background: #ffffff; border-radius: 10px; padding: 28px; border: 1px solid #e9ecef;">
              <h2 style="margin: 0 0 20px; color: #0d0d0f; font-size: 20px;">
                📬 New Portfolio Inquiry
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #6c757d; font-size: 13px; width: 80px; vertical-align: top;">Name</td>
                  <td style="padding: 10px 0; color: #212529; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #6c757d; font-size: 13px; vertical-align: top;">Email</td>
                  <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #4A90A4;">${safeEmail}</a></td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #dee2e6; margin: 20px 0;" />
              <p style="margin: 0 0 10px; color: #6c757d; font-size: 13px;">Message</p>
              <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; color: #212529; white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${safeMessage}</div>
            </div>
            <p style="text-align: center; color: #adb5bd; font-size: 12px; margin-top: 20px;">Sent via sreehari-academic-research-portfoli.vercel.app</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[contact] Resend API error:', data);
      return res.status(502).json({ error: 'Email delivery failed. Please try again shortly.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[contact] Unexpected server error:', error?.message);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
