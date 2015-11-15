/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import morgan = require("morgan");
import path = require("path");

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use((req: express.Request, res: express.Response) => {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
