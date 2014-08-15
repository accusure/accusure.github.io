$(document).ready(function() {
  $('.banner').click(function (){
    $('html').animate({
      scrollTop: $('#banner').offset().top - 80
    }, 500);
    return false;
  });
  $('.video').click(function (){
    $('html, body').animate({
      scrollTop: $('#video').offset().top - 80
    }, 500);
    return false;
  });
  $('.why').click(function (){
    $('html, body').animate({
      scrollTop: $('#why').offset().top - 80
    }, 500);
    return false;
  });
  
  //Close Nav on mobile click
  $('.nav a').on('click', function(){
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
  });
});
