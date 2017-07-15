'use strict'

var mongoose = require('mongoose'),
	Items = mongoose.model('ItemsAAss');

exports.getItems = function(req,res){
	Items.findOne({name:'iamnotstone'},function(err,items){
		if(err)
			res.send(err);
		else{
			if(items)
				res.json(items.contents);
		}
	});
}

exports.addItem = function(req,res){
	Items.findOne({name:'iamnotstone'},function(err,items){
		if(err)
			res.send(err);
		else{
			if(items)
			{
				items.contents.push(req.body.value);
				items.save(function(err){
					if(err)
						res.send(err);
					else{
						res.json({value: items.contents[items.contents.length-1]})
					}
				})
			}
			else{
				
				var aItems = new Items({contents: [req.body.value],name: 'iamnotstone'});
				aItems.save(function(err,aItems){
					if(err) return console.error(err);
					else{
						res.json({value: aItems.contents[aItems.contents.length-1]});
					}

				})
			}
		}
	})
}
