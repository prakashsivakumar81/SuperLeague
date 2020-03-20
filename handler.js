var qs = require('querystring');

function home(response){
	console.log("home function");
	var htmldata = "<!doctype html>"+
"<html>"+
"<body>"+
"<form action=\"/newpage\" method=\"post\">"+
"First Name <input type=\"text\" name=\"fname\"><br/></input>"+
"Last Name <input type=\"text\" name=\"Sname\"><br/></input>"+
"<button>Save</button>"+
"</form>"+
"</body>"+
"</html>";
response.writeHead(200,{"Content-Type":"text/html"});
		response.write(htmldata);
		response.end();
}
function review(response,body){

	var data = qs.parse(body);

	var writeData = data.undefinedfname+" "+data.Sname+" is the creator of Node.js";
            console.log(writeData);
	response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(writeData);
		response.end();
}

exports.home = home;
exports.review = review;