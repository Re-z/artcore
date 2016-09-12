$(document).ready(function() {

	//slider main init
    $('.slider-main__inner').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true
    });
    //open-close subcategory
    $('.goods__category-item').on('click', function(){
        $(this).find('.goods__subcategory').slideToggle();
        //toggling + and -
        var symbol = $(this).find('.js-status').text();
        if(symbol == '+') {
           symbol = $(this).find('.js-status').text('-')
        }
        else {
            symbol = $(this).find('.js-status').text('+')
        }

    });

    //prevent event bubling on clicking subcategory-list
    $('.goods__subcategory-link').on('click', function(){
        event.stopPropagation();
    });

    //show-hide mobile menu
    $('.burger').on('click', function(){
        $('.nav').toggleClass('is-opened')
    })

});