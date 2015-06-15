var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var imageCollection = require('./collections/imagecollection.js');
var imageItem = require('./models/imagemodel.js');
var commentCollection = require('./collections/commentcollection.js');
var commentItem = require('./models/commentmodel.js');
var likeCollection = require('./collections/likecollection.js');
var likeItem = require('./models/likemodel.js');
var userCollection = require('./collections/usercollection.js');
var userItem = require('./models/usermodel.js');

$(document).ready(function() {
	var imageList = new imageCollection();
	var userList = new imageCollection();
	userList.fetch();
	imageList.fetch();

	var builder = _.template($('#imageTemplate').html());
	var hid = true;

	$('#stuff').on('click', function(e) {
		e.preventDefault();
		var pic = $('#menu').val();
		if(pic !== '' && (pic.substring(0, 8) === 'https://' || pic.substring(0, 7) === 'http://')) {
			var newImage = new imageItem({
				image: $('#menu').val(),
				caption: $('#drop').val()
			});
			$('#menu').val('');
			$('#drop').val('');
			imageList.add(newImage);
			newImage.save();
		} else {
			err();
		}
	});

	$('#signButton').on('click', function(e) {
		e.preventDefault();
		console.log('??');
		var name = $('#signUser').val();
		var pass = $('#signPass').val();
		if(name !== '' && pass !== '') {
			var newUser = new userItem({
				name: $('#signUser').val(),
				password: $('#signPass').val()
			});
			$('#signUser').val('');
			$('#signPass').val('');
			$('#login').hide();
			userList.add(newUser);
			newUser.save();
		} else {
			err();
		}

	});
	$('#menu').on('keyup', subPush);
	$('#drop').on('keyup', subPush);

	$('#reveal').on('click', rev);

	imageList.on('add', function(model) {
		var imageHTML = builder(model.attributes);
		$('#list').append(imageHTML);
	})

	function err () {
		console.log('???');
		$('.error').show();
		setTimeout(errClose(), 1000);
	}
	function errClose () {
		console.log('??');
		$('.error').hide();
	}

	function rev () {
		if (hid === true) {
			$('#imgForm').show();
			hid = false;
		} else {
			$('#imgForm').hide();
			hid = true;	
		}
	}

	function subPush (e) {
		if(event.keyCode === 13) {
			var pic = $('#menu').val();
			if(pic !== '' && (pic.substring(0, 8) === 'https://' || pic.substring(0, 7) === 'http://')) {
				var newImage = new imageItem({
					image: $('#menu').val(),
					caption: $('#drop').val()
				});
				$('#menu').val('');
				$('#drop').val('');
				imageList.add(newImage);
				newImage.save();
			} else {
				err();
			}
		}
	}
});
