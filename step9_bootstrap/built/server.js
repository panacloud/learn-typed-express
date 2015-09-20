/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var indexRoute = require('./routes/index');
var secondPageRoute = require('./routes/second');
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/', indexRoute);
app.use('/p2', secondPageRoute);
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
