angular.module('CustomerSupport')
  .controller('HomeCtrl',['$scope','$rootScope','Notification', function($scope,$rootScope,Notification) {

  	$rootScope.$on('ticketCreated', function(event, data) {
     Notification.success({message: 'Ticket created successfully.', delay: 20000});
     console.log('ticket created ->:' + data);
  	});

  	//$scope.$on('$destroy',listenTicketCreate);
  	
  }]);