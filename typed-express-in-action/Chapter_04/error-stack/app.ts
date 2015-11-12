/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import morgan = require("morgan");

var app = express();

app.use(morgan("dev"));

app.use((req: express.Request, res: express.Response, next: Function)=> {
  if (req.url === "/") {
    next();
  } else if (req.url === "/throw") {
    throw new Error("Gimme that error");
  } else {
    next("You didn't visit the root!");
  }
});

app.use((req: express.Request, res: express.Response) => {
  res.send("Welcome to the homepage.");
});

app.use((err: any, req: express.Request, res: express.Response, next: Function)=> {
  console.error(err);
  res.status(500);
  next(err);
});

app.use((err, req: express.Request, res: express.Response, next: Function)=> {
  res.send("Got an error: " + err);
});

app.listen(3000, ()=> {
  console.log("App started");
});
