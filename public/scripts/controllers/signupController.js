angular
  .module('health')
  .controller('signupController', signupController);

signupController.$inject = ['$http'];
function signupController ($http) {
  var vm = this;

  vm.signup = function(user){
    //TODO verify passwords are same
    console.log(user)
    $http({
      method: 'POST',
      url: '/signup',
      data: user
    }).then(function onSuccess(response){
      console.log(response.data)
    }, function onError(error){
      console.log('POST error ', error);
    });
  }

};
