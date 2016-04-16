/// <reference path="./typings/tsd.d.ts" />
import express = require("express");
import url = require('url');
let app = express();

app.use((req: express.Request, res: express.Response, next) => {
	let parsedUrl = url.parse(req.url);
	
	//few things whicyh is parser by "url.parse()" method

	console.log(parsedUrl.path);
	console.log(parsedUrl.pathname);
	console.log(parsedUrl.query);
	console.log(parsedUrl.search);
	console.log(parsedUrl.href);

	//and etc.
	
	next();

});

app.listen(3000, () => {
	console.log("listening at 3000 \ngoto postman and request like this \nhttp://localhost:3000/1?p=2");

});
