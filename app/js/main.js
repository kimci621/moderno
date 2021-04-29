$(function () {
    $(function () {
        $(".products__slider").slick({
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
        });
    });
    if (window.matchMedia('(max-width: 1000px)').matches) {
        $(".products__slider").slick({
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    };
    if (window.matchMedia('(max-width: 1450px)').matches) {
        $(".products__slider").slick({
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
        });
    };



    $('.menu-burger').on('click', function () {
        $('.menu__list').slideToggle(); //drop from jq
    });

    $('.user-basket-btn-media').on('click', function () {
        $('.header_top__logo,.user-in.active, .basket-menu, .header__btn-red-in.header__btn-red-logout--off').slideToggle(); //drop from jq
        $('.header__interact').toggleClass('--active');
        $('.header_top__logo').toggleClass('--active');
    });

    $('.menu-burger').on('click', function () {
        $('.menu__list').toggleClass('--active');
    });

    $(function () {
        $(".rateyo").rateYo({
            rating: 5,
            starWidth: "12px",
            ratedFill: "#FFA726",
            halfStar: true,
        });
    });

    var mixer = mixitup('.products');
});