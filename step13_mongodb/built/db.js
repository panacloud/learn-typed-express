/// <reference path='../typings/tsd.d.ts' />
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
exports["default"] = mongoose;
