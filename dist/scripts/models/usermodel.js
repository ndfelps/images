var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
	defaults: {
		name: null,
		password: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/users',
	idAttribute: '_id'
})