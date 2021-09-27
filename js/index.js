var i = 1;
$(function () {
  $(".menu-bar").click(function () {
    $(".menu-list").toggleClass("active");
  });
  $(".menu-list >li:not(:first-child) >a").click(function () {
    $("body,html").animate(
      {
        scrollTop: $("." + $(this)[0].name)[0].offsetTop + "px",
      },
      1000
    );
  });
  $(window).resize(function () {
    $(".menu-list").removeClass("active");
  });
  setInterval(function () {
    changSlide(i + 1);
  }, 5000);
  $(".-slideBtn >span").hover(
    function () {
      $(this).css({
        "background-color": "rgba(242,213,213,0.7)",
      });
    },
    function () {
      $(this).css({
        "background-color": "rgba(0,0,0,0.3)",
      });
    }
  );
  $(".-slideBtn >span").click(function () {
    var t = $(this)[0].slot;
    changSlide(Number(t));
  });
  setTimeout(function () {
    $(".wdRight").addClass("show");
  }, 2000);
  $(window).scroll(function () {
    if ($("html")[0].clientWidth > 481) {
      var n = $(".wrapper").length;
      for (j = 0; j < n; j++) {
        var elm = $(".wrapper")[j];
        if (
          $("html,body").scrollTop() + $("html")[0].clientHeight >
          $(elm)[0].offsetTop
        ) {
          $(elm).addClass("show");
        } else {
          $(elm).removeClass("show");
        }
      }
    }
  });
});
function changSlide(n) {
  if (n > 4) n = 1;
  $(".-img" + i).removeClass("active");
  $("[slot=" + i + "]").removeClass("activeBtn");
  i = n;
  $("[slot=" + i + "]").addClass("activeBtn");
  $(".-img" + i).addClass("active");
}
