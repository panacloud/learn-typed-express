/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import path = require("path");
import fs = require("fs");

var app = express();

app.use((req: express.Request, res: express.Response, next: Function) => {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  next();
});

app.use((req: express.Request, res: express.Response, next: Function) =>  {
  var filePath = path.join(__dirname, "static", req.url);
  fs.exists(filePath, function(exists) {
    if (exists) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.use((req: express.Request, res: express.Response) =>  {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});

