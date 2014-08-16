$(document).ready(function() {
  // Attach the click event
  $('a[href*=#]').bind("click", function(e) {
    e.preventDefault();
  
    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - 80;
  
    $('html').animate({ 'scrollTop': scrollToPosition }, 1000, function(){
      window.location.hash = "" + target;
      // This hash change will jump the page to the top of the div with the same id
      // so we need to force the page to back to the end of the animation
      $('html').animate({ 'scrollTop': scrollToPosition }, 0);
    });
  });
  
  //Close Nav on mobile click
  $('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
  });
  
  //Close video when modal is closed
  $('body').on('hidden.bs.modal', '.modal', function () {
  $('video').trigger('pause');
  });
});
