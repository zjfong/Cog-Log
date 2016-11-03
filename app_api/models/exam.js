var mongoose = require( 'mongoose' );


var examSchema = new mongoose.Schema({
  score1: {
    type: Number
  },
  score2: {
    type: Number
  },
  score3: {
    type: Number
  },
  score4: {
    type: Number
  },
  score5: {
    type: Number
  },
  score6: {
    type: Number
  },
  score7: {
    type: Number
  },
  score8: {
    type: Number
  },
  score9: {
    type: Number
  },
  score10: {
    type: Number
  },
  score11: {
    type: Number
  },
  totalScore: {
    type: Number,
    required: true
  },
  date: String,
  user:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});

var Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
