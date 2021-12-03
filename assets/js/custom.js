(function($){
    "use strict";
    // wow js 
     new WOW().init();
    //  header scroll 
    $(window).scroll(function(){
        if($(window).scrollTop()>40){
            $('header').addClass('active');
            $(':root').css('--header-links-color','#000');
            $('.logo-img').attr('src','assets/img/logo-black_170x.webp');
        }else{
            $('header').removeClass('active')
            $(':root').css('--header-links-color','#fff');
            $('.logo-img').attr('src','assets/img/logo-white_170x.webp');
        }
    })
    // tooltips 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // banner slider 
    $('.banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:true,
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayHoverPause:true,
        navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
    });
    // catagories slider 
    $('.top-catagories-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:5,
        dots:false,
        navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.recomonded-section-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:5,
        navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    // go top 
    $(window).scroll(function(){
        if($(window).scrollTop() > 30){
            $('.go-top').addClass('active');
        }else{
            $('.go-top').removeClass('active');
        }
    });
    $('.go-top-btn').click(function(){
        $('html').animate({scrollTop:0},'fast');
    })
})(jQuery);