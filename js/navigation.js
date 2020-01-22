

var navToggleButton = $('#navigation__button');
var navBlock = $('.header__navigation-sms');
var navBlockOpen = 'header__navigation-sms--open';
var navLink = $('.header__navigation-list a');

//Мобильная навигация
navToggleButton.on('click', function(e){
	e.preventDefault();
// События по клику на иконку
	navBlock.toggleClass(navBlockOpen);

	if ( navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }

// События по клику на ссылки и пустое поле	
})
navLink&navBlock.on('click', function(){
	if ( navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }
	navBlock.removeClass(navBlockOpen);
	navToggleButton.removeClass("active");
})
// События при изменении размера экрана
$(window).resize(function(){
	
	var w = $(window).width();

	if(w > 992){
		navBlock.removeClass(navBlockOpen);
		navToggleButton.removeClass("active");
	}
});