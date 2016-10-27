var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  ejs = require('ejs');

var app = express();
var controllers = require('./controllers');

app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(session({
//   saveUninitialized: true,
//   resave: true,
//   secret: 'SuperSecretCookie',
//   cookie: { maxAge: 30 * 60 * 1000 }
// }));

// parse application/json
app.use(bodyParser.json())

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

app.get('/api/users', controllers.users.index);
app.get('/api/users/:userId', controllers.users.show);
app.post('/api/users', controllers.users.create);
app.delete('/api/users/:userId', controllers.users.destroy);
app.put('/api/users/:userId', controllers.users.update);


app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
