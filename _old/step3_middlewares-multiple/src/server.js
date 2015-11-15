/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
//Express Built-in Middleware
app.use(express.static(path.join(__dirname, '/../public')));
//Custom Middleware
app.use(function (req, res, next) {
    console.log('Middleware 1');
    console.log('Time:', Date.now());
    next();
});
app.use(function (req, res, next) {
    console.log('Middleware 2');
    console.log('Time:', Date.now());
    next();
});
app.use(function (req, res, next) {
    console.log('Middleware 3');
    console.log('Time:', Date.now());
    next();
});
app.get('/', function (req, res) {
    res.render('index');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
