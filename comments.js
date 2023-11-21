// Create web server

// Include http module.
var http = require("http");

// Create http server.
var server = http.createServer(function (request, response) {
  // Attach listener on end event.
  request.on("end", function () {
    // Write headers to the response.
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Send data and end response.
    response.end("Hello HTTP!");
  });
});

// Listen on the 8080 port.
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://localhost:8080/");
