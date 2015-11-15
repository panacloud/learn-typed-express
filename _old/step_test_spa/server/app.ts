/// <reference path='./typings/tsd.d.ts' />

import express = require('express');

var app:express.Express = express();

app.set('client', __dirname + '../client');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('../client/index.html');
});

var port:number = process.env.PORT || 3000;
var server = app.listen(port, () => {
    var listeningPort:number = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
