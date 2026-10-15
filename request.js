const MAX_CONTENT_LENGTH = 10_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s.-]{7,30}$/;
const nodemailer = require('nodemailer');

const respond = (res, status, payload) => res.status(status).json(payload);

const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return respond(res, 405, { error: 'Method not allowed.' });
  }

  const contentLength = Number(req.headers['content-length'] || 0);
  if (contentLength > MAX_CONTENT_LENGTH) {
    return respond(res, 413, { error: 'The request is too large.' });
  }

  const contentType = req.headers['content-type'] || '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return respond(res, 415, { error: 'Send the request as JSON.' });
  }

  let body;
  try {
    body = req.body;
  } catch {
    return respond(res, 400, { error: 'The request data is invalid.' });
  }

  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return respond(res, 400, { error: 'The request data is invalid.' });
    }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return respond(res, 400, { error: 'The request data is invalid.' });
  }

  if (Buffer.byteLength(JSON.stringify(body), 'utf8') > MAX_CONTENT_LENGTH) {
    return respond(res, 413, { error: 'The request is too large.' });
  }

  if (body.website !== undefined && (typeof body.website !== 'string' || body.website.trim())) {
    return respond(res, 400, { error: 'The request could not be verified.' });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > 100 || /[\r\n]/.test(name)) {
    return respond(res, 400, { error: 'Enter a valid name (up to 100 characters).' });
  }
  if (!PHONE_PATTERN.test(phone)) {
    return respond(res, 400, { error: 'Enter a valid phone number.' });
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return respond(res, 400, { error: 'Enter a valid email address.' });
  }
  if (!message || message.length > 3000) {
    return respond(res, 400, { error: 'Add a message of up to 3000 characters.' });
  }

  const gmailUser = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
  const recipient = process.env.REQUEST_TO_EMAIL || 'sondos02sayed@gmail.com';
  if (!gmailUser || !appPassword || !recipient) {
    console.error('Request form is missing Gmail SMTP environment configuration.');
    return respond(res, 500, { error: 'The request form is not configured yet. Please try again later.' });
  }

  const text = [
    'NEW PORTFOLIO MESSAGE',
    'Sondos Alsayed Mahmoud | Railway Engineering Technology Student',
    '',
    `NAME: ${name}`,
    `PHONE: ${phone}`,
    `EMAIL: ${email}`,
    '',
    'MESSAGE',
    message
  ].join('\n');

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  const safeNameUpper = escapeHtml(name.toUpperCase());
  const safePhoneLink = encodeURIComponent(phone.replace(/[^\d+]/g, ''));
  const receivedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date());
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New message from ${safeName}</title>
</head>
<body style="margin:0;padding:0;background-color:#100f0b;font-family:Arial,Helvetica,sans-serif;color:#f5f1e6;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">New portfolio request from ${safeName}. Contact details and message inside.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#100f0b;">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;border-collapse:separate;border-spacing:0;background-color:#17140e;border:1px solid #51452d;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:22px 24px;background-color:#000000;border-bottom:2px solid #ffc857;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">
                <tr>
                  <td width="52" valign="middle" style="width:52px;">
                    <table role="presentation" width="40" height="40" cellspacing="0" cellpadding="0" border="0" style="width:40px;height:40px;border:1px solid #51452d;border-radius:10px;">
                      <tr><td align="center" valign="middle" style="color:#ffc857;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;letter-spacing:1px;">SA</td></tr>
                    </table>
                  </td>
                  <td valign="middle" style="padding-left:12px;word-break:break-word;">
                    <div style="color:#f5f1e6;font-size:13px;line-height:1.4;font-weight:bold;letter-spacing:.8px;">SONDOS ALSAYED MAHMOUD</div>
                    <div style="padding-top:4px;color:#c1baa8;font-size:10px;line-height:1.5;letter-spacing:.5px;">RAILWAY ENGINEERING TECHNOLOGY STUDENT</div>
                  </td>
                </tr>
              </table>
              <div style="padding:12px 0 0 52px;color:#ffc857;font-size:9px;line-height:1.4;font-weight:bold;letter-spacing:1.5px;">PORTFOLIO CONTACT</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 24px 8px;">
              <div style="color:#ffc857;font-size:10px;line-height:1.5;font-weight:bold;letter-spacing:1.7px;">NEW REQUEST RECEIVED</div>
              <h1 style="margin:10px 0 0;color:#f5f1e6;font-family:Arial,Helvetica,sans-serif;font-size:27px;line-height:1.25;font-weight:600;letter-spacing:-.4px;">A new message has arrived.</h1>
              <p style="margin:12px 0 0;color:#c1baa8;font-size:14px;line-height:1.7;"><strong style="color:#f5f1e6;">${safeName}</strong> contacted you through your portfolio. Their contact details and message are below.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border:1px solid #51452d;border-radius:10px;background-color:#100f0b;">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #51452d;color:#ffc857;font-size:10px;line-height:1.4;font-weight:bold;letter-spacing:1.4px;">SENDER DETAILS</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px 4px;color:#c1baa8;font-size:10px;line-height:1.4;letter-spacing:1px;">NAME</td>
                </tr>
                <tr>
                  <td style="padding:0 16px 13px;color:#f5f1e6;font-size:14px;line-height:1.6;font-weight:bold;word-break:break-word;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:0 16px 4px;color:#c1baa8;font-size:10px;line-height:1.4;letter-spacing:1px;">EMAIL</td>
                </tr>
                <tr>
                  <td style="padding:0 16px 13px;color:#f5f1e6;font-size:14px;line-height:1.6;word-break:break-all;"><a href="mailto:${safeEmail}" style="color:#ffc857;text-decoration:underline;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:0 16px 4px;color:#c1baa8;font-size:10px;line-height:1.4;letter-spacing:1px;">PHONE</td>
                </tr>
                <tr>
                  <td style="padding:0 16px 15px;color:#f5f1e6;font-size:14px;line-height:1.6;word-break:break-word;"><a href="tel:${safePhoneLink}" style="color:#ffc857;text-decoration:underline;">${safePhone}</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 24px;">
              <div style="padding:0 0 10px;color:#ffc857;font-size:10px;line-height:1.5;font-weight:bold;letter-spacing:1.3px;">MESSAGE</div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-left:3px solid #ffc857;background-color:#100f0b;">
                <tr><td style="padding:16px;color:#f5f1e6;font-size:14px;line-height:1.8;word-break:break-word;">${safeMessage}</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="left" style="padding:0 24px 28px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;">
                <tr>
                  <td align="center" bgcolor="#ffc857" style="border-radius:10px;">
                    <a href="mailto:${safeEmail}" style="display:inline-block;padding:14px 20px;color:#100f0b;font-size:11px;line-height:1.4;font-weight:bold;letter-spacing:.7px;text-decoration:none;">REPLY TO SENDER &nbsp; &#8599;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;border-top:1px solid #51452d;background-color:#000000;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;">
                <tr>
                  <td style="color:#c1baa8;font-size:10px;line-height:1.7;">Sent from the contact form on Sondos's portfolio.<br>Received ${receivedDate}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: appPassword
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000
  });

  try {
    await transporter.sendMail({
      from: {
        name: 'Sondos Portfolio',
        address: gmailUser
      },
      to: recipient,
      replyTo: email,
      subject: `New Request from ${name}`,
      text,
      html
    });
  } catch (error) {
    console.error('Gmail SMTP could not send a portfolio request.', {
      code: error.code,
      responseCode: error.responseCode,
      command: error.command
    });
    return respond(res, 502, { error: 'The request could not be emailed. Please try again later.' });
  }

  return respond(res, 201, { ok: true });
};
