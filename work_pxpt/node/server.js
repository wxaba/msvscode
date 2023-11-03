var http = require('http');
var url = require('url');
var util = require('util');
 
var server =  http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write('<div>haha</div>');
    res.end();
})
server.listen('8080');
console.log('服务器运行中');