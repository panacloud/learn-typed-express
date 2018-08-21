
import { Server, createServer, IncomingMessage, ServerResponse } from "http";


function requestHandler(request: IncomingMessage, response: ServerResponse) {

	console.log("In comes a request to: " + request.url);
	response.end("Hello, world!");
}


var server: Server = createServer(requestHandler);

server.listen(3000, () => {
	console.log("listening on port 3000")
});