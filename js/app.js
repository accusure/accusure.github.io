$(function () {
    // Navbar
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".navbar.navbar-fixed-top").addClass("scroll");
        } else {
            $(".navbar.navbar-fixed-top").removeClass("scroll");
        }      
    });

    // scroll back to top btn
    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });
    
    // scroll navigation functionality
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

    // Index project carrousel
	$('.flexslider').flexslider({
		directionNav: false,
		animation: "slide",
		controlNav: true,
		pauseOnHover: true
	});

  $('.contact-popover').popover({delay: { hide: 400 }});

});

// Taken from http://jsfiddle.net/J9fYR/ via http://stackoverflow.com/questions/16740125
(function($) {
  var oldHide = $.fn.popover.Constructor.prototype.hide;

  $.fn.popover.Constructor.prototype.hide = function() {
    if (this.options.trigger === "hover" && this.tip().is(":hover")) {
      var that = this;
      // try again after what would have been the delay
      setTimeout(function() {
        return that.hide.call(that, arguments);
      }, that.options.delay.hide);
      return;
    }
    oldHide.call(this, arguments);
  };
})(jQuery);
