$(document).ready(function() {


	var rellax = new Rellax('.rellax');


	var images = ["abillionpeople.png", "abillionpeople2.png", "abillionpeople3.png"];
		
	var x = Math.floor(Math.random() * images.length);
	
	$("#abillionpeople").css({"background-image": "url(images/" + images[x] +")"});	


});



$(document).scroll (function() {

      if ($(this).scrollTop() > 50) {
         $('body').addClass('changeColor')
      }

      if ($(this).scrollTop() < 500) {
         $('body').removeClass('changeColor')
      }

});

