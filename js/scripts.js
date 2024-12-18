$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    // $(function () {
    //     $(window).scroll(function () {
    //         var scroll = $(window).scrollTop();

    //         if (scroll >= 80) {
    //             $('section.navigation').addClass('fixed');
    //             $('header').css({
    //                 "border-bottom": "none",
    //                 "padding": "35px 0"
    //             });
    //             $('header .member-actions').css({
    //                 "top": "26px",
    //             });
    //             $('header .navicon').css({
    //                 "top": "34px",
    //             });
    //         } else {
    //             $('section.navigation').removeClass('fixed');
    //             // $('header').css({
    //             //     "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
    //             //     "padding": "50px 0"
    //             // });
    //             $('header .member-actions').css({
    //                 "top": "41px",
    //             });
    //             $('header .navicon').css({
    //                 "top": "18px",
    //             });
    //         }
    //     });
    // });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000);
                    return false;
                }
            }
        });

    });
});
