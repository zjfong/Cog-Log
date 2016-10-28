var db = require("./models");

var usersList = [
{
  username: "zach",
  password: "zach",
  roles: ["admin"]
}
];


db.User.remove({}, function(err, user){

  db.User.create(usersList, function(err, users){
    if (err) { return console.log('ERROR', err); }
    console.log("all users:", users);
    console.log("created", users.length, "users");
    process.exit();
  });

});
