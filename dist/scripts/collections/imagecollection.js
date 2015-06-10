var imageCollection = Backbone.Collection.extend({
	model: imageItem,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/'
})