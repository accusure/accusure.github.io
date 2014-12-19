$(document).ready(function() {
  // Attach the click event
  $('a[href*=#]').bind("click", function(e) {
    e.preventDefault();
  
    var target = $(this).attr("href"); //Get the target
    var navHeight = $('.navbar').height();
    var scrollToPosition = $(target).offset().top - navHeight;
  
    $('html, body').animate({ 'scrollTop': scrollToPosition }, 500, function(){
      window.location.hash = "" + target;
      // This hash change will jump the page to the top of the div with the same id
      // so we need to force the page to back to the end of the animation
      $('html, body').animate({ 'scrollTop': scrollToPosition }, 0);
    });
  });
  
  //Close Nav on mobile click
  $('.nav a').on('click', function(){ 
    if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").trigger( "click" );
    }
  });
  
  //Close video when modal is closed
  $('body').on('hidden.bs.modal', '.modal', function () {
    $('iframe#accusure-vid').attr('src',''); 
        $('iframe#accusure-vid').attr('src','http://player.vimeo.com/video/104705294');
  });
});
