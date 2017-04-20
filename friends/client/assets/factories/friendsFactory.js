appModule.factory('friendsFactory', function($http) {
  var factory = {};
  var friends = [];

  factory.error_messages = [];
  factory.array = [];
  factory.array2= [];

  factory.index = function(callback) {
    $http.get('/friends').then(function(returned_data){
      if (returned_data.data.message !== "Error") {
        friends = returned_data.data.friends;
        callback(friends);  
      } else {
        callback(false);
      }
    });
  }

  factory.create = function(newfriend, callback) {
    $http.post('/friends', newfriend).then(function(returned_data){
      if (returned_data.data.message === 'Success'){
        factory.array.push("do it");
        factory.error_messages.push(returned_data.data.message);
        callback(true);
      } else {
        factory.array2.push('some shit went wrong');
        callback(false);
      }
    });
  }

  factory.findOne = function(id, callback) {
    $http.get('/friends/' + id).then(function(returned_data){
      if (returned_data.data.message === "Success") {
        friends = returned_data.data.friend;
        callback(friends);
      } else {
        callback(false);
      }
    }); 
  }

  factory.update = function(id, editFriend, callback) {
    console.log(editFriend);
    console.log(id);
    $http.put('/friends/' + id, editFriend).then(function(returned_data) {
      console.log(returned_data.data);
      if (returned_data.data.message === "Success"){
        callback();
      } else {
        error_messages.push(returned_data.data.message);
        callback();
      }
    });
  }

  factory.delete = function(id, callback) {
    $http.post('/friends/' + id).then(function(returned_data) {
      console.log(returned_data.data);
      if (returned_data.data.message === "Success") {
        callback();
      } else {
        error_messages.push(returned_data.data.message);
        callback();
      }
    });
  }

  return factory;
});