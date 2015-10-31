# MongoDB
MongoDB is a cross-platform document-oriented database. Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster.
Download from https://www.mongodb.org/ & install

To start MongoDB, execute mongod.exe

# Robomongo
MongoDB management tool.
http://robomongo.org/

# mongoose
Mongoose is a Node.js library that provides MongoDB object mapping similar to ORM with a familiar interface within Node.js

Installation
- npm install mongoose --save
- tsd install mongoose --save

Example

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});

Others Links
http://mongoosejs.com/docs/index.html
