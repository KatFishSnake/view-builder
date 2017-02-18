var express = require('express');
var app = express();

app.get('*', function() {
	res.sendfile('./app/index.html');
});
