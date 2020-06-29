$(function(){

	let nav = $('#nav');
	let header = $('header');
	let heightHeader = nav.innerHeight() + header.innerHeight();
	let scrollPol = $(window).scrollTop();

	$(window).on('scroll load resize', function() {
		scrollPol = $(this).scrollTop();
		if (scrollPol > heightHeader) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}

	})


	
	// if ()
	

});