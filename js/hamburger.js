$(document).ready(function(){
	$("#hamburger").click(function() {
		$(this).toggleClass('open');
		if($(".navBox").is(":hidden")){
			$(".navBox").fadeIn("fast");
		//$("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
		}
		

		else {
			$(".navBox").fadeOut("fast");
			//$("body").css({ overflow: '' }).unbind('touchmove');
		}
	});
});