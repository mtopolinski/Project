var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login'});
    res.send('Hello, please enter username and password to login:\n');
});

module.exports = router;
