var count = 1;

$(document).ready(function() {
	$('.shops_screen, .article_screen, .menu_screen, .catalog_screen').hide();
});

/*  ITEMS - начало  */
$('.about_item').click(function() {
	fadeout_main();
	$('.menu_screen').fadeOut('fast', function() {});
	$('.about_screen').fadeIn('fast', function() {});
});
$('.shops_item').click(function() {
	fadeout_main();
	$('.menu_screen').fadeOut('fast', function() {});
	$('.shops_screen').fadeIn('fast', function() {});
});
$('.catalog_item').click(function() {
	fadeout_main();
	$('.menu_screen').fadeOut('fast', function() {});
	$('.catalog_screen').fadeIn('fast', function() {});
	$('.article_screen').fadeOut('fast', function() {});
});
$('.more').click(function() {
	$('.article_pic').css('background', 'url(pix/bg'+count+'.jpg) center no-repeat /cover');
	fadeout_main();
	$('.article_screen').fadeIn('fast', function() {});
});
$('.menu_btn').click(function() {
	$('.menu_screen').fadeIn('fast', function() {});;
});
/*  ITEMS - конец  */

/*  КРЕСТИКИ - начало  */
$('.about_close').click(function() {
	fadein_main();
	$('.about_screen').fadeOut('fast', function() {});
});
$('.shops_close').click(function() {
	fadein_main();
	$('.shops_screen').fadeOut('fast', function() {});
});
$('.catalog_close').click(function() {
	fadein_main();
	$('.catalog_screen').fadeOut('fast', function() {});
});
$('.article_close').click(function() {
	fadein_main();
	$('.article_screen').fadeOut('fast', function() {});
});
$('.menu_close').click(function() {
	$('.menu_screen').fadeOut('fast', function() {});;
});
/*  КРЕСТИКИ - конец  */

/*  BACKGROUND SLIDER - начало  */
$('.first').click(function() { first(); });
$('.second').click(function() { second(); });
$('.third').click(function() { third(); });
$('.fourth').click(function() { fourth(); });

$('.arrow').click(function() {
	switch(count) {
		case 1: 
			second();
			break;

		case 2:
			third();		
			break;

		case 3: 
			fourth();
			break;

		case 4: 
			first();
			break;
	}
});

$(document).keydown(function(event) { 
    var key = (event.keyCode ? event.keyCode : event.which); 
 
    if (key == '39') {
		switch(count) {
			case 1: 
				second();
				break;

			case 2:
				third();		
				break;

			case 3: 
				fourth();
				break;

			case 4: 
				first();
				break;
		}
    } else if (key == '37') {
    	switch(count) {
			case 1: 
				fourth();
				break;

			case 2:
				first();		
				break;

			case 3: 
				second();
				break;

			case 4: 
				third();
				break;
		}
    }
}); 
/*  BACKGROUND SLIDER - конец  */

function fadeout_main() {
	$('.top_main, .mid, .bot').fadeOut('fast', function() {});
}
function fadein_main() {
	$('.top_main, .mid, .bot').fadeIn('fast', function() {});
}

/*  BACKGROUND SLIDER FUNCTIONS - начало  */
function first() {
	count = 1;

	$('.background1').css('left', '0vw');
	$('.background2').css('left', '100vw');
	$('.background3').css('left', '200vw');
	$('.background4').css('left', '300vw');

	$('.text1').css('left', '0');
	$('.text2').css('left', '100%');
	$('.text3').css('left', '200%');
	$('.text4').css('left', '300%');

	$('.first').toggleClass('target');
	$('.second, .third, .fourth').removeClass('target');
}
function second() {
	count = 2;

	$('.background1').css('left', '-100vw');
	$('.background2').css('left', '0vw');
	$('.background3').css('left', '100vw');
	$('.background4').css('left', '200vw');

	$('.text1').css('left', '-100%');
	$('.text2').css('left', '0%');
	$('.text3').css('left', '100%');
	$('.text4').css('left', '200%');

	$('.second').toggleClass('target');
	$('.first, .third, .fourth').removeClass('target');
}
function third() {
	count = 3;

	$('.background1').css('left', '-200vw');
	$('.background2').css('left', '-100vw');
	$('.background3').css('left', '0vw');
	$('.background4').css('left', '100vw');

	$('.text1').css('left', '-200%');
	$('.text2').css('left', '-100%');
	$('.text3').css('left', '0%');
	$('.text4').css('left', '100%');

	$('.third').toggleClass('target');
	$('.second, .first, .fourth').removeClass('target');
}

function fourth() {
	count = 4;

	$('.background1').css('left', '-300vw');
	$('.background2').css('left', '-200vw');
	$('.background3').css('left', '-100vw');
	$('.background4').css('left', '0vw');

	$('.text1').css('left', '-300%');
	$('.text2').css('left', '-200%');
	$('.text3').css('left', '-100%');
	$('.text4').css('left', '0%');

	$('.fourth').toggleClass('target');
	$('.second, .third, .first').removeClass('target');
}
/*  BACKGROUND SLIDER FUNCTIONS - конец  */