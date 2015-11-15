/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import logger = require('morgan');
import bodyParser = require('body-parser');
import path = require('path');


var app : express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', (req, res) => {
	res.render('index');  
}); 

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


