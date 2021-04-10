$( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).removeClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).addClass( "newClass" );
      }, 1500 );
    }


     $( "#slider" ).slider();

       $( "#resizable" ).resizable();
  } );