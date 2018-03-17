var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.set('debug', true);
var Movie = mongoose.model('Movie');

/* GET login. */
router.get('/', function(req, res, next) {
    res.render('findUsers', { title: 'findUsers'});
    res.send('Hello, please search by username or email:\n');
});


router.post('/', function (req, res, next) {
    if (req.body.Username === '' && req.body.Email !== '') {
        console.log('locating by email as username is blank');
        var email = Movie.find( { "Email": req.body.Email } );
        console.log(email);
        res.redirect('/api/list/users/'+email+'/movies');
    }
    else if (req.body.Username !== '' && req.body.Email === '') {
        console.log('locating by username as email is blank');
        var objId = Movie.find({"matt":1},{"_id":1});
        console.log(objId);
        var user = Movie.findOne({Username: req.body.Username});
        console.log(user);
        console.log(user._id);
        res.redirect('/api/list/users/'+objId+'/movies');
    }

    else {
        res.redirect('/login');
    }

});

module.exports = router;