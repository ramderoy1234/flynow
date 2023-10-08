
$( document ).ready(function() {
    // Bounce button
    $("#animatebutton").click(function(){
        const element =  document.querySelector('.animatebutton');
        element.classList.add('animated', 'rubberBand');
        setTimeout(function() {
          element.classList.remove('rubberBand'); 
  },        2000); 
    });
    
    
});


                        
                        