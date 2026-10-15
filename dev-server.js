const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const requestHandler = require('./api/request');

const ROOT = __dirname;
const MAX_REQUEST_BYTES = 10_000;
const MIME_TYPES = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml'
};

const sendJson = (res, status, payload) => {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
};

const handleApiRequest = async (req, res) => {
  if (Number(req.headers['content-length'] || 0) > MAX_REQUEST_BYTES) {
    sendJson(res, 413, { error: 'The request is too large.' });
    return;
  }

  const chunks = [];
  let length = 0;
  for await (const chunk of req) {
    length += chunk.length;
    if (length > MAX_REQUEST_BYTES) {
      sendJson(res, 413, { error: 'The request is too large.' });
      return;
    }
    chunks.push(chunk);
  }
  req.body = Buffer.concat(chunks).toString('utf8');

  res.status = status => {
    res.statusCode = status;
    return res;
  };
  res.json = payload => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
    return res;
  };

  try {
    await requestHandler(req, res);
  } catch (error) {
    console.error('Local API request failed:', error);
    if (!res.headersSent) {
      sendJson(res, 500, { error: 'The request could not be processed.' });
    }
  }
};

const handleStaticRequest = (req, res, pathname) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Method not allowed.');
    return;
  }

  const relativePath = pathname.replace(/^[/\\]+/, '');
  const segments = relativePath.split(/[\\/]/);
  if (segments.some(segment =>
    segment.startsWith('.') || ['api', 'node_modules'].includes(segment.toLowerCase())
  )) {
    res.writeHead(404);
    res.end('Not found.');
    return;
  }

  const filePath = path.resolve(ROOT, relativePath || 'index.html');
  if (filePath !== ROOT && !filePath.startsWith(`${ROOT}${path.sep}`)) {
    res.writeHead(403);
    res.end('Forbidden.');
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      res.writeHead(404);
      res.end('Not found.');
      return;
    }

    res.writeHead(200, {
      'Content-Type': MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Content-Length': stats.size,
      'X-Content-Type-Options': 'nosniff'
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    fs.createReadStream(filePath).pipe(res);
  });
};

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400);
    res.end('Invalid request path.');
    return;
  }

  if (pathname === '/api/request') {
    handleApiRequest(req, res);
    return;
  }
  if (pathname.startsWith('/api/')) {
    res.writeHead(404);
    res.end('Not found.');
    return;
  }

  handleStaticRequest(req, res, pathname);
});

const port = Number(process.env.PORT || 4173);
if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error('PORT must be a valid TCP port number.');
}

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio available at http://127.0.0.1:${port}`);
});