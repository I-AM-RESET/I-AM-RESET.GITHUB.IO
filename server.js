const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(body);
      // code to send email with the data goes here
    });
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
