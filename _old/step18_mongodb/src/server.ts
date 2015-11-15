/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import logger = require('morgan');
import bodyParser = require('body-parser');
import path = require('path');


var app : express.Express = express();

import indexRoute = require('./routes/index');
import userCreateFormRoute = require('./routes/createUserForm');

import userCreateAPIRoute = require('./routes/api/createUser');



// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../public')));

app.use('/', indexRoute);
app.use('/create', userCreateFormRoute);

app.use('/api/user', userCreateAPIRoute);


var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


