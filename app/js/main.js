$(function(){

    var mixer = mixitup('.products');

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
    });
});