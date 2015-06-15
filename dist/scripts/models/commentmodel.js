var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
	defaults: {
		text: null,
		userPosted: null,
		likes: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/comments',
	idAttribute: '_id'
});