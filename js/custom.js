$(document).ready(function() {
  $('.panels').panelSnap({
    $menu: $('.nav'),
    slideSpeed: 300
  });
  
  //Highlight nav link on click
  $('ul.nav > li').click(function (e) {
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');                
  }); 
});
