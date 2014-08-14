$(document).ready(function() {
  $('.panels').panelSnap({
    $menu: $('.nav'),
    slideSpeed: 300,
    directionThreshold: 150
  });
  
  // store the position of the element in position variable
  var position = $('#why').offset();
  console.log(position);
  
  $('.panels').scroll(function () {
    //the current height
    var y = $(this).scrollTop();
  
    if(y >= position.top){
      $.event.special.scrollstart.enabled = false;
    }else{
      $.event.special.scrollstart.enabled = true;
    }
  });
  
  //Highlight nav link on click
  $('ul.nav > li').click(function (e) {
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');                
  }); 
});
