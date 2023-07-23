$(document).ready(function () {
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

  $(".slider-info-wrap p .more").on("click", function (e) {
    e.preventDefault();
    $(this).closest("p").find(".hide-text").addClass("show");
    $(this).hide();
  });

  $(".calculate-form").validate({
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      },
      email: {
        required: true,
      },
    },
  });

  $(".leave-form").validate({
    rules: {
      phone: {
        required: true,
      },
      name: {
        required: true,
      },
    },
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find(".icon").hasClass("rotate")) {
      $(this).find(".icon").removeClass("rotate");
    } else {
      $(this)
        .closest(".accordion-list-item")
        .find(".icon")
        .removeClass("rotate");
      $(this).find(".icon").addClass("rotate");
    }
    $(this).closest(".accordion-list-item").removeClass("opened");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body:not(.active)")
      .slideUp();
    $(this).closest(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".calculate-form").on("submit", function (e) {
    e.preventDefault();
    if ($(".calculate-form").valid()) {
      $.magnificPopup.open({
        items: {
          src: "#sent-popup",
        },
        type: "inline",
      });
    }
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
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

  $(".floor-plan-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    speed: 1000,
    dots: false,
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

  $slickGreen = false;
  function greenSlider() {
    if ($(window).width() < 1025) {
      if (!$slickGreen) {
        $(".gallery-slider").slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
        });
        $slickGreen = true;
      }
    } else if ($(window).width() > 1025) {
      if ($slickGreen) {
        $(".gallery-slider").slick("unslick");
        $slickGreen = false;
      }
    }
  }

  greenSlider();

  $(window).on("resize", function () {
    greenSlider();
  });

  if (!$(".project-slider").hasClass("slick-initialized")) {
    $(".project-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      fade: true,
      arrows: false,
      asNavFor: ".project-slider-thumbnails",
    });
  }

  if (!$(".project-slider-thumbnails").hasClass("slick-initialized")) {
    $(".project-slider-thumbnails").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      focusOnSelect: true,
      asNavFor: ".project-slider",
      nextArrow: $(".project-slider-thumbnails-wrap .arrow-next"),
      prevArrow: $(".project-slider-thumbnails-wrap .arrow-prev"),
      responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }

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

  // Banner image animation
  var anmitaeOnHover = true;
  var timer;

  $(".images-wrap li").each(function () {
    var current = this;

    $(current).on("mouseenter", function () {
      if ($(current).hasClass("animated")) {
        clearTimeout(timer);
        $(current).parent().prepend(current);
        $(current).removeClass("animated");
        return;
      }

      if (anmitaeOnHover) {
        anmitaeOnHover = false;
        $(current).addClass("animated");

        timer = setTimeout(function () {
          $(current).removeClass("animated");
          $(current).parent().prepend(current);
        }, 1100);
      }
    });
  });

  $(".images-wrap").on("mouseleave", function () {
    anmitaeOnHover = true;
  });

  $(".filters-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".filters-wrapper").toggleClass("open");
  });

  $(".apply-filter").on("click", function () {
    var list = $(".filter .checkbox-wrap input:checked");
    if (list.length > 0) {
      $(".filters-btn .counter").addClass("active").text(list.length);
    } else {
      $(".filters-btn .counter").removeClass("active").text("");
    }
  });

  $(".remove-filter").on("click", function () {
    $(".filter .checkbox-wrap input").prop("checked", false);
    $(".filters-btn .counter").removeClass("active").text("");
  });

  AOS.init();

  $(".footer-links .links .title").smoothScroll({
    speed: 1000,
  });

  $(".resault-info-item-wrap .more").on("click", function () {
    $(this)
      .closest(".resault-info-item-wrap")
      .find(".resault-info-item")
      .removeClass("hidden");
    $(this).hide();
  });

  $slickGreen = false;
  function employeesSlider() {
    if ($(window).width() < 1024) {
      if (!$slickGreen) {
        $(".employees-logos-slider").slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        });
        $slickGreen = true;
      }
    } else if ($(window).width() > 1025) {
      if ($slickGreen) {
        $(".employees-logos-slider").slick("unslick");
        $slickGreen = false;
      }
    }
  }
  employeesSlider();
  $(window).on("resize", function () {
    employeesSlider();
  });

  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  AOS.init({
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    },
  });
});
