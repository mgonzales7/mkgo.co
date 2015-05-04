var main = function() {
  $('.button').click(function() {
    $('.links').fadeToggle(600);
    $(this).fadeToggle(100);

  });
  $('.return').click(function() {
    $('.links').fadeToggle(0);
    $('.button').fadeToggle(900);

  });

};


$(document).ready(main);