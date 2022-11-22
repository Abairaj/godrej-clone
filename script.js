
// navbar

$(function () {
    $(document).scroll(function () {
      var $nav = $(".position-fixed");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


 