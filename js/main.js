
jQuery(document).ready(function($) {

     /* ===============================================
     Stick Nav Bar
     =============================================== */
     if ($(window).width() > 767) {

        $(window).scroll(function(){

            if ($(this).scrollTop() > 110) {
                $('.navbar.navbar-default').addClass('navbar-fixed-top');
                $('.navbar.navbar-inverse').addClass('navbar-fixed-top');               
            }else{
                $('.navbar.navbar-default').removeClass('navbar-fixed-top');
                $('.navbar.navbar-inverse').removeClass('navbar-fixed-top');
            }
        })
     };

    
    /* ===============================================
     Dropdown Menu Activation
     =============================================== */
     if ($(window).width() > 767) {

        $('ul.nav > li.dropdown').mouseenter(function (e) {
            e.preventDefault();
            $('.dropdown-menu').css( "display", "inline-block" );
        });
        $('ul.nav > li.dropdown').mouseleave(function (e) {
            e.preventDefault();
            $('.dropdown-menu').css( "display", "none" );
        });  
     };
     


     /* ===============================================
     Scroll To
     =============================================== */
     $(window).scroll(function(){

            if ($(this).scrollTop() > 150) {

                $('.scroll_up').fadeIn(500).removeClass('hide');
            }else{
                $('.scroll_up').addClass('hide');
            }


     });

     $( '.scroll_up' ).click(function() {
         $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    

})(jQuery);