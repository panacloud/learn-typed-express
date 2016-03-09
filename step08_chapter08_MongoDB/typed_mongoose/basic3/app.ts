/// <reference path="./typings/tsd.d.ts" />

import User from "./User";
import Project from "./Project";
import { IUserModel } from "./IUserModel"
import { IProjectModel } from "./IProjectModel"

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newwork',function (a:any){
    console.log("test "+a);
});


function saveObj(callback: ()=>void){
    
    var user = new User({
        email: "shan3@panacloud.com",
        password : "123xyz",
        displayName : "Zia"
    });
    var project = new Project({
        name:"thrid project"
    });
    user.save(function (err) {
    if (err) 
        console.log(err);
    else {
        console.log("saved");
        
        project.createdBy = user;
        
        project.save(function (err1,project:IProjectModel){
            console.log("Yes project saved "+project._id);
            console.log(project);
            console.log(project.createdBy.email);
        })
        
        
        
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
    //searchObj();
});



