var mongoose = require('mongoose')

var FileSchema = new mongoose.Schema({
	fileName: {type:String, default: ''},
	fileType: {type:String, default:''},
	profile: {type:mongoose.Schema.Types.Mixed, default: {}},
	timestamp: {type:Date, default:Date.now}
})

FileSchema.methods.summary = function(){
	var summary = {
		fileName: this.fileName,
		fileType: this.fileType,
		profile: this.profile,
		timestamp: this.timestamp,
		id: this._id.toString()
	}
}

module.exports = mongoose.model('FileSchema', FileSchema)