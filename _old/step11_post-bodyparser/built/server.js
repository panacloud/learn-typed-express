/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get("/", function (req, res) {
    res.render("./index");
});
// Create a form with post method test this code or can use postman chrome extension
// https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
app.post("/submitdata", function (req, res) {
    res.json(req.body);
});
app.post("/postrequesthandler", function (req, res) {
    res.json(req.body);
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
