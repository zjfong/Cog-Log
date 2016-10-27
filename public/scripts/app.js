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
    .when('/signup', {
      templateUrl: 'templates/signup',
      controllerAs: 'usersCtrl',
      controller: 'usersController'
    })
    .when('/exams', {
      templateUrl: 'templates/exam',
      controllerAs: 'examsCtrl',
      controller: 'examsController'
    })
    .when('/users', {
      templateUrl: 'templates/user',
      controllerAs: 'usersCtrl',
      controller: 'usersController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
