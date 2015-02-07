jQuery("document").ready(function($){
	
	var nav = $('.nav-container');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});

// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//         || location.hostname == this.hostname) {

//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });

jQuery(document).ready(function($){
     $("#topLeft").hover(function(){
         $("#topLeftText").css("visibility", "visible");
     }, function() {
     	$('#topLeftText').css("visibility", "hidden");
     });
});

jQuery(document).ready(function($){
     $("#botLeft").hover(function(){
         $("#botLeftText").css("visibility", "visible");
     }, function() {
     	$('#botLeftText').css("visibility", "hidden");
     });
});

jQuery(document).ready(function($){
     $("#topRight").hover(function(){
         $("#topRightText").css("visibility", "visible");
     }, function() {
     	$('#topRightText').css("visibility", "hidden");
     });
});

jQuery(document).ready(function($){
     $("#botRight").hover(function(){
         $("#botRightText").css("visibility", "visible");
     }, function() {
     	$('#botRightText').css("visibility", "hidden");
     });
});