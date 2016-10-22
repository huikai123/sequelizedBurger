var Burger = require ('../models/')["Burger"];
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.redirect('/burgers')
});

router.get('/burgers', function (req, res) {
	Burger.findAll()
	.then(function(burger_data){
		console.log(burger_data);
		return res.render('index', {burger_data});
	})
});

router.post('/burgers/create', function (req, res) {
	Burger.create({burger_name: req.boby.burger_name})
	.then(function(newBurger){
		console.log(newBurger);
		res.redirect('/');
	});
});

router.put('/burgers/update', function (req, res) {
	Burger.findOne({where:{id:req.body.id}})
	.then(function(thisBurger){
		return thisBurger.updateAttributes({
			devoured:true
		}).then(function(){
			res.redirect('/');
		})
	});
});


module.exports = router;
