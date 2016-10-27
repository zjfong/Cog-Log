angular
  .module('health')
  .controller('WelcomeController', WelcomeController);

WelcomeController.$inject = ['$location', '$http', '$rootScope'];
function WelcomeController ($location, $http, $rootScope) {
  var vm = this;

  vm.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/home");
      });
  }
}
