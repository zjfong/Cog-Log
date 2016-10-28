angular
  .module('health')
  .controller('signupController', signupController);

signupController.$inject = ['$http', '$rootScope'];
function signupController ($http, $rootScope) {
  var vm = this;

  vm.signup = function(user){
    //TODO verify passwords are same
    if(user.password === user.password2){
    console.log(user)
      $http({
        method: 'POST',
        url: '/signup',
        data: user
      }).then(function onSuccess(response){
        console.log(response.data)
        $rootScope.currentUser = user;
      }, function onError(error){
        console.log('POST error ', error);
      });
    }
  }

};
