import mongoose = require("mongoose");
import {IProject} from "./shared/IProject";

export interface IProjectModel extends IProject, mongoose.Document { 
    
};