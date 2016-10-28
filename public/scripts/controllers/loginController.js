angular
  .module('health')
  .controller('loginController', loginController);

loginController.$inject = ['$http'];
function loginController ($http) {
  var vm = this;

  vm.login = function(user){
    console.log(user)
    $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function onSuccess(response){
      console.log(response.data)
    }, function onError(error){
      console.log('POST error ', error);
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
