/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import path = require('path');

var app : express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

//Express Built-in Middleware
app.use(express.static(path.join(__dirname, '/../public')));

//Custom Middleware
app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Time:', Date.now());
  next();
});

app.get('/',  (req, res, next) => {
	console.log("/ middleware called")
	next();  
}, (req, res) => {
	res.render('index');  
}); 

app.get('/admin',  (req, res, next) => {
	console.log("/admin middleware called")
	next();  
}, (req, res) => {
	res.send('Admin');  
}); 

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


