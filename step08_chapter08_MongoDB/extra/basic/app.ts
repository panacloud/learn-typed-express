/// <reference path="./typings/tsd.d.ts" />

import User = require("./User");

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var user = new User({
    email: "zia@panacloud.com",
    password : "123",
    displayName : "Zia"
});
user.save(function (err) {
  if (err) 
    console.log(err);
  else {
      console.log("saved");
      User.find({displayName: "Zia"}, function(err2, res){
          if(err2){
              console.log("Error in finding");
          }
          else {
              res.forEach(function(user){
                  console.log(user.email);
              });
              mongoose.disconnect();
              console.log("done");
          }
      })
      
  }
});

console.log("done");

