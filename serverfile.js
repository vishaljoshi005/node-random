const http=require("http");
const fs = require("fs");
const hostname="127.0.0.1";
const port=3003
const server=http.createServer(function(req,res){
		fs.readFile("index.js",function(err,data){
		res.statusCode=200;
		res.setHeader("content-type","text/html");
		res.write(data);
		res.end();})
})
	server.listen(port,hostname,()=>{
	console.log("server created")});