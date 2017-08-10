angular.module('CustomerSupport')
  .controller('HomeCtrl',['$scope','$rootScope','Notification', function($scope,$rootScope,Notification) {

  	$rootScope.$on('ticketCreated', function(event, data) {
     Notification.success({message: 'Ticket created successfully.', delay: 2000});
     console.log('ticket created ->:' + data);
  	});

  	$rootScope.$on('register:success', function(event, data) {
  	  Notification.success({message: 'You have signed up successfully.', delay: 20000});
  	  console.log('home on register->' + JSON.stringify(data));
  	});
  	
  }]);