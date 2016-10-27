var db = require('../models');

function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

function show(req, res) {
  db.User.findById(req.params.albumId, function(err, user) {
    if(err) { console.log('show error', err); }
    console.log('found user', user);
    res.json(user);
  });
}

function create(req, res) {
  console.log(req.body);
  db.User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    console.log(user);
    res.json(user);
  });
}

function destroy(req, res) {
  db.User.findOneAndRemove({ _id: req.params.userId }, function(err, user){
    res.json(user);
  });
}

function update(req, res) {
  db.User.findOneAndUpdate({ _id: req.params.userId }, {$set: {
    name: req.body.name,
    email: req.body.email,
  }}, {new:true}).exec(function (error,editUser){
    if(error){
      res.status(500).send(err);
    }
    res.json(editUser)
  })
}


module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
