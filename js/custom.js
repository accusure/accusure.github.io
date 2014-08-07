$(document).ready(function() {
  var $window;
  $window = $(window);
  return $("section[data-type=\"background\"]").each(function() {
    var $bgobj;
    $bgobj = $(this);
    return $(window).scroll(function() {
      var coords, yPos;
      yPos = -($window.scrollTop() / $bgobj.data("speed"));
      coords = "50% " + yPos + "px";
      return $bgobj.css({
        backgroundPosition: coords
      });
    });
  });
});
