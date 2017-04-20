appModule.controller('IndexController', function($scope, $location, friendsFactory) {
  $scope.friends = [];

  function get_friends(data) {
    $scope.friends = data;
    if (friendsFactory.error_messages) {
      $scope.errormessage = friendsFactory.error_messages.pop();
    }
  }

  var index = function () {
    friendsFactory.index(get_friends);
  }
  index();

  $scope.move_to_new = function() {
    $location.url('/new');
  };
});