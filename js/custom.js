$(document).ready(function() {
  $('.banner').click(function (){
    $('html').animate({
      scrollTop: $('#banner').offset().top - 80
    }, 500);
  });
  $('.video').click(function (){
    $('html, body').animate({
      scrollTop: $('#video').offset().top - 80
    }, 500);
  });
  $('.why').click(function (){
    $('html, body').animate({
      scrollTop: $('#why').offset().top - 80
    }, 500);
  });
});
