angular.module('CustomerSupport')
  .controller('LoginCtrl',['$scope','$state','Auth','Notification', function($scope, $state, Auth, Notification) {
  	var vm = this;

  	vm.login = function(email, password) {
  	  var user = {
  	  	email: email,
  	  	password: password
  	  };

  	Auth.login(user).then(function(response) {
  	  //successful login
      $state.go('home');
  	  console.log('successful login ->' + JSON.stringify(response));
  	}, function(error) {
  		Notification.error({message: 'Invalid log in credentials. Please try again.', delay: 2000});
  	});
  	};
  }]);