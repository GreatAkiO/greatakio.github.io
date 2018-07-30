$(document).ready(function() {
	
	// Подключение боковой пагинации. Начало
	var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right'
    });
	// Подключение слайдера на первом экране
     $('.slider').slick({
    	prevArrow: '<img src="img/prev_arrow.png" class="slick-prev">',
		nextArrow: '<img src="img/next_arrow.png" class="slick-next">'
    });
    // Подключение вертикального слайдера
    $('.center').slick({ 
		autoplay: true,
 		autoplaySpeed: 1000,
		prevArrow: '<img src="img/arrow_up.png" class="slick-prev">',
		nextArrow: '<img src="img/arrow_down.png" class="slick-next">',
		verticalSwiping: true,
		vertical: true,
		centerMode: true,
  		centerPadding: '80px',
  		slidesToShow: 3,
  		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
    	},
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	   	   }
   		}
  		]
	});

	// Изменение фона, при наведении в меню
var bg = document.getElementById('section4');
	var menu = document.getElementById('menu_1');
	menu.addEventListener("mouseover", function(){bg.style.background = "url(../img/sect_1.png) no-repeat center top / cover";
	menu.addEventListener("mouseout", function(){bg.style.background = "";});
	});
	
	var menu = document.getElementById('menu_2');
	menu.addEventListener("mouseover", function(){bg.style.background = "url(../img/mon_3.png) no-repeat center top / cover";
	menu.addEventListener("mouseout", function(){bg.style.background = "";});
	});
	
	var menu = document.getElementById('menu_3');
	menu.addEventListener("mouseover", function(){bg.style.background = "url(../img/mon_4.png) no-repeat center top / cover";
	menu.addEventListener("mouseout", function(){bg.style.background = "";});
	});
	
	var menu = document.getElementById('menu_4');
	menu.addEventListener("mouseover", function(){bg.style.background = "url(../img/about_us.png) no-repeat center top / cover";
	menu.addEventListener("mouseout", function(){bg.style.background = "";});
	});
	
	var menu = document.getElementById('menu_5');
	menu.addEventListener("mouseover", function(){bg.style.background = "url(../img/contact.png) no-repeat center top / cover";
	menu.addEventListener("mouseout", function(){bg.style.background = "";});
	});
});
		