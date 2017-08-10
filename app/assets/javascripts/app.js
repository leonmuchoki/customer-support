angular.module('CustomerSupport', ['ui.router','templates','ui-notification','Devise'])
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
  	  })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'RegisterCtrl as regCtrl'
      });

  	  $urlRouterProvider.otherwise('/');
  }]);