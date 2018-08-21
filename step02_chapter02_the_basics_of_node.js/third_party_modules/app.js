"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mustache_1 = require("mustache");
var result = mustache_1.render("Hi, {{first}} {{last}}!", {
    first: "Nicolas",
    last: "Cage"
});
console.log(result);
