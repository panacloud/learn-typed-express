"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
function requestHandler(request, response) {
    if (request.url === "/") {
        response.end("Welcome to the homepage!");
    }
    else if (request.url === "/about") {
        response.end("Welcome to the about page!");
    }
    else {
        response.end("Error! File not found.");
    }
}
var server = http.createServer(requestHandler);
server.listen(3000, function () {
    console.log("listening on port 3000");
});
