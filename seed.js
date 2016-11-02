// var User = require('./app_api/models/user');
require('./app_api/models/db');

db.User.find({}, function(err, users){
  console.log('found all users')
})

// db.User.remove({}, function(err, users){
//   console.log('remove all users')
// })
