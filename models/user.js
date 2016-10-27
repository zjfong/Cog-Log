var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var Exam = require('./exam');

var UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  exam:[{
    type: Schema.Types.ObjectId,
    ref: 'Exam'
  }],
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
