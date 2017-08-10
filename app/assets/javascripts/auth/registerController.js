angular.module('CustomerSupport')
  .controller('RegisterCtrl',['$scope','$rootScope','$state','Auth','Notification', function($scope,$rootScope,$state,Auth,Notification) {
  	var vm = this;

  	vm.register = function(email,password) {
  	  $scope.user = {
  	  	email: email,
  	  	password: password
  	  };
  	  console.log('are we clickin? Hellyea!');
  	  Auth.register($scope.user).then(function(response) {
  	  	$state.go('home');
        $rootScope.$broadcast('register:success',response);
        console.log('register successful:>' + JSON.stringify(response));
  	  }, function(error) {
  	  	console.log('error->' + JSON.stringify(error));
  	  	Notification.error({message: 'error during registration', delay: 2000});
  	  });
  	};
  }]);