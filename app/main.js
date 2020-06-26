$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
        nav:true,
        loop:true,
        margin:10,
        navText: ['<img src="img/arrow-left.svg" alt="arrow-left" class="slider__nav--left array--left">', '<img src="img/arrow-right.svg" alt="arrow-right" class="slider__nav--right array--right">'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            }
        }
    })
});