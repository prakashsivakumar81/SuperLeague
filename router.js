function route(handle,pathname,response,body){
	console.log("Routing for "+pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response,body);
	} else {
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 Page not Found");
		response.end();
	}
}

exports.route = route;