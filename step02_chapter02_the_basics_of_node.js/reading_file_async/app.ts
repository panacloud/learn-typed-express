/// <reference path="./typings/tsd.d.ts" />

import fs = require("fs"); 
var options = { encoding: "utf-8" };

fs.readFile("myfile.txt", options, (err: NodeJS.ErrnoException, data: string)=> {
	if (err) {
		console.error("Error reading file!"); 
		return; 
	} 
	console.log(data.match(/x/gi).length + " letter X's");
});

console.log("Hello world!");
