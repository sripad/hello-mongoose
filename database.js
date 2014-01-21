var mongoose = require('mongoose');
var devDb="mongodb://sripad:sripad@ds027739.mongolab.com:27739/heroku_app21405342";
mongoose.connect(devDb);
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});