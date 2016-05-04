var User = require("../models/user.js"),
	mongoose = require("mongoose");
var UsersController = {};
UsersController.index = function (req, res) {
	console.log("index action called");
	res.send(200);
};
	// Show a User
UsersController.show = function (req, res) {
	console.log("show action called");
	res.send(200);
};
	// Create a new user
UsersController.create = function (req, res) {
	console.log("create action called");
	res.send(200);
};
// Update an existing user
UsersController.update = function (req, res) {
	console.log("update action called");
	Adding Users to Amazeriffic | 265
	res.send(200);
};
// Delete an existing user
	UsersController.destroy = function (req, res) {
	console.log("destroy action called");
	res.send(200);
};
	module.exports = UsersController;
	// This checks to see if a User already exists
User.find({}, function (err, result) {
	if (err !== null) {
	console.log("SOMETHING WENT HORRIBLY WRONG");
	console.log(err);
	} else if (result.length === 0) {
	console.log("Creating Example User...");
	var exampleUser = new User({"username":"semmy"});
	exampleUser.save(function (err, result) {
	if (err) {
	console.log(err);
		} else {
		console.log("Saved Example User");
		}
	});
	}
});