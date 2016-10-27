angular
  .module('health')
  .controller('usersController', usersController);

usersController.$inject = ['$rootScope', '$http', '$routeParams', '$location'];
function usersController ($rootScope, $http, $routeParams, $location) {
  var vm = this;

  vm.world = "world";
  vm.newUser = {};

  vm.signup = function(user) {

    if (user.password == user.password2) {
      $http.post('/signup', user)
        .success(function(user) {
          $rootScope.currentUser = user;
          $location.url("/profile");
        });
    }
  }

  $http({
    method: 'GET',
    url: '/api/users'
  }).then(function onSuccess (response){
    vm.usersList = response.data;
    console.log(response.data)
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
