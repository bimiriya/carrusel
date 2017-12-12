/*$(document).ready(function(){
  $("#icon1").click(function() {
    $("#img1").show();
    $(".img:not(:first-child)").hide();
  })

  $("#icon2").click(function() {
    $("#img2").show();
    $(".img:not(:nth-child(2))").hide();
  })

  $("#icon3").click(function() {
    $("#img3").show();
    $(".img:not(:nth-child(3))").hide();
  })

  $("#icon4").click(function() {
    $("#img4").show();
    $(".img:not(:nth-child(4))").hide();
  })

  $("#icon5").click(function() {
    $("#img5").show();
    $(".img:not(:nth-child(5))").hide();
  })

  $("#icon6").click(function() {
    $("#img6").show();
    $(".img:not(:nth-child(6))").hide();
  })

  $("#icon7").click(function() {
    $("#img7").show();
    $(".img:not(:nth-child(7))").hide();
  })
});*/

$(document).ready(function() {
  $(".pagination li:first-child").css("opacity","1");

  var imgItems = $(".slider li").length;
  var imgPos = 1;

  for (var i = 0 ; i < imgItems; i++) {
    $(".pagination").append("<li><span class='fa fa-eye'></span></li>");
  }

  $(".pagination li").click(pagination);
  $(".right span").click(nextSlider);
  $(".left span").click(prevSlider);

  setInterval(function() {
    nextSlider()
  }, 3000)

  function pagination() {
    var paginationPos = $(this).index() + 1;
    $(".slider li").hide();
    $('.slider li:nth-child(' + paginationPos + ')').show();
    $(".pagination li").css("opacity","0.5");
    $(this).css("opacity","1");
  }

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++
    }

    $(".pagination li").css("opacity","0.5");
    $('.pagination li:nth-child(' + imgPos + ')').css("opacity","1");
    
    $(".slider li").hide();
    $('.slider li:nth-child(' + imgPos + ')').show();
  }

  function prevSlider() {
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--
    }

    $(".pagination li").css("opacity","0.5");
    $('.pagination li:nth-child(' + imgPos + ')').css("opacity","1");
    
    $(".slider li").hide();
    $('.slider li:nth-child(' + imgPos + ')').show();
  }
})