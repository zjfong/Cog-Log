angular
  .module('health')
  .directive('navigation', navigation);

function navigation () {
  return {
    restrict: 'EA',
    templateUrl: '/common/directives/navigation/navigation.view.html',
    controller: 'NavigationController as navigationCtrl'
  }
}
