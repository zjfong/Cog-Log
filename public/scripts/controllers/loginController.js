angular
  .module('health')
  .controller('loginController', loginController);

loginController.$inject = ['$http', '$rootScope'];
function loginController ($http, $rootScope) {
  var vm = this;

  vm.login = function(user){
    console.log(user)
    $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function onSuccess(response){
      console.log(response.data)
      $rootScope.currentUser = user;
    }, function onError(error){
      console.log('login error ', error);
    });
  }

  // vm.login = function(user){
  //   console.log(user)
  //   $http('/login', user)
  //   .sucess(function(response){
  //     console.log(response);
  //   });
  // };

};
