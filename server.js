var express = require('express'),
    path = require('path'),
    http = require('http');
var app = express();
require('./database');
var UserList = require('./routes/userlist');
var userList = new UserList();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.multipart());
    app.use(express.logger());
  	app.use(express.cookieParser());
    app.use(express.methodOverride());
  	app.use(express.session({ secret: 'keyboard cat' }));
  	app.use(app.router);
    app.use(express.compress());
    app.use(express.static(path.join(__dirname, 'public')));
});
// All routs are defined here
app.get('/user/create', userList.createUser.bind(userList));
app.get('/user/list', userList.listUser.bind(userList));
app.get('/user/delete', userList.deleteUsers.bind(userList));

//Home
app.get('/', function(req,res) {
	res.jsonp({status: 200,message: "Hello"});
});
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
