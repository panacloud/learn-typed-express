/// <reference path="./typings/tsd.d.ts" />

import mongoose = require("mongoose");
import IUser = require("./shared/IUser");

interface IUserModel extends IUser, mongoose.Document { 
    
}

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayName: String
});

var User = mongoose.model<IUserModel>("User", userSchema);

export = User;