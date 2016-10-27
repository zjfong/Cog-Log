angular
  .module('health')
  .controller('loginController', loginController);

loginController.$inject = ['$location', '$http', '$rootScope'];
function loginController ($location, $http, $rootScope) {
  var vm = this;

  vm.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $location.url("/profile");
      });
  }
}
