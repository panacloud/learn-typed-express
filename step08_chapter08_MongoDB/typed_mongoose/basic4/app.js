/// <reference path="./typings/tsd.d.ts" />
var User_1 = require("./User");
var Project_1 = require("./Project");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/manytomany', function (a) {
    console.log("test " + a);
});
var users = [];
var projects = [];
function saveUsers(email, displayName, project, callback) {
    var user = new User_1["default"]({
        email: email,
        password: "123xyz",
        displayName: displayName
    });
    if (project) {
        user.projects = [];
        user.projects.push(project);
    }
    user.save(function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log("saved");
            users.push(data);
            callback(data);
        }
    });
}
function updateUser(user, project, callback) {
    if (!user.projects) {
        user.projects = [];
    }
    user.projects.push(project);
    user.save(function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log("saved");
            callback(data);
        }
    });
}
function saveProjects(projectName, user, callback) {
    var project = new Project_1["default"]({
        name: "thrid project"
    });
    if (user) {
        project.createdBy = [];
        project.createdBy.push(user);
    }
    project.save(function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log("saved");
            projects.push(data);
            callback(data);
        }
    });
}
function updateProject(project, user, callback) {
    if (!project.createdBy) {
        project.createdBy = [];
    }
    project.createdBy.push(user);
    project.save(function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log("saved");
            callback(data);
        }
    });
}
function searchObj() {
    User_1["default"].findOne({ displayName: "zeeshan1" })
        .populate('projects')
        .exec(function (err, res) {
        if (err) {
            console.log("Error in finding");
        }
        else {
            console.log(res.projects);
            mongoose.disconnect();
            console.log("load done");
        }
    });
}
saveUsers("zeeshan1@panacloud.com", "zeeshan1", null, function (user1) {
    saveProjects("FirstProject", user1, function (project1) {
        updateUser(user1, project1, function () {
            saveUsers("zeeshan2@panacloud.com", "zeeshan2", project1, function (user2) {
                updateProject(project1, user2, function () {
                    saveProjects("SecondProject", user1, function (project2) {
                        updateUser(user1, project2, function () {
                            updateUser(user2, project2, function () {
                                console.log("done save all");
                                searchObj();
                            });
                        });
                    });
                });
            });
        });
    });
    /*
        saveUsers("zeeshan3@panacloud.com","zeeshan3", null, function (user3:IUserModel){
                
        })*/
});
/*
saveObj(function(){
    searchObj();
});
*/
