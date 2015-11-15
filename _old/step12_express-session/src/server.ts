/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import path = require('path');

import bodyParser = require('body-parser');
import session = require('express-session');

var app : express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//interface sessionObject extends Session

app.use(session({
  genid: function(req) {
    return (Date.now()).toString()// use UUIDs for session IDs 
  },
  secret: 'any secret string'
}))

app.get("/", function(req, res){
	res.render("./index");
});

app.post("/login", function(req, res){	
	req.session.user =  {
		email : req.body.email,
		name : req.body.name
	};
	res.send("Session Created <br>" + JSON.stringify(req.body));
});

app.get("/ristrictedpage", function(req, res){
	if(req.session.user && req.session.user.email){
		res.send("Authorized User <br>" + JSON.stringify(req.session));
	} else {
		res.send("User Not Authorized");
	}
});

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});

