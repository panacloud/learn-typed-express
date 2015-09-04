//import mongoose = require("mongoose");
import mongoose from '../db';

import IUser from 'IUser';

interface IUserModel extends IUser, mongoose.Document { 
    
  
  }

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayName: String
});

var User = mongoose.model<IUserModel>("User", userSchema);

export default User;

