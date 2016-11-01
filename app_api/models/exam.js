var mongoose = require( 'mongoose' );


var examSchema = new mongoose.Schema({
  score1: {
    type: Number,
    required: true
  },
  score2: {
    type: Number,
    required: true
  },
  score3: {
    type: Number,
    required: true
  },
  score4: {
    type: Number,
    required: true
  },
  score5: {
    type: Number,
    required: true
  },
  score6: {
    type: Number,
    required: true
  },
  score7: {
    type: Number,
    required: true
  },
  score8: {
    type: Number,
    required: true
  },
  score9: {
    type: Number,
    required: true
  },
  score10: {
    type: Number,
    required: true
  },
  score11: {
    type: Number,
    required: true
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
