console.log('WelcomeController is working')

angular
  .module('health')
  .controller('welcomeController', welcomeController);

function welcomeController () {
  var vm = this;

  vm.test = "test"
}
