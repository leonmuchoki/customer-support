angular.module('CustomerSupport')
  .controller('NavCtrl', ['$scope','Auth','Notification', function($scope,Auth,Notification) {
  	var vm = this;
    
    vm.signedIn = Auth.isAuthenticated;
    vm.logout = Auth.logout;

    $scope.$on('devise:new-registration', function(event, user) {
      vm.user = user;
      console.log('devise:new-registration' + JSON.stringify(user.email));
    });

    $scope.$on('devise:login', function(event, user) {
      vm.user = user;
      Notification.success({message: 'You have logged in successfully.', delay: 3000});
    });
  }]);