/// <reference path="./typings/tsd.d.ts" />
var User_1 = require("./User");
var Project_1 = require("./Project");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newwork', function (a) {
    console.log("test " + a);
});
function saveObj(callback) {
    var user = new User_1["default"]({
        email: "shan3@panacloud.com",
        password: "123xyz",
        displayName: "Zia"
    });
    var project = new Project_1["default"]({
        name: "thrid project"
    });
    user.save(function (err) {
        if (err)
            console.log(err);
        else {
            console.log("saved");
            project.createdBy = user;
            project.save(function (err1, project) {
                console.log("Yes project saved " + project._id);
                console.log(project);
                console.log(project.createdBy.email);
            });
            callback();
        }
    });
}
function searchObj() {
    User_1["default"].find({ displayName: "Zia" }, function (err, res) {
        if (err) {
            console.log("Error in finding");
        }
        else {
            res.forEach(function (user) {
                console.log(user.email);
            });
            mongoose.disconnect();
            console.log("done");
        }
    });
}
saveObj(function () {
    //searchObj();
});
