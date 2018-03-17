var express = require('express');
var router = express.Router();
var movie = require('../controllers/controller.js');

// Create a new Movie
router.post('/list/:id/movies/', movie.create);

// Get all Movies matching ID
router.get('/list/users/:Username/movies', movie.findUsername);

// Get all Movies matching ID
router.get('/list/:id/movies', movie.findUser);

// Retrieve a single Movie matching Title
router.get('/list/:id/movies/:title', movie.findTitle);

// Update a Movie with specified Title
router.put('/list/:id/movies/:title', movie.update);

// Delete a Movie with specified Title
router.delete('/list/:id/movies/:title ', movie.delete);

module.exports = router;
