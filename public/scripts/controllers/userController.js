angular
  .module('health')
  .controller('userController', userController);

function userController () {
  var vm = this;

  vm.world = "world"
}
