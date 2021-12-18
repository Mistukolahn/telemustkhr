$(document).ready(function(){

	//slider
	var slider = $('#slider');
	slider.owlCarousel({
	    loop: true,
        items: 1,
		autoplay:true,
		autoPlay:5000,
		dots: true,
		autoplayHoverPause:true
	});

	//boxes
	var boxes = $(".box-slider");
	boxes.owlCarousel({
		items: 5,
		margin: 27,
		autoWidth: true
	});

	//menu
	var deger = 0
	$(".navbar-toggle").click(function(){

		$("#mainNav").toggleClass("white");
	   
	});

	//scroll menu
	var menu = $("#mainNav"),
		uzaklik = 20;

		$(window).bind("scroll", function(){
			if($(window).scrollTop() > uzaklik){

		        menu.addClass("on");
				
			}else {
				menu.removeClass("on");
			}
		});

	//special select
	var select = $(".s-select"),
		change = $(".s-select .s-title span"),
		s_content = $(".s-select .ss-content"),
		forms = $(".forms form"),
		s_item = $(".s-select .ss-content ul li");

		forms.filter(":not(:first)").hide();

		s_item.click(function(){
			var index = $(this).index();
			var text = $(this).find("a").text();

			change.html(text);
			select.toggleClass("open");

			forms.hide();
			forms.eq(index).show();

			return false;
		});

});