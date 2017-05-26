var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	name : {
		type : String,
		required : true,
	},
	create_date : {
		type : Date,
		default : Date.now
	} 
});



var Genre = module.exports = mongoose.model('Genre', genreSchema);


//Get Genres
module.exports.getGenres = function(callback, limit) {
	Genre.find({}, callback).limit(limit);
};

//Get genre by id
module.exports.getGenre = function(id, callback){
	Genre.findById(id, callback);
};

//Create new Genre- returns created genre.
module.exports.createGenre = function(genre, callback) {
	Genre.create(genre, callback);
};

//Delete genre
module.exports.deleteGenre = function(id, callback){
	var query = {_id : id};
	Genre.remove(query, callback);
};
