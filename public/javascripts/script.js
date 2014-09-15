
/*
 * Functions
 */

// Initializes slider dimensions and state
var initializeSliderState = function() {

	// Calculate and set inner slider width
	var totalWidth = 0;
	$('div#slider-wrapper ul li').each(function() {
		totalWidth += $(this).outerWidth(true);
	});
	maxScrollPosition = totalWidth - $('div#slider-wrapper').outerWidth();
	$('div#slider-wrapper ul').width(totalWidth);

	// Initialize first slider item as the active one
	$('main#home section#recent-projects div#slider-wrapper ul li:first').addClass('active');
	setSliderText();

	return;
};
// Controls slider animation on home page
var toGalleryItem = function($target, maxScrollPosition) {
	if($target.length) {

		var newPosition = $target.position().left;

		if(newPosition <= maxScrollPosition) {
			$target.addClass('active');
			$target.siblings().removeClass('active');

			$('main#home section#recent-projects div#slider-wrapper ul').animate({
				left : - newPosition
			});
		}
		else {
			$('main#home section#recent-projects div#slider-wrapper ul').animate({
				left : -maxScrollPosition
			});
		}
		setSliderText();
	}

	return;
};
// Sets slider subheader text
var setSliderText = function() {
	$('div#slider-info h2').html($('div#slider-wrapper ul li.active a h2').html());
	$('div#slider-info p').html($('div#slider-wrapper ul li.active a p').html());

	return;
};
// Initialize class select buttons on Students page
var initializeClassSelectButtons = function() {

	// Global (ish)
	var $active;

	// User did not select specific class year
	if( !checkURLForString('class_year') ) {
		$active = $('ul#class-select-list li:first');
	}
	// User did select specific class year
	else {
		var classYear = window.location.search.replace('?class_year=', '');
		$('ul#class-select-list li').each(function() {
			if( $(this).children('button').val() == classYear ) {
				$active = $(this);
			}
		});
	}

	// Change button css and show correct students
	$active.addClass('active');
	showStudents($active.children('button'));

	return;
};
// Show selected students on Students page
var showStudents = function($selection) {

	// Add active class for button styling
	$selection.parent().siblings().removeClass('active');
	$selection.parent().addClass('active');

	// Show correct students
	if( $selection.val() == "all" ) {
		$('section#students-list ul li').show();
	}
	else {
		$('section#students-list ul li').hide();
		$('section#students-list ul li.class-year-' + $selection.val()).show();
	}

	return;
};
// Check URL for a string
var checkURLForString = function(s) {
	if( window.location.href.indexOf(s) > -1 ) {
	       return true;
	}

	return;
};
// Edit URL text
var editURLText = function($selection) {
	var current = window.location.pathname;
	var newHref = current.replace('students/', 'students/?class_year=' + $selection.val());
	history.replaceState('data', '', newHref);

	return;
};




/* 
 * Globals, initializations
 */

var maxScrollPosition;



/*
 * Events
 */

$(window).load(function() {

	initializeSliderState()
	initializeClassSelectButtons();

	// Handle previous slider button click
	$('button#slider-prev').click(function() {
		var $target = $('div#slider-wrapper ul li.active').prev();
		toGalleryItem($target, maxScrollPosition);
	});
	// Handle next slider button click
	$('button#slider-next').click(function() {
		var $target = $('div#slider-wrapper ul li.active').next();
		toGalleryItem($target, maxScrollPosition);
	});
	// Handle class year select on students page
	$('ul#class-select-list li button').click(function() {
		var $selection = $(this);
		editURLText($selection);
		showStudents($selection);
	});
});