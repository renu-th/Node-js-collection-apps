var sys = require('sys'),
   http = require('http');

http.createServer(function(request, response) {
  setTimeout(function() {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
  }, 2000);
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000');
