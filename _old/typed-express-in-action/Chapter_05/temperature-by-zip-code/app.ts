/// <reference path="./typings/tsd.d.ts" />

import path = require("path");
import express = require("express");
var zipdb = require("zippity-do-dah");
var ForecastIo = require("forecastio");

var app = express();
var weather = new ForecastIo("YOUR FORECAST.IO API KEY HERE");

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req: express.Request, res: express.Response) => {
  res.render("index");
});

app.get(/^\/(\d{5})$/, (req: express.Request, res: express.Response, next: Function) => {
  var zipcode = req.params[0];
  var location = zipdb.zipcode(zipcode);
  if (!location.zipcode) {
    next();
    return;
  }

  var latitude = location.latitude;
  var longitude = location.longitude;

  weather.forecast(latitude, longitude, function(err, data) {
    if (err) {
      next();
      return;
    }

    res.json({
      zipcode: zipcode,
      temperature: data.currently.temperature
    });
  });
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).render("404");
});
app.listen(3000);
