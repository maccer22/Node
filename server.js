var http = require("http");
var url = require("url");

function start(){
	function onRequest(request, response) {
		//Get Pathname
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		//Call router.js
		route(pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.test = test;
