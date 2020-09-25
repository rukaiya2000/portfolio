$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  //window scroll

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 149) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });
  //smooth scroll
  $(".nav-item a").click(function(link) {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        3000
      );
    $(".navbar-toggler").toggleClass("change");
    $("#myNavbar").collapse("hide");
  });

  // Isotope
  let $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function() {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });
});
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#button').fadeIn();
  } else {
      $('#button').fadeOut();
  }
});
$(document).ready(function() {
  $("#button").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/