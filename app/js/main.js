$(function () {
  $('.menu-burger').on('click', function () {
    $('.menu__list').slideToggle(); //drop from jq
  });

  $('.user-basket-btn-media').on('click', function () {
    $('.header_top__logo,.user-in.active, .basket-menu, .logout, .header__btn-green, .header__btn-red').slideToggle(); //drop from jq
    $('.header__interact').toggleClass('--active');
    $('.header_top__logo').toggleClass('--active');
  });

  $('.menu-burger').on('click', function () {
    $('.menu__list').toggleClass('--active');
  });
  
  $('.fa-2').on('click', function () {
    $('.item').toggleClass('--disable');
    $('.item').removeClass('--active');
    $('.item-horizontal').toggleClass('--active');
    $('.item-horizontal').removeClass('--disable');
  });

  $('.fa').on('click', function () {
    $('.item').toggleClass('--active');
    $('.item').removeClass('--disable');
    $('.item-horizontal').removeClass('--active');
    $('.item-horizontal').toggleClass('--disable');
  });

  $(function () {
    $(".products__slider").slick({
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
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
  if (window.matchMedia('(max-width: 1879px)').matches) {
    $(".products__slider").slick({
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  };
  

  $(function () {
    $(".rateyo").rateYo({
      rating: 5,
      starWidth: "12px",
      ratedFill: "#FFA726",
      halfStar: true,
    });
  });
});