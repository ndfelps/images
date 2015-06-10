$(document).ready(function() {
	var imageList = new imageCollection();
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
			// e.preventDefault();
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
