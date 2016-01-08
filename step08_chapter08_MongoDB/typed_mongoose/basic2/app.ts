/// <reference path="./typings/tsd.d.ts" />

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

interface IUser extends mongoose.Document {
    email: string;
    password: string;
    displayName: string;
};

var userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    displayName: String
});

var User = mongoose.model<IUser>("User", userSchema);


function saveObj(callback: ()=>void){
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
        callback();
    }
    }); 
}

function searchObj(){
    User.find({displayName: "Zia"}, function(err, res: IUser[]){
          if(err){
              console.log("Error in finding");
          }
          else {
              res.forEach(function(user){
                  console.log(user.email);
              });
              mongoose.disconnect();
              console.log("done");
          }
      });
}

saveObj(function(){
    searchObj();
});



