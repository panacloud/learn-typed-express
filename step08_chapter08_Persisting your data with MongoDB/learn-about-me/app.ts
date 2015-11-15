/// <reference path="./typings/tsd.d.ts" />

import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import express = require("express");
import flash = require("connect-flash");
import mongoose = require("mongoose");
import passport = require("passport");
import path = require("path");
import session = require("express-session");

import setUpPassport from "./setuppassport";
import routes from "./routes";

var app = express();
mongoose.connect("mongodb://localhost:27017/test");
setUpPassport();

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});
