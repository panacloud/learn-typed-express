/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import path = require("path");
import http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath)); 

app.get("/", (request: express.Request, response: express.Response) => {
  response.end("Welcome to my homepage!");
});

app.get("/about", (request: express.Request, response: express.Response) => { 
  response.end("Welcome to the about page!");
});

app.get("/weather", (request: express.Request, response: express.Response) => { 
  response.end("The current weather is NICE.");
});

app.use((request: express.Request, response: express.Response) => {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
