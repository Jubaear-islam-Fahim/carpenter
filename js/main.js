/** ===============

.. Preloader
.. header_search
.. header_logo
.. Fixed-header
.. Menu
.. Number rotator
.. Skillbar
.. Tab
.. Accordion
.. Isotope
.. Prettyphoto
.. share-icon_btn
.. Slick_slider
.. Back to top 

 =============== */


(function ($) {

    'use strict'


    /*------------------------------------------------------------------------------*/
    /* Preloader
    /*------------------------------------------------------------------------------*/
    // makes sure the whole site is loaded
    $(window).on("load", function () {
        $(".loader-blob").fadeOut();
        $("#preloader").delay(300).fadeOut('slow', function () {
            $(this).remove();
        });

    });


    window.addEventListener('DOMContentLoaded', event => {

        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#stickable-header');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#stickable-header',
                offset: 74,
            });
        };

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarSupportedContent a')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });

    });

    /*------------------------------------------------------------------------------*/
    /* header_search
    /*------------------------------------------------------------------------------*/

    $(".header_search").each(function () {
        $(".search_btn", this).on("click", function (e) {
            e.preventDefault();
            $(".header_search_content").toggleClass("on");
        });

        $(".header_search_content_inner .close_btn").on("click", function (e) {
            e.preventDefault();
            $(".header_search_content").removeClass("on");
        });
    });


    /*------------------------------------------------------------------------------*/
    /* Fixed-header
    /*------------------------------------------------------------------------------*/
    window.onscroll = function () {
        myFunction()
    };

    var navbar = document.getElementById("stickable-header");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }


    $(document).ready(function () {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });




    /*------------------------------------------------------------------------------*/
    /* Animation on scroll: Number rotator
    /*------------------------------------------------------------------------------*/

    $("[data-appear-animation]").each(function () {
        var self = $(this);
        var animation = self.data("appear-animation");
        var delay = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);

        if ($(window).width() > 959) {
            self.html('0');
            self.waypoint(function (direction) {
                if (!self.hasClass('completed')) {
                    var from = self.data('from');
                    var to = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function (elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, {
                offset: '85%'
            });
        } else {
            if (animation == 'animateWidth') {
                self.css('width', self.data("width"));
            }
        }
    });


    jQuery(".fmh-circle-box").each(function () {

        var circle_box = jQuery(this);
        var fill_val = circle_box.data("fill");
        var emptyFill_val = circle_box.data("emptyfill");
        var thickness_val = circle_box.data("thickness");
        var linecap_val = circle_box.data("linecap")
        var fill_gradient = circle_box.data("gradient");
        var startangle_val = (-Math.PI / 4) * 1.5;
        if (fill_gradient != "") {
            fill_gradient = fill_gradient.split("|");
            fill_val = {
                gradient: [fill_gradient[0], fill_gradient[1]]
            };
        }
        if (typeof jQuery.fn.circleProgress == "function") {
            var digit = circle_box.data("digit");
            var before = circle_box.data("before");
            var after = circle_box.data("after");
            var digit = Number(digit);
            var short_digit = digit / 100;
            var size_val = circle_box.data("size");
            jQuery(".fmh-circle", circle_box)
                .circleProgress({
                    value: 0,
                    duration: 8000,
                    size: size_val,
                    startAngle: startangle_val,
                    thickness: thickness_val,
                    linecap: linecap_val,
                    emptyFill: emptyFill_val,
                    fill: fill_val
                })
                .on("circle-animation-progress", function (event, progress, stepValue) {

                    circle_box.find(".fmh-fid-number").html(before + Math.round(stepValue * 100) + after);
                });
        }
        circle_box.waypoint(
            function (direction) {

                if (!circle_box.hasClass("completed")) {
                    if (typeof jQuery.fn.circleProgress == "function") {
                        jQuery(".fmh-circle", circle_box).circleProgress({
                            value: short_digit
                        });
                    }
                    circle_box.addClass("completed");
                }
            }, {
                offset: "90%"
            }
        );
    });




    /*------------------------------------------------------------------------------*/
    /* share-icon_btn
    /*------------------------------------------------------------------------------*/
    jQuery(".fmh-blog-classic").each(function (t) {
        var e = jQuery(this);
        e.find(".fmh-social-share-icon_btn").on("click", function () {
            return e.find(".social-icons").toggleClass("show"), !1
        })
    });


    $(".price-switch input").click(function () {
        if ($(this).is(":checked")) {
            $(this).parents(".row").find(".fmh-pricing-plan-inner").addClass("secondary-plan");
        } else {
            $(this).parents(".row").find(".fmh-pricing-plan-inner").removeClass("secondary-plan");
        }
    });


    /*------------------------------------------------------------------------------*/
    /* Slick_slider
    /*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        centerMode: false,

        responsive: [{

                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {

                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    /* testimonials */
    var testinav = jQuery('.testimonials-nav', this);
    var testiinfo = jQuery('.testimonials-info', this);

    jQuery('.testimonials-info', this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        asNavFor: testinav,
        adaptiveHeight: true,
        speed: 1500,
        autoplay: true,
        loop: true,

    });

    jQuery('.testimonials-nav', this).slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: testiinfo,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        autoplay: false,
        speed: 1500,
        arrows: true,
        dots: false,
        variableWidth: true,
        loop: true,


        responsive: [{
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]

    });



    /*------------------------------------------------------------------------------*/
    /* Back to top
    /*------------------------------------------------------------------------------*/

    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    jQuery(window).scroll(function () {
        "use strict";
        if (jQuery(this).scrollTop() >= 500) { // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200); // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200); // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click", function () { // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
        return false;
    });


})(jQuery);