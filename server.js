var express = require('express')
var app     = express()
var path    = require('path');

//Static Directory
app.use('/assets', express.static(__dirname + "/assets"))

app.get('/', function(req, res){
    console.log('endpoint hit!');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000, function(err){
    if(!err)
        console.log("Site is live"); 
    else 
        console.log(err)
});