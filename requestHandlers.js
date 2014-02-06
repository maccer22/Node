
var querystring = require("querystring");

function start(response, postData) {

    console.log("Request handler 'start' was called.");

    var body = '<html>' +
                 '<head>' +
                    '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' +
                '</head>' +
                '<body>' +
                    '<form action="/upload" method="post">' +
                        '<textarea name="text" rows="20" cols="60"></textarea>' +
                        '<input type="submit" value="Submit text" />' +
                    '</form>' +
                 '</body>' +
               '</html>';

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();

    
    //function sleep(milliSeconds) {
    //    var startTime = new Date().getTime();
    //    while (new Date().getTime() < startTime + milliSeconds);
    //}
    //sleep(10000);

    //return "Hello start";
}

function upload(response,postData ) {
        console.log("Request handler 'upload' was called with ");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("You've sent the text: " + querystring.parse(postData).text);
        //response.write("You've sent the text: " + postData);
        response.end();
}

function favicon(response, postData) {
    //console.log("Request handler 'favicon' was called.");
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("");
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.favicon = favicon;
