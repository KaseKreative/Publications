(function($){

	$('#f1').click(function(e){
		e.preventDefault();
		window.location.href = 'videos/Format1.mov';
	})
	$('#f2').click(function(e){
		e.preventDefault();
		window.location.href = 'videos/Format2.mp4';
	})
	$('#f3').click(function(e){
		e.preventDefault();
		window.location.href = 'videos/Format3.wmv';
	})
})(jQuery);