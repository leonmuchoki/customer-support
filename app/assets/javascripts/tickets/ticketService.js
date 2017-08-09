angular.module('CustomerSupport')
  .service('ticketServ', ['$http','$q', function($http,$q) {
    this.postTicket = function(ticketData) {
      var deferred = $q.defer();
      $http({
      	method: 'POST',
      	url: '/tickets.json',
      	data: ticketData
      }).then(function(response){
      	//success
      	deferred.resolve(response.data);
      }, function(error) {
      	deferred.reject(error);
      });

      return deferred.promise;
    };
  }]);