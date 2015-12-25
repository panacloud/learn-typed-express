/// <reference path="./typings/tsd.d.ts" />
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayName: String
});
var User = mongoose.model("User", userSchema);
module.exports = User;
