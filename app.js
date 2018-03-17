var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./app_api/models/db.model.js');

var users = require('./routes/users');
var findUsers = require('./app_api/routes/findUsers');
var listMovies = require('./app_api/routes/listMovies');
var editMovies = require('./app_api/routes/editMovies');
var addMovies = require('./app_api/routes/addMovies');
var login = require('./app_api/routes/login');
var routesApi = require('./app_api/routes/index');
var routes = require('./app_server/routes/index');

var app = express();

var dbConfig = require('./app_api/models/db.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;



mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to the Movie Watchlist page."});
});

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/users', users);
app.use('/listMovies', listMovies);
app.use('/editMovies', editMovies);
app.use('/addMovies', addMovies);
app.use('/login', login);
app.use('/findUsers', findUsers);
app.use('/api', routesApi);


// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to Movie Watchlist Project."});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
