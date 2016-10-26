angular
  .module('health')
  .controller('WelcomeController', WelcomeController);

function WelcomeController () {
  var vm = this;

  vm.test = "test"
}
