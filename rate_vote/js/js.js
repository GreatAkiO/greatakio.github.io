$( document ).ready(function() {
	// Скрипт для первого экрана
  var st1 = document.getElementsByClassName('one_star');
  var st2 = document.getElementsByClassName('two_star');
  var st3 = document.getElementsByClassName('three_star');
  var st4 = document.getElementsByClassName('four_star');
  var st5 = document.getElementsByClassName('five_star');
  	setTimeout(function() {
  		$(st1).addClass('animated fadeInLeft');
  		$(st1).css('display', 'block');
  	},500)
  	setTimeout(function() {
  		$(st2).addClass('animated fadeInLeft');
  		$(st2).css('display', 'block');
  	},1000)
  	setTimeout(function() {
  		$(st3).addClass('animated fadeInLeft');
  		$(st3).css('display', 'block');
  	},1500)
  	setTimeout(function() {
  		$(st4).addClass('animated fadeInLeft');
  		$(st4).css('display', 'block');
  	},2000)
  	setTimeout(function() {
  		$(st5).addClass('animated fadeInLeft');
  		$(st5).css('display', 'block');
  	},2500)
  	// Скрипт выпадающего текста при голосовании
	$('.text_look').on('change',  (function() {
   	$('.text').css('display', 'block');
	}));
	$('.text_look_desk').on('click',  (function() {
   	$('.text').css('display', 'block');
   	}));
   	// скрипт для второго экрана
   	setTimeout(function() {
  		$('.fb').addClass('animated fadeInLeft');
  		$('.fb').css('display', 'block');
  	},500)
	setTimeout(function() {
  		$('.vk').addClass('animated fadeInLeft');
  		$('.vk').css('display', 'block');
  	},1000)
  	setTimeout(function() {
  		$('.google').addClass('animated fadeInLeft');
  		$('.google').css('display', 'block');
  	},1500)
  	setTimeout(function() {
  		$('.second_rate').addClass('animated fadeInUp');
  		$('.second_rate').css('display', 'block');
  	},2000)
})


	
