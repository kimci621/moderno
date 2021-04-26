$(function () {

    

    $(function () {
        $(".rateyo").rateYo({
            rating: 5,
            starWidth: "12px",
            ratedFill: "#FFA726",
            halfStar: true,
            //   readonly: true,
        });
    });

    $(function () {
        $(".products__slider").slick({
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
        });
        // if(window.matchMedia('(max-width: 768px)').matches){
        //     // do functionality on screens smaller than 768px
        // }
    });

    $('.menu-burger').on('click', function(){
        $('.menu__list').slideToggle(); //drop from jq
    });

    $('.user-basket-btn-media').on('click', function(){
        $('.header_top__logo,.user-in.active, .basket-menu, .header__btn-red-in.header__btn-red-logout--off').slideToggle(); //drop from jq
        $('.header__interact').toggleClass('--active');
        $('.header_top__logo').toggleClass('--active');
    });

    $('.menu-burger').on('click', function(){
        $('.menu__list').toggleClass('--active');
    });

    $('.fix').on('click', function(){
        $('.menu-burger').toggleClass('_hiden');
    });

    var mixer = mixitup('.products');
});