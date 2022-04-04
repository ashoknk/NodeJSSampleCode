var http = require('http');
var dt = require('./02');
var url = require('url');

http.createServer(function (req, res) {
    // console.log(req);    
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.write("<br>");
//   console.log(req.url);  
  
  //http://127.0.0.1:8080/?year=2017&month=July
  var q = url.parse(req.url, true).query;
  var url_parse = url.parse(req.url, true);
//   res.write(url_parse);
  res.write("<br>");
//   console.log("url_parse:" + url_parse);   
//   console.log("q: %j", q)
//   console.log("body: %j", req.body)
  var txt = q.year + " " + q.month;
//   console.log("year and month " + txt);  

  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);