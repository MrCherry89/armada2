$(document).ready(function () {
  new WOW().init();

  gsap.utils.toArray(".comparisonSection").forEach((section) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".comparisonSection",
        start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
        end: () => "+=" + section.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "none" },
    });
    // animate the container one way...
    tl.fromTo(
      section.querySelector(".afterImage"),
      { xPercent: 100, x: 0 },
      { xPercent: 0 }
    )
      // ...and the image the opposite way (at the same time)
      .fromTo(
        section.querySelector(".afterImage img"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );
  });

  $(".calculate-form").validate({
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      },
    },
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $('input[type="file"]').change(function () {
    var value = $("input[type='file']").val();
    $(".js-value").text(value);
    $(".append").addClass("download");
  });

  $(".choose-us-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    speed: 1000,
    dots: false,
    prevArrow: $(".choose-us .navigation-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".choose-us .navigation-wrap .slider-navigation .slick-next"),
  });

  $(".leave-request-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000,
    dots: false,
    prevArrow: $(".leave-request-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".leave-request-slider-wrap .slider-navigation .slick-next"),
  });

  $(".take-survey-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000,
    dots: false,
    prevArrow: $(".take-survey-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".take-survey-slider-wrap .slider-navigation .slick-next"),
  });

  $(".reliability-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    speed: 1000,
    dots: false,
    prevArrow: $(".reliability-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".reliability-slider-wrap .slider-navigation .slick-next"),
  });

  $(".rating-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    speed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });

  $(window).scroll(function () {
    var header = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 1) header.addClass("fixed");
    else header.removeClass("fixed");
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });
});
