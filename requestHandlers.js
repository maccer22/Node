
var exec = require("child_process").exec;


function start(response) {

    console.log("Request handler 'start' was called.");
    var content = "empty";

    exec("find /",
    { timeout: 10000, maxBuffer: 20000 * 1024 },
    function (error, stdout, stderr) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(stdout);
        response.write("find end");
        console.log(stderr);
        console.log(error);
        response.end();
    });

    
    //function sleep(milliSeconds) {
    //    var startTime = new Date().getTime();
    //    while (new Date().getTime() < startTime + milliSeconds);
    //}
    //sleep(10000);

    //return "Hello start";
}
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Upload");
    response.end();


}

function favicon(response) {
    //console.log("Request handler 'favicon' was called.");
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("");
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.favicon = favicon;
