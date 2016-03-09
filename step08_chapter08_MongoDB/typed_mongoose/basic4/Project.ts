/// <reference path="./typings/tsd.d.ts" />

import mongoose = require("mongoose");
import { IProjectModel } from "./IProjectModel";


var projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdBy : [{ ref : 'User', type: mongoose.Schema.Types.ObjectId}]
});


var Project = mongoose.model<IProjectModel>("Project", projectSchema);

export default Project;

