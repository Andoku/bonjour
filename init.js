$(function(){
	
	$('.slider1').mobilyslider();
	
	$('.slider2').mobilyslider({
		transition: 'vertical',
		animationSpeed: 800,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: true
	});
	
	$('.slider3').mobilyslider({
		transition: 'fade',
		animationSpeed: 800,
		bullets: true,
		arrowsHide: false
	});
	
	
});
