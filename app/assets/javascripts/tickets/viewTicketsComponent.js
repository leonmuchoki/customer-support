angular.module('CustomerSupport')
  .component('viewTickets', {
  	bindings: {
  		ticket: '<'
  	},
  	templateUrl: 'tickets/_viewTickets.html',
  	controller: 'ViewTicketsCtrl'
  }); 