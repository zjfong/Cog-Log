console.log('app.js is working');

angular
  .module('health', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/welcome',
      controllerAs: 'welcomeCtrl',
      controller: 'welcomeController'
    })
    .when('/login', {
      templateUrl: 'templates/login',
      controllerAs: 'loginCtrl',
      controller: 'loginController'
    })
    .when('/signup', {
      templateUrl: 'templates/signup',
      controllerAs: 'signupCtrl',
      controller: 'signupController'
    })
    .when('/profile', {
      templateUrl: 'templates/profile',
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
