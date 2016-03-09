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

// Saving User 1 to Database without Project
saveUsers("zeeshan1@panacloud.com","zeeshan1", null, function (user1:IUserModel){
    
    // Saving Project 1 to Database with User 1
    saveProjects("FirstProject",user1,function (project1:IProjectModel){
        
        // Updating User 1 to add Project 1 in it
        updateUser(user1,project1,function (){
        
            // Saving User 2 to Database with Project 1
            saveUsers("zeeshan2@panacloud.com","zeeshan2", project1, function (user2:IUserModel){
                
                // Updating Project 1 to add User 2 in it
                updateProject(project1,user2,function (){
                    
                    // Saving Project 2 to Database with User 1
                    saveProjects("SecondProject",user1,function (project2:IProjectModel){
                        
                        // Updating User 1 to add Project 2 in it
                        updateUser(user1,project2,function (){
                            
                            // Updating User 2 to add Project 2 in it
                            updateUser(user2,project2,function (){
                                console.log("done save all");
                                
                                //User User 1, populate Projects and display
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



