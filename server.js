'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */


// Bootstrap db connection
	console.log(config.db);
var db = mongoose.connect(config.db, config.db_auth || {}, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport models
require('./config/passport')();

// Start the app by listening on <port>
//app.listen(models.port);
app.get('server').listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization

console.log('MEAN.JS application started on port:  ' + config.port);
