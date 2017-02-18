var Profile = require('../models/Profile')
var Promise = require('bluebird')
var bcrypt = require('bcryptjs')

module.exports = {
  get: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Profile.find(params, function(err, profiles){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(profiles)
          return
        }
        var list = []
        profiles.forEach(function(profile){
          list.push(profile.summary())
        })
        resolve(list)
        return
      })
    })
  },

   getById: function(id, isRaw){
    return new Promise(function(resolve, reject){
      Profile.findById(id, function(err, profile){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(profile)
          return
        }
        resolve(profile.summary())
        return
      })
    })   
  },

  update: function(id, params, isRaw){
    return new Promise(function(resolve, reject){
      // still need to add password changing functionality
      Profile.findByIdAndUpdate(id, params, {new: true}, function(err, profile){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(profile)
          return
        }
        resolve(profile.summary())
      })
    })
  },

  create:function(params, isRaw){
    return new Promise(function(resolve, reject){
      if(params['password']) //check for null
        params['password'] = bcrypt.hashSync(params.password, 10)            

      Profile.create(params, function(err, profile){
        if(err){
          reject(err)
          return
        }
        if(isRaw){
          resolve(profile)
          return
        }
        console.log(JSON.stringify(profile))
        resolve(profile.summary())
      })
    })
  }
}