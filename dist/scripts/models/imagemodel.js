var imageItem = Backbone.Model.extend({
	defaults: {
		image: null,
		caption: false,
		visible: true,
		likes: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
	idAttribute: '_id'

});
var likeItem = Backbone.Model.extend({
	defaults: {
		numOf: 0,
		usersLiked: []
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
	idAttribute: '_id'
});
var commentItem = Backbone.Model.extend({
	defaults: {
		text: null,
		userPosted: null,
		likes: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
	idAttribute: '_id'
});

var userItem = Backbone.Model.extend({
	defaults: {
		name: null,
		password: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/',
	idAttribute: '_id'
});
