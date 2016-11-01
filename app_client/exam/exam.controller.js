angular
  .module('health')
  .controller('examController', examController);

examController.$inject = ['$location', '$http', 'authentication'];
function examController($location, $http, authentication) {
  var vm = this;
  vm.newExam = {};
  vm.currentUser = authentication.currentUser();
  console.log(vm.currentUser);

  // vm.status = {
  //   isopen: false
  // };

  // vm.toggled = function(open) {
  //   $log.log('Dropdown is now: ', open);
  // };

  $http({
    method: 'GET',
    url: '/api/exams'
  }).then(function onSuccess (response){
    vm.examsList = response.data;
    // vm.cleanDate();
    console.log('exam list ', vm.examsList)
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
    });
  };

  // var totalList = vm.examsList.map(function totalScore(exam){
  //   return exam.totalScore;
  // })

  vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
  vm.series = ['Series A', 'Series B'];
  vm.data = [
    // [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  vm.onClick = function (points, evt) {
    console.log(points, evt);
  };
  vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  vm.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };


  // vm.cleanDate = function(){
  //   vm.examsList.map(function examDate(exam){
  //     var myDate = exam.date;
  //     var newDate = dateFormat(myDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  //     // var newDate = (myDate.getMonth() + 1) + "/" + myDate.getDate() + "/" + myDate.getFullYear();
  //     exam.date = newDate;
  //   })
  // }



}
