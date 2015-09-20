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

//Mounting the Middlewares
//Mounts the middleware function(s) at the path. If path is not specified, it defaults to “/”.
//middleware mounted without a path will be executed for every request to the app.

app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware 2');
  console.log('Time:', Date.now());
  next();
});

//Mounting a middleware at a path will cause the middleware function to be executed whenever the base of the requested path matches the path.

app.use('/admin', function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware Mount for admin');
  console.log('Time:', Date.now());
  next();
});

app.use(function (err: any, req: express.Request, res: express.Response, next: Function) {
  console.log('Error Middleware');
  res.send(err);
});


app.get('/', (req, res) => {
	res.render('index');  
}); 

app.get('/admin', (req, res) => {
	res.send('Admin Page');  
}); 

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


