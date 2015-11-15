/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import path = require("path");
import http = require("http");

var app = express();

app.get("/", (request: express.Request, response: express.Response) => {
  response.end("Welcome to my homepage!");
});

app.get("/about", (request: express.Request, response: express.Response) => {
  response.end("Welcome to the about page!");
});

app.get("/weather", (request: express.Request, response: express.Response) => {
  response.end("The current weather is NICE.");
});

app.get("/hello/:who", (request: express.Request, response: express.Response) => {
  response.end("Hello, " + request.params.who + ".");
  // Fun fact: this has some security issues, which we’ll get to!
});

app.get("/redirect_home", (request: express.Request, response: express.Response) => {
  response.redirect("/");
});

app.get("/sendfile", (request: express.Request, response: express.Response) => {
  var filePath = path.resolve(__dirname, "cool-facts.txt");
  response.sendFile(filePath);
});

app.use((request: express.Request, response: express.Response) => {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
