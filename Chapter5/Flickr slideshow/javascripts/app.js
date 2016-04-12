	$('.fadein img:gt(0)').hide();
	//use set interval to iterate through images
	setInterval(function () { },3000);
	//fadeout first image
	$('.fadein :first-child').fadeOut()
	//next image will fade in
	.next('img').fadeIn()
	//send first image to the end of the stack
	.end().appendTo('.fadeIn)
	$(function(){
		$('.fadeIn img:gt(0)').hide();
		setInterval (function (){
			$('fadeIn :first-child').fadeOut()
			.next('img').fadeIn()
		.end().appendTo('.fadein');},
		3000);
	});
	
