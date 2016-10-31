angular
  .module('health')
  .controller('examController', examController);

examController.$inject = ['$location', '$http', 'authentication'];
function examController($location, $http, authentication) {
  var vm = this;
  vm.newExam = {};
  vm.currentUser = authentication.currentUser();
  console.log(vm.currentUser);

  $http({
    method: 'GET',
    url: '/api/exams'
  }).then(function onSuccess (response){
    vm.examsList = response.data;
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



}
