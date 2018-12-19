
var http = require ('http');

http.createServer(aResponse).listen(8080);
console.log('server is now running 127.0.0.1')

function aResponse(request, response){
    console.log('print this' + request.url);
    response.writeHead(200,{'content-type': 'text/plain'});
    response.write('Hello World');
    response.status(200);
    response.end();
}






