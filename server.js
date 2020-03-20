var http = require('http'); 
var url = require('url');

function startserver(route,handle) {
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var body;
		console.log("path name: " + pathname);
		request.on('data', function (data) {
            body += data;
            // Too much POST data, kill the connection!
            if (body.length > 1e6)
                request.connection.destroy();
        });
         request.on('end', function () {
            route(handle,pathname,response,body);
        });
	}
	http.createServer(onRequest).listen(8080);
}

exports.startserver = startserver;