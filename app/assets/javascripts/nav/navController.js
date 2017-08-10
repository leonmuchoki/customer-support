angular.module('CustomerSupport')
  .controller('NavCtrl', ['$scope','Auth', function($scope,Auth) {
  	var vm = this;
    
    vm.signedIn = Auth.isAuthenticated;
    vm.logout = Auth.logout;

    $scope.$on('devise:new-registration', function(event, user) {
      vm.user = user;
      vm.signedIn = Auth.isAuthenticated;
      console.log('devise:new-registration' + JSON.stringify(user.email));
    });
  }]);