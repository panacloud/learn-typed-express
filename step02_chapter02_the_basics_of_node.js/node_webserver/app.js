"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
}
var server = http_1.createServer(requestHandler);
server.listen(3000, function () {
    console.log("listening on port 3000");
});
