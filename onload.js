var width = $('.funPic').width();
$('.funPic').css('height', width);
var width = $('.funPicCenter').width();
$('.funPicCenter').css('height', width);
var navHeight = $('.navContainer').height();
$('.navBarDrop').css('height', navHeight);

jQuery(function($) {
	$('body').panelSnap();
});	


$(window).resize(function() {
	var width = $('.funPic').width();
	$('.funPic').css('height', width);
	width = $('.funPicCenter').width();
	$('.funPicCenter').css('height', width);
	var navHeight = $('.navContainer').height();
	$('.navBarDrop').css('height', navHeight);
});