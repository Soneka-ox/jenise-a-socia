const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
http.createServer((req,res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Requisição inválida'); }
  const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = path.resolve(root, relative);
  const ext = path.extname(file);
  if (!file.startsWith(root + path.sep) || !['.html','.css','.js','.svg'].includes(ext) || /(^|[\\/])\./.test(relative)) {
    res.writeHead(404); return res.end('Não encontrado');
  }
  fs.readFile(file,(error,data) => {
    if (error) { res.writeHead(404); return res.end('Não encontrado'); }
    res.writeHead(200, {'Content-Type':mime[ext], 'Cache-Control':'no-store'}); res.end(data);
  });
}).listen(4173, '127.0.0.1', () => console.log('Prévia local: http://127.0.0.1:4173'));
