var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExamSchema = new Schema({
  score1: Number,
  score2: Number,
  score3: Number,
  score4: Number,
  score5: Number,
  score6: Number,
  score7: Number,
  score8: Number,
  score9: Number,
  score10: Number,
  score11: Number,
  totalScore: Number
});

var Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;
