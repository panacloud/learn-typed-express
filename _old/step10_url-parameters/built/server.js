/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/../public')));
//URL Parameter 
app.get("/user/:name", function (req, res) {
    res.json(req.params);
});
//Optional Parameter
app.get("/user2/:name?", function (req, res) {
    res.json(req.params);
});
//Multiple Parameter
app.get("/user3/:name?/:lastname", function (req, res) {
    res.json(req.params);
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
