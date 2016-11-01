angular
  .module('health')
  .controller('registerController', registerController);

registerController.$inject = ['$location', 'authentication'];
function registerController($location, authentication) {
  var vm = this;

  vm.credentials = {
    name : "",
    email : "",
    password : ""
  };

  vm.onSubmit = function () {
    authentication
      .register(vm.credentials)
      .error(function(err){
        alert(err);
      })
      .then(function(){
        if (!authentication.isLoggedIn()) {
          $location.path('login');
        }
        $location.path('profile');
      });
  };
};
