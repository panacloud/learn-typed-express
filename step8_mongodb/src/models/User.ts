//import mongoose = require("mongoose");
import mongoose from '../db';

//https://github.com/horiuchi/DefinitelyTyped/blob/master/mongoose/mongoose-tests.ts
import IUser from 'IUser';

export interface IUserModel extends IUser, mongoose.Document { }

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayName: String
});


export let User = mongoose.model<IUserModel>("User", userSchema);


