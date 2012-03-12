var http = require('http'),
    fs   = require('fs'),
    io   = require('socket.io').listen(3001);

http.createServer(function(req, res) {
    fs.readFile(__dirname+'/index.html', function(err, page) {
      if(err) throw err;
      res.setHeader('Content-type', 'text/html');
      res.end(page);
    });
}).listen(3000);

//keeps sending information
setInterval(function() {
    io.sockets.emit('news', {feed: 'new information'});
}, 5000);

