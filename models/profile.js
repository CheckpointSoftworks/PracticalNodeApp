var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Profile = new Schema({
    username: String,
    password: String,
	height: String,
	age: String,
	weight: String,
	etc: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Profile', Profile);