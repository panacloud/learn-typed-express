/// <reference path="./typings/tsd.d.ts" />
var mongoose = require("mongoose");
var projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdBy: { ref: 'User', type: mongoose.Schema.Types.ObjectId }
});
var Project = mongoose.model("Project", projectSchema);
exports["default"] = Project;
