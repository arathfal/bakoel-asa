$(document).ready(function () {
  $(window).scroll(() => {
    const nav = $(".navbar");
    $(document).scrollTop() > 500
      ? nav.removeClass("navbar-transparent").addClass("navbar-shrink")
      : nav.removeClass("navbar-shrink").addClass("navbar-transparent");
  });
  $("#menuButton").on("click", function () {
    $("#menu").toggleClass("hide-left", "slide");
  });
  $("#closeMenu").on("click", function () {
    $("#menu").toggleClass("hide-left");
  });
  $("#cartOpen").on("click", function () {
    $("#cartList").toggleClass("hide-right", "slide");
  });
  $("#closeCart").on("click", function () {
    $("#cartList").toggleClass("hide-right");
  });

  $("#carousel").slick({
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<i class="fa-lg fas fa-chevron-left arrow-prev"></i>',
    nextArrow: '<i class="fa-lg fas fa-chevron-right arrow-next"></i>',
  });
});
