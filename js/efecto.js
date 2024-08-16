document.addEventListener('DOMContentLoaded', function(){
    
    window.addEventListener('scroll', function(){
        var windowWidth=$(window).width();

        if (windowWidth > 800) {
            var scroll =$(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,'+ scroll / 2 + '%)'
                //
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -'+ scroll / 4 + '%)'
                
            });
        }
    });

    
    window.addEventListener('resize', function(){
        var windowWidth =$(window).width();
        if (windowWidth < 800) {
             $('acerca-de article').css({
                'transform': 'translate(0px,0px)'
            });
        }


    });

});
