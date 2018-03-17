var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var request = require('request');

var mongoose = require('mongoose');


/* GET list. */
router.get('/', function(req, res, next) {

    //this is what it should be, I hard coded it to make it work as the route is set up now.
    //const path = 'http://localhost:3000/api/list/' + req.params.id + '/movies';


    const path = 'http://localhost:3000/api/list/5aad7c5620a1f4715f999c5f/movies';

    const requestOptions = {
        url : path,
        method : 'GET',
        json : {}
    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('listMovies', { title: 'listMovies', movie: body});
        })
    );


});




module.exports = router;

