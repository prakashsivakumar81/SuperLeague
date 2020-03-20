var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle["/home"]=handler.home;
handle["/newpage"]=handler.review;

server.startserver(router.route,handle);