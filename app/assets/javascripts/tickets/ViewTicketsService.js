angular.module('CustomerSupport')
  .service('ViewTicketServ', ['$http','$q', function($http,$q) {
  	this.getAllTickets = function() {
  	  var deferred = $q.defer();

  	  $http({
  	  	method: 'GET',
  	  	url: '/tickets.json'
  	  }).then(function(response) {
  	  	deferred.resolve(response.data);
  	  }, function(error) {
  	  	deferred.reject(error);
  	  });

  	  return deferred.promise;
  	};
  }])