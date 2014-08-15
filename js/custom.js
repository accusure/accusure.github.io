$(document).ready(function() {
  //Highlight nav link on click
  $('ul.nav > li').click(function (e) {
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');      
  });  
  
  $('.banner').click(function (){
    $('html').animate({
      scrollTop: $('#banner').offset().top - 80
    }, 1000);
  });
  $('.video').click(function (){
    $('html, body').animate({
      scrollTop: $('#video').offset().top - 80
    }, 1000);
  });
  $('.why').click(function (){
    $('html, body').animate({
      scrollTop: $('#why').offset().top - 80
    }, 1000);
  });
});
