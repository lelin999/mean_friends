appModule.controller('NewController', function($scope, $location, friendsFactory) {
  $scope.create = function() {
    friendsFactory.create($scope.new_friend, function(data) {
      if (data) {
        $location.url('/');
      } else {
        $scope.errormessage = "amumu no make friend"
      }
    });
  }
});
