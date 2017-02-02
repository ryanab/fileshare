var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')
var ProfileController = require('../controllers/ProfileController')

/* GET users listing. */
router.get('/:action', function(req, res, next) {
  var action = req.params.action

  if(action=='currentuser'){
    if(req.session == null){
      res.json({
        confirmation: 'success',
        user: null
      })
      return
    }

    if(req.session.token==null){
      res.json({
        confirmation: 'success',
        user: null
      })
      return
    }

    jwt.verify(req.session.token, process.env.TOKEN_SECRET, function(err, decoded){
      if(err){
        req.session.reset()
        res.json({
          confirmation: 'success',
          user: null
        })
        return
      }
      ProfileController
      .getById(decoded.id, false)
      .then(function(result){
        res.json({
          confirmation: 'success',
          user: result
        })
        return
      })
      .catch(function(err){
        res.json({
          confirmation: 'fail',
          message: err
        })
        return
      })
    })
  }

  if(action=='logout'){
    req.session.reset()
    res.json({
      confirmation: 'success',
      user: null
    })
    return
  }
})

router.post('/:action', function(req, res, next){
  var action = req.params.action

  if(action=='register'){
    ProfileController
    .create(req.body, false)
    .then(function(result){
			var token = jwt.sign({id:result.id}, process.env.TOKEN_SECRET, {expiresIn:4000})
      req.session.token = token

      res.json({
        confirmation: 'success',
        user: result,
        token: token
      })
      return
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    })

  }

})

module.exports = router
