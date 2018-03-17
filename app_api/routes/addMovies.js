var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var request = require('request');

/* GET Add page. */
router.get('/', function(req, res, next) {
    res.render('addMovies', { title: 'addMovies'});
});

/* Handle POST from page form. */
router.post('/', function(req, res, next) {

    console.log('addMovies post from form');
    console.log(req.body.Username);
    console.log(req.body.Titles);



    const path = 'http://localhost:3000/api/list/'+req.params.id+'/movies';
    var postdata = {

        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Titles: req.body.Titles

    };
    const requestOptions = {
        url : path,
        method : 'POST',
        json : postdata


    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('addMovies', { title: 'addMovies', movies: body});
        })
    );
});

module.exports = router;