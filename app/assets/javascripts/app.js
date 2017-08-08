angular.module('CustomerSupport', ['ui.router','templates'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  	$stateProvider
  	  .state('home', {
  	  	url: '/',
  	  	templateUrl: 'home/_home.html'
  	  })
  	  .state('create_ticket', {
  	  	url: '/create_ticket',
  	  	templateUrl: 'tickets/_createTicket.html',
  	  	controller: 'TicketCtrl'
  	  });

  	  $urlRouterProvider.otherwise('/');
  }]);