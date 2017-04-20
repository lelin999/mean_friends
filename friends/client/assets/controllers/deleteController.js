appModule.controller('DeleteController', function($scope, $routeParams, $location, friendsFactory) {
  $scope.friend = {};

  var show_friend = function(data) {
  	$scope.friend = data;
  };

  friendsFactory.findOne($routeParams.id, show_friend);

  $scope.delete = function(id) {
  	friendsFactory.delete($routeParams.id, $scope.redirect);
  }

  $scope.redirect = function() {
  	$location.url('/');
  }
});