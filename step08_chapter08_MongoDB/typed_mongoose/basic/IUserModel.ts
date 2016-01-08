import mongoose = require("mongoose");
import {IUser} from "./shared/IUser";

export interface IUserModel extends IUser, mongoose.Document { 
    
};