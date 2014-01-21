var mongoose = require('mongoose'), 
Schema = mongoose.Schema;
/*var UserName = new Schema({    
	firstName: String,
	lastName: String,
	title: String
});
var PostalAddress = new Schema({    
	type: String,
	streetNumber: String,
	streetName: String,
	city: String,
	stateOrProvice: String,
	country: String,
	postalCode: String,
});
var GeoLocation = new Schema({    
	latitude: Number,
	longitude: Number
});
var ContactInfo = new Schema({    
	postalAddress: [PostalAddress],
	geoLocation: [GeoLocation]
});
var ConsumerProfile = new Schema({    
	profileAttributes: []	
});
var MobileWallet = new Schema({

});*/
var ConsumerSchema = new Schema({
	userName: {    
		firstName: String,
		lastName: String,
		title: String
	},
	contactInfo: {    
		postalAddress: {
			type: String,
			streetNumber: String,
			streetName: String,
			city: String,
			stateOrProvice: String,
			country: String,
			postalCode: String,			
		},
		geoLocation: {    
			latitude: { type: Number, default: 31.0 },
			longitude: { type: Number, default: 100.0 }
		}
	},
	consumerProfile: { 
		profileAttributes: []	
	},
	mobileWallet: {
		
	}
});
module.exports = mongoose.model('consumers', ConsumerSchema);