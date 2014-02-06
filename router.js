function route(handle, pathname) {

   
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        return "404 Not Found";
        console.log("No request handler found for " + pathname);
    }

    //console.log("Router: About to route a request for " + pathname);

}

exports.route = route;