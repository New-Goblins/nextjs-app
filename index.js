const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
