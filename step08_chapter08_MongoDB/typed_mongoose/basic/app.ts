/// <reference path="./typings/tsd.d.ts" />

import User from "./User";
import { IUserModel } from "./IUserModel"

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


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
    User.find({displayName: "Zia"}, function(err, res: IUserModel[]){
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



