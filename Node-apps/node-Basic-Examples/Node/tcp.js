var net = require('net');


var server = net.createServer(function(connect) { //'connection' listener
  console.log('server connected');
  connect.on('end', function() {
    console.log('server disconnected');
  });
  connect.write('hello\r\n');
  connect.pipe(connect);
});

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(function () {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

server.listen(3000, function() { //'listening' listener
  console.log('server bound');
});