angular.module('CustomerSupport')
  .controller('TicketCtrl', ['$state','$rootScope','ticketServ', function($state,$rootScope,ticketServ) {
  	this.err = '';
  	this.postData = function(subject,description) {
  		var ticketdata = {
  			subject: subject,
  			description: description
  		};
  		//post
  		ticketServ.postTicket(ticketdata).then(function(response) {
  		  //successfully posted
  		  var ticketstatus='Ticket created successfully.';
          $rootScope.$broadcast("ticketCreated",ticketstatus);
          console.log('ticket created ->' + JSON.stringify(response));
          $state.go('home');
  		},function(error) {
  		  //not posted
  		  this.err = 'ticket data not posted->' + error;
  		});
  	};
  }]);