var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<p>Upload your file</p>' +  ' <button type="button">upload!</button> ');
  res.end();
}).listen(8080);
console.log('Server running at http://localhost:8080');

