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
  console.log('Middleware 1');
  console.log('Time:', Date.now());
  next();
});

app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware 2');
  console.log('Time:', Date.now());
  next("Error in Middle ware 2");
});

app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware 3');
  console.log('Time:', Date.now());
  next();
});


//Error-handling middleware
//Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware. Even if you don’t need to use the next object, you must specify it to maintain the signature, otherwise it will be interpreted as regular middleware and fail to handle errors.
//Define error-handling middleware like other middleware, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

app.use(function (err: any, req: express.Request, res: express.Response, next: Function) {
  console.log('Error Middleware');
  res.send(err);
});


app.get('/', (req, res) => {
	res.render('index');  
}); 

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


