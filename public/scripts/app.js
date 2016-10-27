angular
  .module('health', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/welcome'
    })
    .when('/signup', {
      templateUrl: 'templates/signup',
      controllerAs: 'usersCtrl',
      controller: 'usersController'
    })
    .when('/login', {
      templateUrl: 'templates/login',
      controllerAs: 'loginCtrl',
      controller: 'loginController'
    })
    .when('/profile', {
      templateUrl: 'templates/profile',
      resolve: {
        logincheck: checkLoggedin
      }
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
      redirectTo: '/home'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}
