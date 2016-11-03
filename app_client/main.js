angular
    .module('health', ['ngRoute', 'ngAnimate', 'ngSanitize','ui.bootstrap', 'ngMaterial', 'ui.bootstrap', 'chart.js', 'ngFlash'])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/home/home.view.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/about', {
      templateUrl: '/home/about.view.html',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/register', {
      templateUrl: '/auth/register/register.view.html',
      controller: 'registerController',
      controllerAs: 'registerCtrl'
    })
    .when('/login', {
      templateUrl: '/auth/login/login.view.html',
      controller: 'loginController',
      controllerAs: 'loginCtrl'
    })
    .when('/logout', {
      template: '',
      controller: 'logoutController',
      controllerAs: 'logoutCtrl'
    })
    .when('/profile', {
      templateUrl: '/profile/profile.view.html',
      controller: 'profileController',
      controllerAs: 'profileCtrl'
    })
    .when('/exam', {
      templateUrl: '/exam/exam.view.html',
      controller: 'examController',
      controllerAs: 'examCtrl'
    })
    .when('/score', {
      templateUrl: '/exam/score.view.html',
      controller: 'examController',
      controllerAs: 'examCtrl'
    })
    .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

}

run.$inject = ['$rootScope', '$location', 'authentication'];
function run($rootScope, $location, authentication) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
      $location.path('/login');
    }
    if ($location.path() === '/score' && !authentication.isLoggedIn()) {
      $location.path('/login');
    }
    if ($location.path() === '/exam' && !authentication.isLoggedIn()) {
      $location.path('/login');
    }
  });
}


