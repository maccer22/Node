var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response) {
		
	    console.time("request");

	    var postData = "";
	    
		//Get Pathname 
		var pathname = url.parse(request.url).pathname;
		
		request.setEncoding("utf8");

		request.addListener("data", function (postDataChunk) {
		    postData += postDataChunk;
		    console.log("Received POST data chunk '" +
            postDataChunk + "'.");
		});
		request.addListener("end", function () {
		    route(handle, pathname, response, postData);
		});

		//Call the router.js
		//route(handle, pathname, response, postData);
	    
		console.timeEnd("request");
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server: Server has started.");
}

exports.start = start;

