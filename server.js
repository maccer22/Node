var http = require("http");
var url = require("url");

function start(route){
	function onRequest(request, response) {
		
		//Get Pathname 
		var pathname = url.parse(request.url).pathname;
		console.log("Server: Request for " + pathname + " received.");
		
		//Call the router.js
		route(pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Server: Response - " + pathname);
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server: Server has started.");
}

exports.start = start;

