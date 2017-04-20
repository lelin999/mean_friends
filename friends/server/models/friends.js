var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: [true, "failed to create first name"], minlength: 3},
	last_name: {type: String, required: [true, "failed to create last name"], minlength: 3},
	birthday: Date
}, {timestamp: true});

var Friend = mongoose.model('Friend', FriendSchema);