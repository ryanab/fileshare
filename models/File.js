var mongoose = require('mongoose')

var FileSchema = new mongoose.Schema({
	fileUrl: { type: String, default: '' },
	fileTitle: { type: String, default: '' },
	fileCategory: { type: String, default: '' }, // this will be determined in controller
	fileDescription: { type: String, default: '' },
	fileExtension: { type: String, default: '' },
	profile: { type: mongoose.Schema.Types.Mixed, default: {} },
	timestamp: { type: Date, default: Date.now }
})

FileSchema.methods.summary = function () {
	var summary = {
		fileUrl: this.fileUrl,
		fileTitle: this.fileTitle,
		fileCategory: this.fileCategory,
		fileDescription: this.fileDescription,
		fileExtension: this.fileExtension,
		profile: this.profile,
		timestamp: this.timestamp,
		id: this._id.toString()
	}
	return summary
}

module.exports = mongoose.model('FileSchema', FileSchema)