var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

/* GET users listing. */
router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource
	var controller = controllers[resource]
  
  if(controller == null){
  	res.json({
  		confirmation: 'fail',
  		message: 'Invalid Resource'
  	})
  	return
  }
  
  controller.get(req.query, false)
  .then(function(results){
  	res.json({
  		confirmation: 'success',
  		results: results
  	})
  })
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
 })

router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]
	
	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.getById(req.params.id, false)
	.then(function(result){
		res.json({
			confirmation: 'success',
			result: result
		})
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: 'Not found'
		})
	})
})

router.put('/:resource/:id', function(req, res, next){
	console.log(JSON.stringify('req.body'))
	var resource = req.params.resource
	var controller = controllers[resource]
	var id = req.params.id

  if(controller == null){
  	res.json({
  		confirmation: 'fail',
  		message: 'Invalid Resource'
  	})
  	return
  }

	controller.update(id, req.body, false)
	.then(function(result){
		res.json({
			confirmation: 'success',
			result: result
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

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.post(req.body, false)
	.then(function(result){
		res.json({
			confirmation: 'success',
			result: result
		})
	})
	.catch(function(err){
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
})
module.exports = router;
