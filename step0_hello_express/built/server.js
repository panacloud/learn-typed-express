/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var viewRenderingEngine = require("ejs");
var app = express();
app.set('view engine', 'ejs'); // so you can render('index') 
app.get('/', function (req, res) {
    res.render('index');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
