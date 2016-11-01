angular
  .module('health')
  .controller('loginController', loginController);

loginController.$inject = ['$location', 'authentication', 'Flash'];
function loginController($location, authentication, Flash) {
  var vm = this;

  vm.credentials = {
    email : "",
    password : ""
  };

  vm.onSubmit = function () {
    authentication
    .login(vm.credentials)
    .error(function(err){
      console.log('Incorrect email address or password');
      vm.errorAlert();
    })
    .then(function(){
      $location.path('profile');
    });
  };

  vm.errorAlert = function () {
    var message = '<strong> Oops!</strong> Incorrect email or password.';
    var id = Flash.create('danger', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

}
