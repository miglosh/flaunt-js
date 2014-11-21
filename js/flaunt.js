/*
	Flaunt.js v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/flaunt-js
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	Flaunt JS, stylish responsive navigations with nested click to reveal.
	
	Edited by Stefan Fršhlich - http://www.froehlich.it to fix 2 bugs - see Readme.MD.
*/

;(function($) {

	// DOM ready
	$(function() {
		
		// Append the mobile icon nav
		$('.nav').append($('<div class="nav-mobile"></div>'));
		
		// Add a <span> to every .nav-item that has a <ul> inside
		$('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');
		
		// Click to reveal the nav
		$('.nav-mobile').click(function(){
			if (typeof $('.nav-list').attr('style') != 'undefined') {
				$('.nav-list').removeAttr( 'style' );
			}
			else {
				$('.nav-list').toggle();
			}
		});
	
		// Dynamic binding to on 'click'
		$('.nav-list').on('click', '.nav-click', function(){
		
			// Toggle the nested nav

			if (typeof $(this).siblings('.nav-submenu').attr('style') != 'undefined') {
				$(this).siblings('.nav-submenu').removeAttr( 'style' );
			}
			else {
				$(this).siblings('.nav-submenu').toggle();
			}
			
			// Toggle the arrow using CSS3 transforms
			$(this).children('.nav-arrow').toggleClass('nav-rotate');
			
		});
	    
	});
	
})(jQuery);