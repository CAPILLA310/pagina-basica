$(document).ready(function () {
    $('.menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
    
    //efecto restaurante 
    if ($(window).width() > 800) {
        $('.main .acerca-de article h1 span').css({
            opacity: 0,
            marginTop: 0
        });
        $('.main .acerca-de article h1 span').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
    //scroll
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria  = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });

    $('#btn-menu').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: menu 
        }, 500);
    });

    $('#btn-galeria').on ('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: galeria
        }, 500);
    });
    $('#btn-ubicacion').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});