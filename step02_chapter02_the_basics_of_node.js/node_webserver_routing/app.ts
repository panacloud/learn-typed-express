import * as http from "http";

function requestHandler(request: http.IncomingMessage, response: http.ServerResponse) {
	if (request.url === "/") {
		response.end("Welcome to the homepage!");
	}
	else if (request.url === "/about") {
		response.end("Welcome to the about page!");
	}
	else {
		response.end("Error! File not found.");
	}
}

var server: http.Server = http.createServer(requestHandler);

server.listen(3000, () => {
	console.log("listening on port 3000")
});