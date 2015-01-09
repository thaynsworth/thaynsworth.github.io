console.log('app.js works!')
 
 $(function(){

    $('div.walksafe').hover(
      function() {
        $(this).animate({'background-color':'blue'});
      },
      function(){
        $(this).animate({opacity:'0'});
      }
    ); 
  }) 