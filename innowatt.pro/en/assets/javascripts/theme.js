$(document).ready(function(){

	// Animation
	setTimeout(function(){
		$(".circle1__loc1").toggleClass("half-circle__show");
	}, 700);

	setTimeout(function(){
		$(".circle3__loc3").toggleClass("half-circle__show");
	}, 1400);

	setTimeout(function(){
		$(".circle2__loc2").toggleClass("half-circle__show");
	}, 2100);

	setTimeout(function(){
		$(".circle4__loc4").toggleClass("half-circle__show");
	}, 2800);

	setTimeout(function(){
		$(".circle1__loc1").toggleClass("circle1__move");
		$(".circle2__loc2").toggleClass("circle2__move");
		$(".circle3__loc3").toggleClass("circle3__move");
		$(".circle4__loc4").toggleClass("circle4__move");

		$(".circle1__loc").toggleClass("half-circle__show");
		$(".circle2__loc").toggleClass("half-circle__show");
		$(".circle3__loc").toggleClass("half-circle__show");
		$(".circle4__loc").toggleClass("half-circle__show");
		$(".circle__main").toggleClass("half-circle__show");
	}, 3200);

	setTimeout(function(){
		$(".circle__main_span").toggleClass("half-circle__show");
	}, 3500);

	// $(".circle1__loc1").hover(function(){
	// 	$(this).toggleClass("circle3__loc3_move");
	// });

	// $(".circle2__loc2").hover(function(){
	// 	$(this).toggleClass("circle3__loc3_move");
	// });

	// $(".circle3__loc3").hover(function(){
	// 	$(this).toggleClass("circle3__loc3_move");
	// });

	// $(".circle4__loc4").hover(function(){
	// 	$(this).toggleClass("circle3__loc3_move");
	// });




	// Logo link
	$('.logo').click( function(){
		window.location.href = "http://" + location.host;
	});

	// Call
	$('.btn-call').on('click', function (event) {
		var number = $(this).text();
		window.location = 'tel:' + number;
	});

	// Forms
	$('#show_feedback_form').click( function(){
		$("html").css({'overflow' : 'hidden', 'padding-right' : '17px'});
		$('#layer, #feedback').fadeIn(100);
	});

	$('#show_recall_form, .btn-recall').click( function(){
		$("html").css({'overflow' : 'hidden', 'padding-right' : '17px'});
		$('#layer, #recall').fadeIn(100);
	});

	$('.form-conteiner .close, #layer').click( function(){
		$("html").css({'overflow' : 'auto', 'padding-right' : '0'});
		$('.form-conteiner, #layer').fadeOut(100);
	});

	// Mobile menu
	$('.header .icon-menu').click( function(){
		$('#layer, .header nav').fadeIn(1);
		$("html").css('overflow', 'hidden');
	});

	$('.header .icon-close, #layer').click( function(){
		$('#layer, .header nav').fadeOut(1);
		$("html").css('overflow', 'auto');
	});

	$('.header li.drop .icon-drop').click( function(){
		$(this).next().toggle(50);
	});

	// Tabs
	$('#tabs-today .nav-tabs .nav').click(function () {
		if (!($(this).hasClass('current'))) {
			var thisLi = $(this);
			var numLi = thisLi.index();
			thisLi.addClass('current').siblings().removeClass('current');
			thisLi.parent().next().children('.tab').hide(1).eq(numLi).show(1);
		}
	});

	function checkWidth() {
		var width = $(window).width();

		// Prev/Next buttons
		if(width > 980){
			$('#tabs-serv .next').click(
				() => !$('.full-tabs .tab.current').is(':last-child') &&
						$('.full-tabs .tab.current, .short-tabs .col.current')
						.removeClass('current').next().addClass('current')
			);

			$('#tabs-serv .prev').click(
				() => !$('.full-tabs .tab.current').is(':first-child') &&
						$('.full-tabs .tab.current, .short-tabs .col.current')
						.removeClass('current').prev().addClass('current')
			);
		}

		// Accordion
		else{
			$('.full-tabs .tab').click(function () {
				if(! ($(this).hasClass('current')) ){
					$('.full-tabs .tab, .short-tabs .col').removeClass('current');
					$(this).addClass('current');


					$('html, body').animate({
						scrollTop: $(this).offset().top
					}, 200);

					var index = $(this).index();
					$('.short-tabs .col').eq(index).addClass('current');

					//console.log(index);
				}
			});
		}
	}


	// Action when resize
	$(window).resize(function() {
		$('html, nav, .header ul').removeAttr('style');
		checkWidth();
	});

	checkWidth();
});