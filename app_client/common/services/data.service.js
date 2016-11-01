angular
  .module('health')
  .service('attachedData', attachedData);

attachedData.$inject = ['$http', 'authentication'];
function attachedData ($http, authentication) {

  var getProfile = function () {
    return $http.get('/api/profile', {
      headers: {
        Authorization: 'Bearer '+ authentication.getToken()
      }
    });
  };

  return {
    getProfile : getProfile
  };
}
