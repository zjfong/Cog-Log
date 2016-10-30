angular
  .module('health')
  .controller('examController', examController);

examController.$inject = ['$location'];
function examController($location) {
  var vm = this;
  vm.newExam = {};
  vm.currentUser = authentication.currentUser();


  vm.onSubmit = function () {

    $http({
      method: 'POST',
      url: '/api/exams',
      data: vm.newExam
    }).then(function onSuccess(response){
      console.log(response.data);

      $http({
        method: 'PUT',
        url: '/api/users/'+user._id,
        data: user
      }).then(function onSuccess(response) {
        var index = vm.usersList.indexOf(user);
        vm.usersList.splice(index,1,response.data)
      }, function errorCallback(response) {
        console.log('PUT error ', response);
      });


    }, function onError(error){
      console.log('POST error ', error);
    });
  };



}
