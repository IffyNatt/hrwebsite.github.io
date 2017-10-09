$(document).ready(function(){  

        /*Maps script*/
    var maps= new GMaps({
      div: '.map',
      lat: 33.7959023,
      lng: -118.006,
      zoom:17,
    });

    maps.addMarker({
      lat: 33.7959023,
      lng: -118.0096259,
      title: 'hr Network Office',
    });


    /*Complaint button Page scroll Script

    $('.go-to-complaince-section').click(function(){
        $('html, body').animate({scrollTop:$('.complaince-section').offset().top},1000);
    });



    /*Header Nav scroll */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#additional_service"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
    });    

});