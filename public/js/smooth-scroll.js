(function($){
  //enable smooth scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top - 56
       }, 700);
       return false;
      }
    }
  });
})(jQuery); // end of jQuery name space