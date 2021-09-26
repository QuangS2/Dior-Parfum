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
    $(".active").removeClass("active");
  });
  setInterval(function () {
      changSlide(i+1);
  }, 5000);
  $(".-slideBtn >span").hover(
    function () {
        $(this).css({
            "background-color":"rgba(242,213,213,0.7)"
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
      changSlide(t);
  }); 
});
function changSlide(n){
    if(n>4) n = 1;
    $(".-img" + i).removeClass("active");
    $("[slot="+i+"]").removeClass("activeBtn");
    i = n;
    $("[slot="+i+"]").addClass("activeBtn");
    $(".-img" + i).addClass("active");
}
