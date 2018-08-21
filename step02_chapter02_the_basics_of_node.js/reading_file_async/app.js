"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var options = { encoding: "utf-8" };
fs_1.readFile("myfile.txt", options, function (err, data) {
    if (err) {
        console.error("Error reading file!");
        return;
    }
    console.log(data.match(/x/gi).length + " letter X's");
});
console.log("Hello world!");
