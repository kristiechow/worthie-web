//server.js
const http = require('http'),
      url = require('url'),
      fs = require('fs'),
      express = require('express');
      home = fs.readFileSync('home.html'),
      offsets = fs.readFileSync('offsets.html'),
      rewards = fs.readFileSync('rewards.html'),
      bookmarks = fs.readFileSync('bookmarks.html'),
      app = express(),
      path = require('path'),

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.get('/offsets', function(req, res) {
    res.sendFile(path.join(__dirname + '/offsets.html'));
});
app.get('/rewards', function(req, res) {
    res.sendFile(path.join(__dirname + '/rewards.html'));
});
app.get('/bookmarks', function(req, res) {
    res.sendFile(path.join(__dirname + '/bookmarks.html'));
});


app.listen(3000,()=>{
 console.log('Node server created at port 3000');
});
