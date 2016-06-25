/**
 * relaxo - v1.0.0
 * A mousemove parallax snippet.
 *
 * Made by Dean Hidri | uniquepotion.com
 * Under MIT License
 */
function relaxo() {
	var mouseBind = $('YOURELEMENT');
	var container = $('.relaxo');
	var elements = $('.relaxo__item');
	var originsY = [];
	var originsX = [];

	// loop through each elements and set
	// the y and x values
	elements.each(function(index, elem) {
		originsY[index] = $(this).offset().top - container.offset().top;
		originsX[index] = $(this).offset().left - container.offset().left;
	});

	// on mousemove, execute the action
	// that should happen
	mouseBind.on('mousemove', function(e) {
		// prevent default for safety
		e.preventDefault();

		// define mousemove axis position
		var mouseAxisY = event.pageY;
		var mouseAxisX = event.pageX;

		// loop through all elements and assign
		// each found the new positions
		elements.each(function(index, elem) {
			var velocityY = $(this).data('velocity-Y') * 10;
			var velocityX = $(this).data('velocity-x') * 10;
			var newPosY = (originsY[index] + (mouseAxisY / (doc.width() / 2) * velocityY));
			var newPosX = (originsX[index] + (mouseAxisX / (doc.width() / 2) * velocityX));

			// assign new position
			$(this).css({
				left: newPosX,
				top: newPosY
			});
		})
	})
};
