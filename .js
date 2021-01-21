$(document).ready(function() {
    $("#helloguest").delay(800).fadeIn(1800);
    $("#sm1").fadeIn(1000);
    $("#sm2").fadeIn(1000);
  
    $("#aboutbtn").click(function() {
      var top = $("#about").offset().top;
      $("body, html").animate({
  
        scrollTop: top
      }, "easeInOutCubic");
    });
    $("#homebtn").click(function() {
      var top = $("#home").offset().top;
      $("body, html").animate({
        scrollTop: top
      }, "easeInOutCubic");
    });
    $("#porfoliobtn").click(function() {
      var top = $("#porfolio").offset().top;
      $("body, html").animate({
        scrollTop: top
      }, "easeInOutCubic");
    });
  
    // $("#contactbtn").click(function(){
    // 	var top = $("#contact").offset().top;
    // 	$("body, html").animate({
    // 		scrollTop: top
    // 	}, 400);
    // })
  });