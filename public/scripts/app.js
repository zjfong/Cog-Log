angular
  .module('health', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/welcome',
      controllerAs: 'welcomeCtrl',
      controller: 'WelcomeController'
    })
    .when('/exams', {
      templateUrl: 'templates/exam',
      controllerAs: 'examCtrl',
      controller: 'examController'
    })
    .when('/users', {
      templateUrl: 'templates/user',
      controllerAs: 'userCtrl',
      controller: 'userController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
