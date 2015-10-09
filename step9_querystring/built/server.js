/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/../public')));
app.get("/q", function (req, res) {
    res.json(req.query);
});
var users = [
    { id: 1, name: "Rehan", age: 24 },
    { id: 2, name: "A", age: 24 },
    { id: 3, name: "B", age: 24 },
    { id: 4, name: "C", age: 24 },
    { id: 5, name: "D", age: 24 },
    { id: 6, name: "E", age: 24 },
    { id: 7, name: "f", age: 24 },
    { id: 8, name: "G", age: 24 },
];
app.get("/", function (req, res) {
    res.render("./index");
});
app.get("/search", function (req, res) {
    console.log(req.query.q);
    for (var i = 0; i < users.length; i++) {
        if ((users[i].name).toLowerCase() == (req.query.q).toLowerCase()) {
            res.json(users[i]);
            return;
        }
    }
    res.send("User Not Found");
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
