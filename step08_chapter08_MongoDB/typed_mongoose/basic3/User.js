/// <reference path="./typings/tsd.d.ts" />
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    displayName: String
});
var User = mongoose.model("User", userSchema, 'myUserCol');
exports["default"] = User;
