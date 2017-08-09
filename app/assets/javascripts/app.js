angular.module('CustomerSupport', ['ui.router','templates','ui-notification'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  	$stateProvider
  	  .state('home', {
  	  	url: '/',
  	  	templateUrl: 'home/_home.html',
  	  	controller: 'HomeCtrl'
  	  })
  	  .state('create_ticket', {
  	  	url: '/create_ticket',
  	  	templateUrl: 'tickets/_createTicket.html',
  	  	controller: 'TicketCtrl'
  	  });

  	  $urlRouterProvider.otherwise('/');
  }]);