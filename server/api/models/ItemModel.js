'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
	contents: [String],
	name: String
})

module.exports = mongoose.exports = mongoose.model('ItemsAAss',ItemsSchema);
