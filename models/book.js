var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	name : {
		type : String,
		required : true,
	},
	create_date : {
		type : Date,
		default : Date.now
	},
	genre : {
		type : String,
		required : true,
	},
	author : {
		type : String
	},
	description : {
		type : String
	},
	publisher : {
		type : String
	},
	pages : {
		type : String
	},
	image_url : {
		type : String
	},
	buy_url : {
		type : String
	}
});


var Book = module.exports = mongoose.model("Book", bookSchema);


//Get all books
module.exports.getBooks = function(callback, limit) {
	Book.find({}, callback).limit(limit);
};

//Get book by id
module.exports.getBook = function(id, callback) {
	Book.findById(id, callback);
};

//Create book
module.exports.createbook = function(book, callback){
	Book.create(book, callback);
};

//Delete book
module.exports.deleteBook = function(id, callback){
	var query = {_id : id};
	Genre.remove(query, callback);
};




