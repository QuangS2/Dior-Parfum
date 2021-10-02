var i = 1,
j = 1;
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
    if (t != i) changSlide(Number(t));
  });
  setInterval(function () {
    // $(".hideSlide").removeClass("hideSlide");
    // $(".inSlide").addClass("hideSlide");
    // i++;
    // if(i>4) i = 1;
    // $(".-img"+i).addClass("inSlide");
    // $(".hideSlide").removeClass("inSlide");
    changSlide(i + 1);
  }, 5000);
  setTimeout(function () {
    $(".wdRight").addClass("show");
  }, 2000);
  $(window).scroll(function () {
    $(".wrapper").each(function () {
      if ($("html")[0].clientWidth > 480) {
        if (
          $("html,body").scrollTop() + $("html")[0].clientHeight >
          $(this)[0].offsetTop
        ) {
          $(this).addClass("show");
        } else {
          $(this).removeClass("show");
        }
      } else {
        $(this).addClass("show");
      }
    });
  });
  //bran
  $(".review-content a").hover(function () {
    $(this.children[1]).css({
      "height":"99%",
      "border-radius":"19px"
    });
    $(this.children[1].children[1]).css({
      "display" : "block"
    });
    }, function () {
      $(this.children[1]).css({
        "height":"17%",
        "border-radius":"0 0 19px 19px"
      });
      $(this.children[1].children[1]).css({
        "display" : "none"
      });
    }
  );
  setInterval(function(){
    $(".hideReview").removeClass("hideReview");
    $(".inReview").addClass("hideReview");
    j++;
    if(j>4) j = 1;
    $("div[slot='"+j+"']").addClass("inReview");
    $(".hideReview").removeClass("inReview");
  },3000);
  // shop
  $(".-sortBtn").click(function () {
    $(".-sortBtn+ul").toggleClass("active");
  });
  $("[type='radio']")
    .parent()
    .hover(
      function () {
        $(this).css({
          "background-color": "#EBBEBE",
        });
      },
      function () {
        $(this).css({
          "background-color": "white",
        });
      }
    );
  $("[type='radio']")
    .parent()
    .click(function () {
      $(this.firstChild)[0].checked = true;
      $(":checked").parent().addClass("activeRadio");
      $("[type='radio']:not(:checked)").parent().removeClass("activeRadio");
    });
  setTimeout(function () {
    $(":checked").parent().addClass("activeRadio");
    if ($("html")[0].clientWidth > 480) {
      $(".-classify p").next().addClass("active");
    }
  }, 0);
  $(".-classify p").click(function () {
    if ($("html")[0].clientWidth < 1025) {
      $(this).next().toggleClass("active");
    }
  });
  $(".-classify >i").click(function () {
    $(".-classify >i").toggleClass("active");
    $(this).parent().toggleClass("activeClassify");
  });
  $(window).resize(function () {
    $(".menu-list").removeClass("active");
    $(".-classify >ul").removeClass("active");
    $("[type='radio']").parent().parent().removeClass("active");
    if ($("html")[0].clientWidth > 1024) {
    }
  });
});
function changSlide(n) {
  if (n > 4) n = 1;
  $(".inSlide").addClass("hideSlide");
  $("[slot=" + i + "]").removeClass("activeBtn");
  i = n;
  $("[slot=" + i + "]").addClass("activeBtn");
  $(".-img" + i).addClass("inSlide");
  $(".hideSlide").removeClass("inSlide");
  setTimeout(function(){
    $(".hideSlide").removeClass("hideSlide");
  },1000)
}
