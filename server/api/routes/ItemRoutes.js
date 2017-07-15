'use strict'
var path = require('path');
var itemController = require('../controllers/ItemController');

module.exports = function(app){
	app.route('/')
		.get(function(req,res){
			res.sendFile(path.resolve('./client/dist/html/index.html'));
		});

	app.route('/getItems')
		.get(itemController.getItems);

	app.route('/addItem')
		.post(itemController.addItem);
}
