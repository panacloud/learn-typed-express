/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var indexRoute = require('./routes/index');
var userCreateFormRoute = require('./routes/createUserForm');
var userCreateAPIRoute = require('./routes/api/createUser');
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/', indexRoute);
app.use('/create', userCreateFormRoute);
app.use('/api/user', userCreateAPIRoute);
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
