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

    var mixer = mixitup('.products');
});