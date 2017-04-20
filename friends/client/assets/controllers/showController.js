appModule.controller('ShowController', function($scope, $location, $routeParams, friendsFactory) {
  $scope.friend = {};

  var show_friend = function(data) {
    $scope.friend = data;
  };

  friendsFactory.findOne($routeParams.id, show_friend);
});
