// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();



// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
 // Create an event handler as follows
var connectHandler = function() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");

//========================================

/*var http = require("http");
var server = http.createServer();
 
server.on("request", function (req, res) {
    res.end("this is the response");
});
 
server.listen(3000);*/