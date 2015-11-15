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
var todos = [];
app.get("/api/todo/:id?", function (req, res) {
    if (req.params.id) {
        for (var i = 0; i < todos.length; i++) {
            if (req.params.id == todos[i].id) {
                res.json(todos[i]);
                return;
            }
        }
        res.json({ status: false, message: "Not Found" });
    }
    else {
        res.json(todos);
    }
});
app.delete("/api/todo/:id", function (req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (req.params.id == todos[i].id) {
            todos.splice(i, 1);
            res.json({ status: true });
            return;
        }
    }
    res.json({ status: false, message: "Not Found" });
});
app.post("/api/todo", function (req, res) {
    var obj = {
        id: Date.now(),
        todo: req.body.todo
    };
    todos.push(obj);
    res.json({ status: true, todo: obj });
});
app.put("/api/todo/:id?", function (req, res) {
    if (req.params.id) {
        for (var i = 0; i < todos.length; i++) {
            if (req.params.id == todos[i].id) {
                todos[i].todo = req.body.todo;
                res.json(todos[i]);
                return;
            }
        }
        res.json({ status: false, message: "Not Found" });
    }
    else {
        res.json({ status: false, message: "Invalid Id" });
    }
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
