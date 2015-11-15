/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import http = require("http");
import path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request: express.Request, response: express.Response) => {
  response.render("index", {
    message: "Hey everyone! This is my webpage."
  });
});

http.createServer(app).listen(3000);
