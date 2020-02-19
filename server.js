//server.js
const http = require('http'),

makeServer = function (request,response){
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
},

server = http.createServer(makeServer);

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});
