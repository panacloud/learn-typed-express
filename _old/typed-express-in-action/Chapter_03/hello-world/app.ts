/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import logger = require("morgan");
import http = require("http");

var app = express();

app.use(logger("short"));

app.use((request: express.Request, response: express.Response, next: ()=>void) => {
  var minute = (new Date()).getMinutes();
  if ((minute % 2) === 0) {
    next();
  } else {
    response.statusCode = 403;
    response.end("Not authorized.");
  }
});

app.use((request: express.Request, response: express.Response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!");
});

http.createServer(app).listen(3000);
