var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Genre = require('./models/genre');

app.use(bodyParser.json());


//Connect to database via mongoose
mongoose.connect('mongodb://localhost/bookstore');


app.get('/', function(req, res){
	res.send('Hello world!');
});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	}, null);
});


app.listen(3000, function(){
	console.log('Connected on port 3000');
});
