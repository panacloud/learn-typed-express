/// <reference path="./typings/tsd.d.ts" />

import http = require("http");
import path = require("path");
import express = require("express");
import logger = require("morgan");
import bodyParser = require("body-parser");

var app = express();

var entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.render("index");
});

app.get("/new-entry", (req: express.Request, res: express.Response) => {
  res.render("new-entry");
});

app.post("/new-entry", (req: express.Request, res: express.Response) => {
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Entries must have a title and a body.");
    return;
  }
  entries.push({
    title: req.body.title,
    body: req.body.body,
    published: new Date()
  });
  res.redirect("/");
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
  console.log("Guestbook app started.");
});
