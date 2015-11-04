/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import http = require("http");

var app = express();

app.use((request: express.Request, response: express.Response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!");
});

http.createServer(app).listen(3000);
