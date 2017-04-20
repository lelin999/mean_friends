var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req, res){
    console.log(req.body);
    Friend.find({}, function(err, friends) {
      if (!err) {
        res.json({message: "Success", friends: friends});
      } else {
        res.json({message: "Error", error: err});
      }
    })
  },

  findOne: function(req, res) {
    var id = req.params.id;
    console.log("this is some id maybe:", req.params.id);
    Friend.findOne({_id: id}, function(err, friend) {
      if (!err) {
        res.json({message: "Success", friend: friend});
      } else {
        res.json({message: "Error", error: err});
      }
    })
  },

  create: function(req, res){
    var friend = new Friend();
    friend.first_name = req.body.first_name;
    friend.last_name = req.body.last_name;
    friend.birthday = req.body.birthday;
    friend.save(function(err) {
      if (!err) {
        res.json({message: "Success", friend: friend}); 
      } else {
        res.json({message: "Error", error: err});
      }
    })
  },
  update: function(req, res){
    // console.log('we are at freinds.js')
    console.log(req.body);
    var id = req.params.id;
    Friend.findOne({_id: id}, function(err, friend) {
      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = req.body.birthday;
      friend.save(function(err) {
        if (!err) {
          res.json({message: "Success", friend: friend}); 
        } else {
          res.json({message: "Error", error: err});
        }
      })
    })
  },
  delete: function(req, res){
    var id = req.params.id;
    Friend.remove({_id: id}, function(err, friends) {
      if (!err) {
        res.json({message: "Success"});
      } else {
        res.json({message: "Error", error: err});
      }
    });
  }
}