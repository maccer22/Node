var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response) {
		
	    console.time("request");
	    
		//Get Pathname 
		var pathname = url.parse(request.url).pathname;
		console.log("Server: Request for " + pathname + " received.");
		
		//Call the router.js
		route(handle, pathname, response);
	    
		console.timeEnd("request");
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server: Server has started.");
}

exports.start = start;

