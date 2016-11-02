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
      vm.successAlert();
    });
  };

  vm.errorAlert = function () {
    var message = '<strong> Oops!</strong> Incorrect email or password.';
    var id = Flash.create('danger', message, 3000, {class: 'custom-class', id: 'custom-id'}, true);
  }

  vm.successAlert = function () {
    var message = 'Successfully logged in.';
    var id = Flash.create('success', message, 3000, {class: 'custom-class', id: 'custom-id'}, true);
  }

}
