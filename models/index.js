var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/health");

var User = require('./user');

module.exports.User = User;
module.exports.Exam = require('./exam');
