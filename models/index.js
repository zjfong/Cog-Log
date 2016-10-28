var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/health");

var User = require('./user');
mongoose.set("debug", true);

module.exports.User = require("./user");
