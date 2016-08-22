(function($){
  //Enable Modals
  $(function(){
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  //enable tooltips
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50, html: true});
  });
  //Enable testimonial slider
  $('.my-slider').unslider({
    arrows: false,
    autoplay: true,
    speed: 700,
  });

  //enable side sliding nav
  $('.button-collapse').sideNav();

  //enable parallax scroll
  $('.parallax').parallax();

  //enable expanding list (rooms and rates page) 
  //needs to be condensed into one function for each list
  $(document).ready(function(){
    var flag = 1;
    $('#more-list').click(function() {
      if(flag == 2){
        console.log("Begin list1 function UP");
        $('.hidden-show').slideUp( "600", function() {
          // Animation complete.
          $('#more-list').html("add");

          flag = 1;
        });
      }else{
        console.log("Begin list1 function DOWN");
        $('.hidden-show').slideDown( "600", function() {
          // Animation complete.
          $('#more-list').html("remove");

          flag = 2;
        });
      }

    });
  });

  //enable expanding list (rooms and rates page) 
  //needs to be condensed into one function for each list
  $(document).ready(function(){
    var flag2 = 1;
    $('#more-list2').click(function() {
      if(flag2 == 2){
        console.log("Begin list2 function UP");
        $('.hidden-show2').slideUp( "600", function() {
          // Animation complete.
          $('#more-list2').html("add");

          flag2 = 1;
        });
      }else{
        console.log("Begin list2 function DOWN");
        $('.hidden-show2').slideDown( "600", function() {
          // Animation complete.
          $('#more-list2').html("remove");

          flag2 = 2;
        });
      }
    });
  });

  //enable select dropdown (# of people in booking)
  $(document).ready(function() {
    $('select').material_select();
  });
  
  //enable datepicker in booking form
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  //enable smooth scroll
  //enable slider (image slider)
  $(document).ready(function(){
    $('.slider').slider({full_width: true});
  });

  //scrollfire options
  var options = [
    {selector: '.fire-3', offset: 200, callback: function() {
       $('.fire-1').css('visibility','visible').hide().fadeIn(1000);
       $('.fire-2').css('visibility','visible').hide().fadeIn(2500);
       $('.fire-3').css('visibility','visible').hide().fadeIn(4000);
       console.log("asdf");
    } },
    // {selector: '.other-class', offset: 200, callback: function() {
    //   customCallbackFunc();
    // } },
  ];
  Materialize.scrollFire(options);

  $( document ).ready(function(){
    $('.collapsible').collapsible();
    $('ul.tabs').tabs();
  });
}); // end of document ready
})(jQuery); // end of jQuery name space