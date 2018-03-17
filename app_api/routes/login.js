var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login'});
    res.send('Hello, please enter username and password to login:\n');
});




router.post('/', function (req, res, next) {
  		if (req.body.Username === 'matt' && req.body.Password === 'password') {
         			res.redirect('/listMovies');
         		} else {
         			res.redirect('/login');
         		}

         		});


module.exports = router;
