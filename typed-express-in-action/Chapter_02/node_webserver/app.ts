/// <reference path="./typings/tsd.d.ts" />

import http = require("http");
function requestHandler(request: http.IncomingMessage, response: http.ServerResponse) {
	console.log("In comes a request to: " + request.url); 
	response.end("Hello, world!"); 
}
var server: http.Server = http.createServer(requestHandler);
server.listen(3000);