angular
  .module('health')
  .controller('examController', examController);

examController.$inject = ['$location'];
function examController($location) {
  var vm = this;



  // vm.onSubmit = function () {
  //   authentication
  //   .login(vm.credentials)
  //   .error(function(err){
  //     alert(err);
  //   })
  //   .then(function(){
  //     $location.path('profile');
  //   });
  // };

}
