var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
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



var Book = module.exports = mongoose.Model("Book", bookSchema);


