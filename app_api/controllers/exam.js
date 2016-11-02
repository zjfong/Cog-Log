var mongoose = require('mongoose');
var User = mongoose.model('User');
var Exam = mongoose.model('Exam');

module.exports.newExam = function(req, res) {
  console.log(req.body);

  var exam = new Exam();
  exam.date = new Date().toDateString().slice(4, 15);



  exam.score1 = req.body.score1;
  exam.score2 = req.body.score2;
  exam.score3 = req.body.score3;
  exam.score4 = req.body.score4;
  exam.score5 = req.body.score5;
  exam.score6 = req.body.score6;
  exam.score7 = req.body.score7;
  exam.score8 = req.body.score8;
  exam.score9 = req.body.score9;
  exam.score10 = req.body.score10;
  exam.score11 = req.body.score11;
  exam.totalScore = exam.score1 + exam.score2 + exam.score3 + exam.score4 + exam.score5 + exam.score6 + exam.score7 + exam.score8 + exam.score9 + exam.score10 + exam.score11;
  exam.user = req.body.user;
  console.log(exam)
  exam.save(function (err, exam){
    if(err){
      console.log('exam err', err);
    }
  });
  res.json(exam);

}

module.exports.findExams = function(req, res) {
  console.log(req.body);
  console.log(res.body);
  // if () {
  //   res.status(401).json({
  //     "message" : "UnauthorizedError: private profile"
  //   });
  // } else {
    Exam
      .find({})
      // .where('user').gte()
      .exec(function(err, exams) {
        res.status(200).json(exams);
      });
  // }


}

