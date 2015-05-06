
var expShown = false;
var projShown = false;

var main = function() {
  $('.button').click(function() {
    $('.links').fadeToggle(600);
    $(this).fadeToggle(100);

  });
  $('.return').click(function() {
  	  setTimeout(function() {
    $('.links').fadeToggle(0);
    $('.button').fadeToggle(900);
    if (expShown===true){
  		  $('#Experience').fadeToggle(600);
  		  expShown=false;
  		}
  	if (projShown===true){
  		  $('#project').fadeToggle(600);
  		  projShown=false;
  	}
  	   }, 1000);



  });
  $('.exp').click(function() {
  	setTimeout(function() {
  	if (expShown===false){
   		 $('#Experience').fadeToggle(600);
   		 expShown=true;
   		}
   	}, 300);
   	if (projShown===true){
  		  $('#project').fadeToggle(600);
  		  projShown=false;
  		}

  });
  $('.proj').click(function() {
  	setTimeout(function() {
    	if (projShown===false){
   		 $('#project').fadeToggle(600);
   		 projShown=true;
   		 
   		}
   	}, 300);
   	if (expShown===true){
  		  $('#Experience').fadeToggle(300);
  		  expShown=false;
  		}

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