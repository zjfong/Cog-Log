angular
  .module('health')
  .controller('NavigationController', NavigationController);

NavigationController.$inject = ['$location', 'authentication'];
function NavigationController($location, authentication) {
  var vm = this;

  vm.isLoggedIn = authentication.isLoggedIn();

  vm.currentUser = authentication.currentUser();

}
