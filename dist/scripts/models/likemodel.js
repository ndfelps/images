var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
	defaults: {
		numOf: 0,
		usersLiked: []
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/likes',
	idAttribute: '_id'
})