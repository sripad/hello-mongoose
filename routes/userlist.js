var user = require('../models/user');
module.exports = UserList;

function UserList() { 
}
UserList.prototype = {
	createUser: function(req, res) {
		var u=new user();
		u.userName.firstName="Sripad";
		u.userName.lastName="Rao";
		u.userName.title="Mr.";
		u.save(function (err,savedUser) {
      		if(err) {
        		res.jsonp(err);
      		} else {
          		res.jsonp(savedUser);        
        	}
      	});
	},
	listUser: function(req, res) {
		user.find().exec(function(err, items) {
			res.jsonp(items);
		});
	},
        
	deleteUsers: function(req, res) {
		user.remove().exec(function(err, items) {
			res.jsonp("All users deleted");
		});
	}
};
