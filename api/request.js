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
  const safePhoneLink = encodeURIComponent(phone.replace(/[^\d+]/g, ''));
  const receivedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Africa/Cairo'
  }).format(new Date());
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New message from ${safeName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Inter+Tight:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Cairo:wght@400;600;700&display=swap');
    @media only screen and (max-width: 480px) {
      .outer { padding: 16px 10px !important; }
      .inset { padding-left: 22px !important; padding-right: 22px !important; }
      .contact-cell { display: block !important; width: auto !important; padding: 0 !important; }
      .phone-cell { padding-top: 12px !important; }
      .sender-name { font-size: 26px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#130826;font-family:'Inter Tight','Cairo','Arial Narrow',Arial,sans-serif;color:#f3effa;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">${safeName} sent you a message through your portfolio.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#130826;">
    <tr><td class="outer" align="center" style="padding:32px 16px;">
      <table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:560px;table-layout:fixed;border-collapse:separate;border-spacing:0;background-color:#221040;background-image:linear-gradient(145deg,#33195f 0%,#221040 58%,#130826 100%);border:1px solid #523873;border-radius:3px;overflow:hidden;">
        <tr><td style="height:4px;line-height:4px;font-size:1px;background-color:#ff6b4a;">&nbsp;</td></tr>
        <tr><td class="inset" style="padding:22px 30px 20px;border-bottom:1px solid #523873;">
          <div style="font-family:'IBM Plex Mono',Consolas,'Courier New',monospace;font-size:13px;line-height:1.5;font-weight:500;letter-spacing:1.2px;color:#f3effa;">SONDOS ALSAYED MAHMOUD<span style="color:#ff6b4a;">.</span></div>
          <div style="margin-top:6px;color:#c8bbda;font-family:'IBM Plex Mono',Consolas,'Courier New',monospace;font-size:10px;line-height:1.4;letter-spacing:1.5px;">PORTFOLIO / CONTACT</div>
        </td></tr>
        <tr><td class="inset" style="padding:24px 30px 18px;">
          <div style="font-family:'IBM Plex Mono',Consolas,'Courier New',monospace;font-size:11px;line-height:1.5;font-weight:500;letter-spacing:1.7px;color:#ff6b4a;">NEW MESSAGE</div>
          <h1 class="sender-name" dir="auto" style="margin:8px 0 0;font-family:'Bricolage Grotesque','Cairo','Trebuchet MS',Arial,sans-serif;font-size:34px;line-height:1.15;font-weight:600;letter-spacing:-1.2px;color:#f3effa;overflow-wrap:anywhere;word-break:break-word;">${safeName}</h1>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;margin-top:18px;">
            <tr>
              <td class="contact-cell" width="62%" valign="top" style="width:62%;padding-right:18px;">
                <div style="font-family:'IBM Plex Mono',Consolas,'Courier New',monospace;font-size:10px;line-height:1.4;letter-spacing:1px;color:#c8bbda;">EMAIL</div>
                <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;margin-top:5px;color:#f3effa;font-size:14px;line-height:1.5;text-decoration:underline;text-decoration-color:#9e83bd;overflow-wrap:anywhere;word-break:break-all;">${safeEmail}</a>
              </td>
              <td class="contact-cell phone-cell" width="38%" valign="top" style="width:38%;">
                <div style="font-family:'IBM Plex Mono',Consolas,'Courier New',monospace;font-size:10px;line-height:1.4;letter-spacing:1px;color:#c8bbda;">PHONE</div>
                <a href="tel:${safePhoneLink}" dir="ltr" style="display:inline-block;margin-top:5px;color:#f3effa;font-size:14px;line-height:1.5;text-decoration:none;overflow-wrap:anywhere;word-break:break-word;">${safePhone}</a>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td class="inset" style="padding:0 30px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;border-collapse:separate;background-color:#170a33;border:1px solid #523873;border-radius:2px;">
            <tr><td dir="auto" style="padding:18px 20px;color:#f3effa;font-size:16px;line-height:1.65;overflow-wrap:anywhere;word-break:break-word;">${safeMessage}</td></tr>
          </table>
        </td></tr>
        <tr><td class="inset" style="padding:20px 30px 24px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;">
            <tr><td align="center" bgcolor="#ff6b4a" style="border:1px solid #ff6b4a;border-radius:24px;mso-padding-alt:13px 22px;">
              <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;padding:13px 22px;color:#170a33;font-size:14px;line-height:1.2;font-weight:700;text-decoration:none;">Reply to sender &nbsp; &#8599;</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td class="inset" style="padding:14px 30px;border-top:1px solid #523873;color:#c8bbda;font-size:11px;line-height:1.6;">Via Sondos's portfolio &nbsp;&middot;&nbsp; ${receivedDate} (Cairo)</td></tr>
      </table>
    </td></tr>
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
