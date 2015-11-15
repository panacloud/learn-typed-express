/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.get("/", function (request, response) {
    response.end("Welcome to my homepage!");
});
app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});
app.get("/weather", function (request, response) {
    response.end("The current weather is NICE.");
});
app.use(function (request, response) {
    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(3000);
