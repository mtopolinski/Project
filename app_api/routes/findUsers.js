var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.set('debug', true);
var Movie = mongoose.model('Movie');

/* GET login. */
router.get('/', function (req, res, next) {
    res.render('findUsers', {title: 'findUsers'});
    res.send('Hello, please search by username or email:\n');
});


router.post('/', function (req, res, next) {
    if (req.body.Username === '' && req.body.Email !== '') {
        console.log('locating by email as username is blank');
        var email = Movie.find({"Email": req.body.Email});
        console.log(email);
        res.redirect('/api/list/users/' + email + '/movies');
    }
    else if (req.body.Username !== '' && req.body.Email === '') {
        console.log('do I get HERE');
        Movie.find({Username: req.body.Username}, 'id', function (err, userId) {
            console.log(userId);
            if (err) {

                return handleError(err);

            }
            else {

                res.redirect('http://localhost:3000/api/list/' + userId + '/movies');
            }

        })
    }

    else {
        res.redirect('/login');
    }

});

module.exports = router;