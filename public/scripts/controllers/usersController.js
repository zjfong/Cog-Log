angular
  .module('health')
  .controller('usersController', usersController);

usersController.$inject = ['$http', '$routeParams'];
function usersController ($http, $routeParams) {
  var vm = this;

  vm.world = "world";
  vm.newUser = {};

  $http({
    method: 'GET',
    url: '/api/users'
  }).then(function onSuccess (response){
    vm.usersList = response.data;
  }, function onError (error){
    console.log('GET error ', error);
  });

  vm.createUser = function(){

      console.log(vm.newUser)
    $http({
      method: 'POST',
      url: '/api/users',
      data: vm.newUser
    }).then(function onSuccess(response){
      console.log(response.data)
      vm.usersList.push(response.data);
    }, function onError(error){
      console.log('POST error ', error);
    });
  }
}
