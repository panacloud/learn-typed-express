/// <reference path='./typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '/../client')));
app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
    res.render('index.html');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
