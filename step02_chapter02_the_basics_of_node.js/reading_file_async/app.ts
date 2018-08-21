import { readFile } from "fs";

const options = { encoding: "utf-8" };

readFile("myfile.txt", options, (err, data) => {
	if (err) {
		console.error("Error reading file!");
		return;
	}
	console.log(data.match(/x/gi).length + " letter X's");
});

console.log("Hello world!");
