var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
	defaults: {
		image: null,
		caption: false,
		visible: true,
		likes: null,
		badge: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/images',
	idAttribute: '_id'
})