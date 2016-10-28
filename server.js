var mongoose = require('mongoose');
var db = require("./models");
var express = require('express');
var app = express();


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var controllers = require('./controllers');

app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

passport.use(new LocalStrategy(
  function(username, password, done){
    db.User.findOne({username: username, password: password}, function(err, user){
      if(user){
        return done(null, user);
      }
      return done(null, false, {message: 'Unable to login'});
    })
  }
));

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
  done(null, user);
});

app.post('/login', passport.authenticate('local'), function(req, res){
  console.log('/login')
  console.log(req.user);
  res.json(req.user);
})

app.post('/signup', function(req, res){
  db.User.findOne({username: req.body.username}, function(err, user){
    if(user){
      res.json(null);
      return;
    } else {
      var newUser = new db.User(req.body);
      newUser.roles = ['limited']
      newUser.save(function(err, user){
        req.login(user, function(err){
          if(err){
            return next(err);
          }
          res.json(user)
        });
      })
    }
  })
})


app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
