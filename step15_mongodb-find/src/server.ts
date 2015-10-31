/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import path = require('path');

import bodyParser = require('body-parser');
import mongoose = require('mongoose');

var app : express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//Connect with MongoDB database
mongoose.connect('mongodb://localhost/todos');

//Schema
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
//The permitted SchemaTypes are: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

var todoSchema = new mongoose.Schema({ todo: String, time: Date })


//Model
//A model is a class with which we construct documents
//To use our schema definition, we need to convert our todoSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

var todoModel = mongoose.model('todos', todoSchema);


//We can access documents through our model by calling method find. 
//Is this case, the first argument of method find is object which is condition & second is callback.
todoModel.find({}, function (err, docs) {
  if (err){
	  console.log(err);
  } else {
	  console.log(docs);
  }
})



var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});

