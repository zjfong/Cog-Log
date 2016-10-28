console.log('app.js is working');

angular
  .module('health', ['ngRoute'])
  .config(config)
  .checkLoggedin(checkLoggedin);


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
      resolve: {
        logincheck: checkLoggedin
      }
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

checkLoggedin.$inject = ['$q', '$timeout', '$http', '$location', '$rootScope'];
function checkLoggedin ($q, $timeout, $http, $location, $rootScope) {
  console.log("ThisCheckedLoggedin")


  var deferred = $q.defer();
  $http({
      method: 'GET',
      url: '/loggedin'
    }).then(function onSuccess(response){
      console.log(response.data)
      $rootScope.errorMessage = null;
      if(user!=='0'){
        $rootScope.currentUser = user;
        console.log(user)
        deferred.resolve();
      } else {
        $rootScope.errorMessage = 'You need to log in.';
        deferred.reject();
        $location.url('/login');
      }
    })



  // $http.get('/loggedin').success(function(user){
  //   console.log(user)
  //   $rootScope.errorMessage = null;
  //   if(user!=='0'){
  //     $rootScope.currentUser = user;
  //     console.log(user)
  //     deferred.resolve();
  //   } else {
  //     $rootScope.errorMessage = 'You need to log in.';
  //     deferred.reject();
  //     $location.url('/login');
  //   }
  // })


}


