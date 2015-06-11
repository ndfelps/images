var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
		imageItem: {
			defaults: {
				image: null,
				caption: false,
				visible: true,
				likes: null,
				badge: null
			},
			urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
			idAttribute: '_id'
		}
	likeItem: {
		defaults: {
			numOf: 0,
			usersLiked: []
		},
		urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
		idAttribute: '_id'
	},
	commentItem: {
		defaults: {
			text: null,
			userPosted: null,
			likes: null
		},
		urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
		idAttribute: '_id'
	},

	userItem: {
		defaults: {
			name: null,
			password: null
		},
		urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
		idAttribute: '_id'
	}
});
