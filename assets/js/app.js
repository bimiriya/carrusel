$(document).ready(function() {
  $(".jumper li:first-child").css("opacity","1");

  var imgItems = $(".slider li").length;
  var imgPos = 1;

  for (var i = 0 ; i < imgItems; i++) {
    $(".jumper").append("<li><span class='glyphicon glyphicon-eye-open'></span></li>");
  }

  $(".jumper li").click(pagination);
  $(".right span").click(nextSlider);
  $(".left span").click(prevSlider);

  setInterval(function() {
    nextSlider()
  }, 3000)

  function pagination() {
    var paginationPos = $(this).index() + 1;
    $(".slider li").hide();
    $('.slider li:nth-child(' + paginationPos + ')').show();
    $(".jumper li").css("opacity","0.5");
    $(this).css("opacity","1");
  }

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++
    }

    $(".jumper li").css("opacity","0.5");
    $('.jumper li:nth-child(' + imgPos + ')').css("opacity","1");
    
    $(".slider li").hide();
    $('.slider li:nth-child(' + imgPos + ')').show();
  }

  function prevSlider() {
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--
    }

    $(".jumper li").css("opacity","0.5");
    $('.jumper li:nth-child(' + imgPos + ')').css("opacity","1");
    
    $(".slider li").hide();
    $('.slider li:nth-child(' + imgPos + ')').show();
  }
})