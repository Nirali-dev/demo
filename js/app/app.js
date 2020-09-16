$.app = {
  appfunction: function() {
    $(".custom-control-nav1 > li ").on("click",function(){
      $(this).addClass('active').siblings().removeClass('active');
      var index = $('.custom-control-nav1 > li').index($(this)); //Get the index of clicked navigation element
      var nav = $('.flex-control-nav a')[index]; //Get the navigation element of corresponding index from flexslider.
      $(nav).trigger('click'); //Finally, trigger click
    });

    $('.num').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
   
  }  
}

jQuery(document).ready(
  function($) {
     
    $('.flexslider').flexslider({
      animation: "slide",
    });
    $('.flexslider1').flexslider({
      animation: "slide",
    });
    $('.flexslider2').flexslider({
      animation: "slide",
    });
    $.app.appfunction();
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();

      if (scroll >= 800) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
  }  
);