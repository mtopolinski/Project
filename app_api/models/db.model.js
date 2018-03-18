var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/movie';
mongoose.connect(dbURI);

// Configuring the database


mongoose.Promise = global.Promise;


mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

var MovieSchema = new mongoose.Schema({
    Username: String,
    Password: String,
    Movies: {
        Titles: String
    }
});

module.exports = mongoose.model('Movie', MovieSchema);