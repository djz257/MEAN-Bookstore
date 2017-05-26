var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var prettify = require('express-prettify');


//models
var Genre = require('./models/genre');
var Book = require('./models/book');

//middleware
app.use(bodyParser.json());
app.use(prettify({query : "pretty"}));

//Connect to database via mongoose
mongoose.connect('mongodb://localhost/bookstore');


app.get('/', function(req, res){
	res.send('Hello world!');
});

//Get Genres
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	}, null);
});

//Get Genre
app.get('/api/genres/:id', function(req, res){
	Genre.getGenre(req.params.id, function(err, genre) {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

//Create New Genre
app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.createGenre(genre, function(err, genre) {
		if(err){
			throw err;
		}
		res.json(genre);
	})
});


//Delete Genre
app.delete('/api/genres/:id', function(req, res) {
	Genre.deleteGenre(req.params.id, function(err, status){
		if(err){
			throw err;
		}
		res.json(status);
	})
})

//Get Books
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	}, null);
});

//Get Book
app.get('/api/books/:id', function(req, res){
	Book.getBook(req.params.id, function(err, book) {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//Create New Book
app.get('/api/books', function(req, res){
	var book = req.body;
	Book.createBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//Delete Book
app.delete('/api/books/:id', function(req, res) {
	Book.deleteBook(req.params.id, function(err, status){
		if(err){
			throw err;
		}
		res.json(status);
	})
})


app.listen(3000, function(){
	console.log('Connected on port 3000');
});
