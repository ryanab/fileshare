var File = require('../models/File')
var Promise = require('bluebird')

module.exports = {
	get: function(params, isRaw){
		return new Promise(function(resolve, reject){
			var filters = {
				sort: {
					timestamp: -1
				}
			}
		File.find(params, null, filters, function(err, files){
			if(err){
				reject(err)
				return
			}
			if(isRaw == true)
				resolve(files)
			else {
				var list = []
				files.forEach(function(file, i){
					list.push(file.summary())
				})
				resolve(list)
			}
		})
	})
},
	getById: function(id, isRaw){
		return new Promise (function(resolve, reject){
			File.findById(id, function(err, file){
				if(err){
					reject(err)
					return
				}
				if(isRaw == true)
					resolve(file)
				else
					resolve(file.summary())
			})
		})
	},
	post: function(params, isRaw){
		return new Promise(function(resolve, reject){
			File.create(params, function(err, file){
				if(err){
					reject(err)
					return
				}
				if(isRaw == true)
					resolve(file)
				else
					resolve(file.summary())
			})
		})
	}
}