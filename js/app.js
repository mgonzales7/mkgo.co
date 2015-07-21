
var expShown = false;
var projShown = false;
var contShown = false;
var time = 0;

var main = function() {
  $('.button').click(function() {
    $('.links').fadeToggle(600);
    $(this).fadeToggle(100);

  });
  $('.return').click(function() {
  	  setTimeout(function() {
    time = 1000;
    $('.links').fadeToggle(0);
    $('.button').fadeToggle(900);
    if (expShown===true){
  		  $('#Experience').fadeToggle(600);
  		  expShown=false;
        time = 1000;
  		}
  	if (projShown===true){
  		  $('#project').fadeToggle(600);
  		  projShown=false;
        time = 1000;
  	}
    if (contShown===true){
        $('#contact').fadeToggle(600);
        contShown=false;
    }
  	   }, time);



  });
  $('.exp').click(function() {
  	setTimeout(function() {
      time = 1000;
  	if (expShown===false){
   		 $('#Experience').fadeToggle(600);
   		 expShown=true;
   		}
   	}, 300);
   	if (projShown===true){
  		  $('#project').fadeToggle(600);
  		  projShown=false;
  		}
    if (contShown===true){
        $('#contact').fadeToggle(300);
        contShown=false;
      }  

  });
  $('.proj').click(function() {
  	setTimeout(function() {
      time = 1000;
    	if (projShown===false){
   		 $('#project').fadeToggle(600);
   		 projShown=true;
   		 
   		}
   	}, 300);
   	if (expShown===true){
  		  $('#Experience').fadeToggle(300);
  		  expShown=false;
  		}
    if (contShown===true){
        $('#contact').fadeToggle(300);
        contShown=false;
      }

  });
    $('.cont').click(function() {
    setTimeout(function() {
      time = 1000;
      if (contShown===false){
       $('#contact').fadeToggle(600);
       contShown=true;
       
      }
    }, 300);
    if (expShown===true){
        $('#Experience').fadeToggle(300);
        expShown=false;
      }
    if (projShown===true){
        $('#project').fadeToggle(300);
        projShown=false;
      }

  });

    $('.email').click(function() {
       $('.info').fadeToggle(600);
    });
     $('.info').click(function() {
       $('.info').fadeToggle(600);
    });
 
  $('a[href*=#]').click(function(e) {
  	
              e.preventDefault();

              var target;
              if(($(this).attr("href"))==="#")
                  target = $("#top");
              else
                  target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               setTimeout(function() {
              $('html,body').animate({
                   scrollTop: (target.offset().top) - 50
              }, 1000, 'swing');
          }, 500);
          });
     	

};


$(document).ready(main);