/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var url = require('url');
var app = express();
app.use(function (req, res, next) {
    var parsedUrl = url.parse(req.url);
    //few things whicyh is parser by "url.parse()" method
    console.log(parsedUrl.path);
    console.log(parsedUrl.pathname);
    console.log(parsedUrl.query);
    console.log(parsedUrl.search);
    console.log(parsedUrl.href);
    //and etc.
    next();
});
app.listen(3000, function () {
    console.log("listening at 3000 \ngoto postman and request like this \nhttp://localhost:3000/1?p=2");
});
