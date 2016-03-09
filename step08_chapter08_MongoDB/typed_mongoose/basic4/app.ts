/// <reference path="./typings/tsd.d.ts" />

import User from "./User";
import Project from "./Project";
import { IUserModel } from "./IUserModel"
import { IProjectModel } from "./IProjectModel"

import mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/manytomany',function (a:any){
    console.log("test "+a);
});

var users: IUserModel[] = [];
var projects: IProjectModel[] = [];

function saveUsers (email:String, displayName:String, project:IProjectModel, callback: (user:IUserModel)=>void){
    var user = new User({
        email: email,
        password : "123xyz",
        displayName : displayName
    });
    if(project){
        user.projects=[];
        user.projects.push(project);
    }
    
    user.save(function (err,data:IUserModel) {
        if (err) 
            console.log(err);
        else {
            console.log("saved");
            users.push(data);
            callback(data);
        }
    });
}

function updateUser(user:IUserModel, project:IProjectModel, callback: (user:IUserModel)=>void){
    if(!user.projects) {
        user.projects=[];
    }
    user.projects.push(project);
    user.save(function (err,data:IUserModel) {
        if (err) 
            console.log(err);
        else {
            console.log("saved");            
            callback(data);
        }
    });
}


function saveProjects (projectName:String, user:IUserModel, callback: (project:IProjectModel)=>void){
    var project = new Project({
        name:"thrid project"
    });
    if(user){
        project.createdBy = [];
        project.createdBy.push(user);
    }
    
    project.save(function (err,data:IProjectModel) {
        if (err) 
            console.log(err);
        else {
            console.log("saved");
            projects.push(data);
            callback(data);
        }
    });
}

function updateProject(project:IProjectModel, user:IUserModel, callback: (project:IProjectModel)=>void){
    if(!project.createdBy) {
        project.createdBy = [];
    }
    project.createdBy.push(user);
    project.save(function (err,data:IProjectModel) {
        if (err) 
            console.log(err);
        else {
            console.log("saved");
            callback(data);
        }
    });
}


function searchObj(){
   
    User.findOne({displayName: "zeeshan1"})
            .populate('projects')
            .exec(function(err, res: IUserModel){
                if(err){
                    console.log("Error in finding");
                }
                else {
                    console.log(res.projects);
                    
                    mongoose.disconnect();
                    console.log("load done");
                }
      });
      
}


saveUsers("zeeshan1@panacloud.com","zeeshan1", null, function (user1:IUserModel){
    
    saveProjects("FirstProject",user1,function (project1:IProjectModel){
        
        updateUser(user1,project1,function (){
        
            saveUsers("zeeshan2@panacloud.com","zeeshan2", project1, function (user2:IUserModel){
                updateProject(project1,user2,function (){
                    
                    saveProjects("SecondProject",user1,function (project2:IProjectModel){
                        updateUser(user1,project2,function (){
                            updateUser(user2,project2,function (){
                                console.log("done save all");
                                
                                searchObj();
                                
                            });    
                        });
                    });
                    
                    
                })
            })
        })
    })
    
    /*
        saveUsers("zeeshan3@panacloud.com","zeeshan3", null, function (user3:IUserModel){
                
        })*/
})

/*
saveObj(function(){
    searchObj();
});
*/



