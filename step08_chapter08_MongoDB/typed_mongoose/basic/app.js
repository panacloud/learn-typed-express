/// <reference path="./typings/tsd.d.ts" />
var User_1 = require("./User");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
function saveObj(callback) {
    var user = new User_1["default"]({
        email: "zia@panacloud.com",
        password: "123",
        displayName: "Zia"
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
    searchObj();
});
