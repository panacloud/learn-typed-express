/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
var viewRenderingEngine = require("ejs");

var app : express.Express = express();

app.set('view engine', 'ejs'); // so you can render('index') 

app.get('/', (req, res) => {
	res.render('index');  
}); 

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});


