$(document).ready(function(){

    $('#slide-hero').slick({
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 4000,
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('scrolled');
        }else{
            $('header').removeClass('scrolled');
        }
    })

    $('.hamburger').click(function(){
        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active'); 
            $('.main-nav').slideToggle();
        }else{
            $(this).addClass('is-active');
            $('.main-nav').slideToggle();
        }
    })

})