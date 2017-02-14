var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
	email: {type:String, default: ''},
	password: {type:String, default: ''},
	firstName: {type:String, default: ''},
	image: {type: String, default:''},
	timestamp: {type:Date, default:Date.now}
})

ProfileSchema.methods.summary = function(){
	var summary = {
		email: this.email,
		password: this.password,
		firstName: this.firstName,
		timestamp: this.timestamp,
		image: this.image,
		id: this._id.toString()
	}
	return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)