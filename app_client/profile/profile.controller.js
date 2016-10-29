angular
  .module('health')
  .controller('profileController', profileController);

profileController.$inject = ['$location', 'attachedData'];
function profileController($location, attachedData) {
  var vm = this;


  attachedData.getProfile()
    .success(function(data) {
      console.log(data);
      vm.user = data;
    })
    .error(function (e) {
      console.log(e);
    });
}
