var mongoose = require("mongoose"),
	ToDoSchema,
	ObjectId = mongoose.Schema.Types.ObjectId;
ToDoSchema = mongoose.Schema({
	description: String,
	tags: [ String ],
	owner : { type: ObjectId, ref: "User" }
});
module.exports.ToDo = mongoose.model("ToDo", ToDoSchema);
ToDosController.index = function (req, res) {
	var username = req.params.username || null,
	respondWithToDos;
	// a helper function that gets ToDos
	// based on a query
	respondWithToDos = function (query) {
	ToDo.find(query, function (err, toDos) {
	if (err !== null) {
		res.json(500,err);
	 } else {
		res.json(200,toDos);
	 }
	});
};
if (username !== null) {
	// get the todos associated with the username
	User.find({"username":username}, function (err, result) {
		if (err !== null) {
			res.json(500, err);
	} else if (result.length === 0) {
		// no user with that id found!
		res.send(404);
	} else {
		// respond with this user's todo objects
		respondWithToDos({ "owner" : result[0].id });
	}
});
	} else {
		// respond with all todos
		respondWithToDos({});
	}
};