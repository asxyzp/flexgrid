// Importing modules
const fs = require("fs");
const express = require('express');
const addLog = require('./addLog');
const querystring = require('querystring');

const app = express();

//Sends 'public' dir. when / path is called
app.use('/', express.static('public'));

/*
	When /ref?platform=_____ path is called, then :
	1. server redirects the request to path / which serves the static files in public dir.
	2. platform name is fetched using querystring module
	3. new log is added using 
*/
app.get('/ref',(req,res)=>{
	res.redirect("/");
	let op = querystring.decode(req._parsedOriginalUrl.query);
	addLog(op.platform);
});

app.listen('8080',()=>{
	console.log("App started at PORT 8080");
});