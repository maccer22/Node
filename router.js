function route(handle, pathname, response) {

   
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();

        console.log("No request handler found for " + pathname);
    }

    //console.log("Router: About to route a request for " + pathname);

}

exports.route = route;