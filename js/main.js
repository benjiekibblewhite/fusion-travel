//***** MENU FUNCTIONALITY *****//
// Look for .hamburger
var $hamburger = $(".hamburger");
var $navContainer = $('nav');
var $mainNav = $('.main-nav');
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $mainNav.slideToggle("fast")
    $navContainer.toggleClass("is-open")
  });