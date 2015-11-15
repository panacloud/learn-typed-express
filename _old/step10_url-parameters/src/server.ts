/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import path = require('path');

var app : express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, '/../public')));

//URL Parameter 
app.get("/user/:name", function(req, res){
	res.json(req.params);
});

//Optional Parameter
app.get("/user2/:name?", function(req, res){
	res.json(req.params);
});

//Multiple Parameters
app.get("/user3/:name/:lastname", function(req, res){
	res.json(req.params);
});

//Multiple Parameters (Optional)
app.get("/user3/:name?/:lastname", function(req, res){
	res.json(req.params);
});

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


