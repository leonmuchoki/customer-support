angular.module('CustomerSupport')
  .controller('ViewTicketsCtrl',['$scope','ViewTicketServ','Notification', function($scope,ViewTicketServ,Notification) {
    var vm = this;

    vm.ticketdata = {};
    this.getTickets = ViewTicketServ.getAllTickets().then(function(data) {
      //display tickets
      Notification.success({message: "Tickets Loaded Successfully", delay: 4000});
      console.log('all tickets->>>' + JSON.stringify(data));
      
      vm.ticketdata = data;
      
    });
  }]);