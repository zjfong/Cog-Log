var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/health");

mongoose.set("debug", true);
var User = require('./user');

module.exports.User = User;
module.exports.Exam = require('./exam');
