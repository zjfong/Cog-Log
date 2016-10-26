var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var Exam = require('./exam');

var UserSchema = new Schema({
  name: String,
  email: String,
  passwordDigest: String
  exam:[{
    type: Schema.Types.ObjectId,
    ref: 'Exam'
  }],
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
