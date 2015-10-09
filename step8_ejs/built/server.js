/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/../public')));
app.get("/ejs", function (req, res) {
    res.render("./ejs", { d: [1, 2, 3, 4, 5] });
});
app.get("/ejs-datafromserver", function (req, res) {
    res.render("./ejs-datafromserver", { title: "Hello World", numbers: [1, 2, 3, 4, 5], data: JSON.stringify([{ user: "rehan" }, { user: "zia" }]) });
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
