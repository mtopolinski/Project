
var mongoose = require('mongoose');
mongoose.set('debug', true);
var Movie = mongoose.model('Movie');

exports.create = function(req, res) {
    // Create and Save a new Movie
    if(!req.body.content) {
        res.status(400).send({message: "Movie cannot be empty"});
    }

    var movie = new Movie({Username: req.body.Username || "Untitled", Password: req.body.Password || 'Unititled', Email: req.body.email || 'No Email', Movies: {Titles: req.body.Titles || "Untitled Movies"}});

    movie.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Movie."});
        } else {
            res.json(data);
        }
    });
};


exports.findUser = function(req, res) {
    // Retrieve Movies matching Username
    Movie.find({_id: req.params.id}, function(err, data) {

        console.log(err, data);

        if(err) {
            res.status(500).send({message: "Could not find matching ID " + req.params.id});
        } else {
            res.json(data);
        }
    });
};

exports.findUsername = function(req, res) {
    // Retrieve Movies matching Username
    Movie.find(req.params.Username, function(err, data) {

        console.log(err, data);

        if(err) {
            res.status(500).send({message: "Could not find matching Username " + req.params.Username});
        } else {
            res.json(data);
        }
    });
};

exports.findTitle = function(req, res) {
    // Find a single Movie with a Title
    Movie.find({_id: req.params.id, 'Movies.Title': req.params.title}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not find matching Movie Title " + req.params.title});
        } else {
            res.json(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a Movie with a specified Title
    Movie.find(req.params.title, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find Title " + req.params.title});
        }

        movie.title = req.body.title;

        movie.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update Movie by Title " + req.params.title});
            } else {
                res.json(data);
            }
        });
    });
};


exports.delete = function(req, res) {
    // Delete a Movie with the specified Title
    Movie.find({_id: req.params.id, 'Movies.Title': req.params.title}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not locate Movie Title " + req.params.title});
        } else if (data) {
            var array = data[0].Movie;

            for (m in array)
            {
                if (m.Title === req.params.title)
                {
                    console.log("testing");
                }
            }
            data.Movie.
            res.json({message: "Movie deleted"})
        }
    });
};

