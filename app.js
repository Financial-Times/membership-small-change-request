var express = require('express');
var app = express();

// Use compress middleware to gzip content
app.use(express.compress());

// Serve up content from public directory
app.use('/small-change-request',express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080);