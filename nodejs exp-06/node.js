var http=require('http');
var fs = require('fs');
http.createServer(function(req,res)
{
fs.readFile('Home.html', function(err, data) 
{ 
  fs.readFile('arthimaticoperation.html', function(err, data1)
  { 
   fs.readFile('ebbillcalculator.html', function(err, data2)
   { 
   fs.readFile('relationaloperation.html', function(err, data3)
   {  
	if(req.url=="/home")
	{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);
	return res.end();
	}
	else if(req.url=="/arthimaticoperation.html")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data1);
	return res.end();
	}
	else if(req.url=="/ebbillcalculator")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data2);
	return res.end();
	} 
	else if(req.url=="/relationaloperation")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data3);
	return res.end();
	}
	else 
	{ 
		res.end("THE URL IS WRONG");
	} 
   });
   });
  });
  });
}).listen(8080);