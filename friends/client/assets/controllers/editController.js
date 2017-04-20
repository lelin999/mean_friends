appModule.controller('EditController', function($scope, friendsFactory, $location, $routeParams) {
  $scope.friend = {};
  $scope.editFriend = {}
  var show_friend = function(data) {
    $scope.friend = data;
    $scope.editFriend.first_name = $scope.friend.first_name;
    $scope.editFriend.last_name = $scope.friend.last_name;
    $scope.editFriend.birthday = new Date($scope.friend.birthday);
  };

  friendsFactory.findOne($routeParams.id, show_friend);

  var redirect = function() {
    $location.url('/');
  }

  $scope.edit = function() {
    friendsFactory.update($routeParams.id, $scope.editFriend, redirect);
  };
  
});