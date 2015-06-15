var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var imageItem = require('../models/imagemodel.js');
var userItem = require('../models/usermodel.js');
var commentItem = require('../models/commentmodel.js');
var likeItem = require('../models/likemodel.js');

module.exports = Backbone.Collection.extend({
	model: commentItem,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/theWaitressespt2/comments'
});