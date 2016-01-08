/// <reference path="./typings/tsd.d.ts" />

import mongoose = require("mongoose");
import { IUserModel } from "./IUserModel";


var userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    displayName: String
});

var User = mongoose.model<IUserModel>("User", userSchema);

export default User;

