angular
  .module('health')
  .controller('logoutController', logoutController);

logoutController.$inject = ['$window','authentication'];
function logoutController($window, authentication) {
    console.log('logged out');
    authentication.logout();
    $window.location.href = '/';
}
