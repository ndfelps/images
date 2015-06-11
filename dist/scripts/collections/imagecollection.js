var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var imageItem = require('../models/imagemodel.js');

module.exports = Backbone.Collection.extend({
	model: imageItem.imageItem,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/'
})