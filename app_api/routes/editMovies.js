var express = require('express');
var router = express.Router();

/* GET Editor List. */
router.get('/', function(req, res, next) {
    res.render('editMovies', { title: 'editMovies'});
});


/* Handle PUT from page form. */
router.put('/', function(req, res, next) {

    console.log('editMovies post from form');
    console.log(req.body.username);
    console.log(req.body.title);
    console.log(req.params.id);



    const path = 'http://localhost:3000/api/list/'+req.params.id+'/movies/'+req.params.title;

    var postdata = {
        Notes: {
            Username: req.body.username,
            Title: req.body.title
        }
    };
    const requestOptions = {
        url : path,
        method : 'PUT',
        json : postdata };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('editMovies', { title: 'editMovies', movies: body});
        })
    );
});


module.exports = router;