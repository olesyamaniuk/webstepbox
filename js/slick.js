$(function () {
  $(".i-g-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".i-g-reviews-list-left",
    nextArrow: ".i-g-reviews-list-right",
  });
});
