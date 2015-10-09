//import mongoose = require("mongoose");
var db_1 = require('../db');
var userSchema = new db_1["default"].Schema({
    email: String,
    password: String,
    displayName: String
});
exports.User = db_1["default"].model("User", userSchema);
