jQuery(document).ready(function($) {
	
	// $.stellar();
	// $('#wrapper').tubular({
	// 	videoId: 'WTAHzO1i6Mw',
	// 	wrapperZIndex: -99
	// });

	//Sticky navigation

	var $targetNav = $( '.navbar-default' );

	var navOffSet = $targetNav.offset().top;
	// console.log( "Offset Top " + navOffSet ); 

	

	$( window ). scroll(function(){

		var scrollPosition = $(window). scrollTop();
		// console.log("Scroll Position: " + scrollPosition );

		if ( scrollPosition >= navOffSet ) {

			$targetNav.addClass('navbar-fixed-top').removeClass('navbar-index');

		} else {

			$targetNav.removeClass('navbar-fixed-top').addClass('navbar-index');
		}
	});

});