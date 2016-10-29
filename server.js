var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var passport = require('passport');
app.use(passport.initialize());

require('./app_api/models/db');
require('./app_api/config/passport');

var routesApi = require('./app_api/routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use('/api', routesApi);


app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});


app.listen(process.env.PORT || 3000, function () {
  console.log('HTTP server listening at localhost:3000');
});

module.exports = app;
