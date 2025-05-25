jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
            jQuery(".header-block").addClass("header-fixed");
        }
        else {
            $(".header-block").removeClass("header-fixed");
        }
    });

    jQuery('.home-banner-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        cssEase: 'linear'
    });

    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("is-active");
        $(".primary-menu").toggleClass("menu-open");
        $("body").toggleClass("overflow-hidden");


    });

    jQuery(".select-language").click(function () {
        jQuery(".choose-lang").toggleClass("show-lang");
    });

});