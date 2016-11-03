angular
  .module('health')
  .controller('examController', examController);

examController.$inject = ['$location', '$http', 'authentication', 'Flash'];
function examController($location, $http, authentication, Flash) {
  var vm = this;
  vm.data=[];
  vm.newExam = {};
  vm.currentUser = authentication.currentUser();
  // console.log(vm.currentUser);

  $http({
    method: 'GET',
    url: '/api/exams'
  }).then(function onSuccess (response){
    vm.examsList = response.data;
    // console.log('exam list ', vm.examsList)

    vm.scoreList = vm.examsList.filter(function totalScore(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam;
      }
    })
    vm.scoreList2 = vm.scoreList.map(function totalScore(exam){
      if(!undefined){
        return exam.totalScore;
      }
    })
    vm.orientationList = vm.examsList.filter(function orientation(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam;
      }
    })
    vm.orientationList2 = vm.orientationList.map(function orientation(exam){
      if(!undefined){
        return (exam.score1 + exam.score2);
      }
    })
    vm.registrationList = vm.examsList.filter(function registration(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam;
      }
    })
    // console.log(vm.registrationList)
    vm.registrationList2 = vm.registrationList.map(function registration(exam){
      if(!undefined){
        return exam.score3;
      }
    })
    // console.log(vm.registrationList2)
    vm.attenCalcList = vm.examsList.filter(function attenCalc(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam;
      }
    })
    vm.attenCalcList2 = vm.attenCalcList.map(function attenCalc(exam){
      if(!undefined){
        return exam.score4;
      }
    })
    vm.recallList = vm.examsList.filter(function recall(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam;
      }
    })
    vm.recallList2 = vm.recallList.map(function recall(exam){
      if(!undefined){
        return exam.score5;
      }
    })
    vm.langPraxisList = vm.examsList.filter(function langPraxis(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam;
      }
    })
    vm.langPraxisList2 = vm.langPraxisList.map(function langPraxis(exam){
      if(!undefined){
        return (exam.score6 + exam.score7 + exam.score8 + exam.score9 + exam.score10 + exam.score11);
      }
    })
    // console.log(vm.scoreList2);
    // console.log(vm.orientationList2);
    // console.log(vm.registrationList2);
    vm.data.push(vm.scoreList2, vm.orientationList2, vm.registrationList2, vm.attenCalcList2, vm.recallList2, vm.langPraxisList2);

    vm.label = vm.examsList.filter(function label(exam){
      if(exam.user[0] === vm.currentUser._id){
        return exam
      }
    })
    vm.labels = vm.label.map(function labels(exam){
      if(true){
        return exam.date;
      }
    })
    // console.log(vm.labels)

  }, function onError (error){
    console.log('GET error ', error);
  });


  vm.onSubmit = function () {
    console.log(vm.newExam)
    vm.newExam.user = vm.currentUser._id;
    $http({
      method: 'POST',
      url: '/api/exams',
      data: vm.newExam
    }).then(function onSuccess(response){
      console.log(response);
      $location.path('stats');

    }, function onError(error){
      console.log('POST error ', error);
      vm.errorAlert();
    });
  };

  vm.deleteExam = function (exam) {
    console.log(exam)
    if (confirm('Are you sure you want to delete this?')) {
      $http({
        method: 'DELETE',
        url: '/api/exams/'+ exam._id
      }).then(function onSuccess(response) {
        var index = vm.examsList.indexOf(exam);
        vm.examsList.splice(index,1)
      }, function errorCallback(response) {
        console.log('DELETE error ', response);
      });
    }
  }

  vm.errorAlert = function () {
    var message = 'An error occurred while submitting the form. Please make sure all fields are filled out.';
    var id = Flash.create('danger', message, 5000, {class: 'custom-class', id: 'custom-id'}, true);
  }

  vm.series = ['Total Score', 'Orientation', 'Registration', 'Attention and Calculation', 'Recall', 'Language and Praxis'];
  vm.colors = [{fillColor:["#00FF00"]}];
  vm.lineOptions = {
    elements: {
      line: {
        tension: 0
      }
    }
  };

  vm.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };


}
