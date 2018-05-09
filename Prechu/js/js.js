$(function(){
 $('.sl').slick({ 
 autoplay: true,
 autoplaySpeed: 2000,
 prevArrow: '<img src="img/left.png" class="slick-prev">',
 nextArrow: '<img src="img/right.png" class="slick-next">'
});
});﻿

$(document).ready(function(){
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 0) {
					$("#header").addClass("default").fadeIn('fast');
					$("#header").removeClass("logomenu").fadeIn('fast');

				} else {
					$("#header").removeClass("default").fadeIn('fast');
					$("#header").addClass("logomenu").fadeIn('fast');
				};
			});
		});

$(document).ready(function() {
	$('.icon_bg_2').click(function(){
		$('nav ul').slideToggle(500);
	});
$(window).resize(function() {
	if($(window).width() > 768){
		$('nav ul').removeAttr('style');
	}
})

});