// var User = require('./app_api/models/user');
var db = require('./app_api/models/db');
console.log(db)

db.User.find({}, function(err, users){
  console.log('found all users')
})

// db.User.remove({}, function(err, users){
//   console.log('remove all users')
// })
