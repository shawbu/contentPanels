$('.slider').each(function() {              // For every slider
    var $this   = $(this);                    // Current slider
    var $group  = $this.find('.slide-group'); // Get the slide-group (container)
    var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
    var slides_amount = $slides.length;       // Create jQuery object to hold all slides
    var buttonArray  = [];                    // Create array to hold navigation buttons
    var currentIndex = 0;                     // Hold index number of the current slide
    var timeout;         
      

    // Sets gap between auto-sliding
    function move(newIndex) {          // Creates the slide from old to new one
      var animateLeft, slideLeft;      // Declare variables
      advance();                       // When slide moves, call advance() again
  
      // 註解掉的話，如果在滑動過程又按下面的挑轉按鈕，就會出現bug
      if ($group.is(':animated') || currentIndex === newIndex) {  
        return;
      }

      // For button
      buttonArray[currentIndex].removeClass('active'); // Remove class from item
      buttonArray[newIndex].addClass('active');        // Add class to new item
  
      // 預設 slideLeft ??%，到最後一個的時候變成 slideLeft -??%
      // if (newIndex > currentIndex) {   // If new item > current
        slideLeft = '33%';            // Sit the new slide to the right
        animateLeft = '-33%';         // Animate the current group to the left
      // } else {                         // Otherwise
      //  slideLeft = '33%';           // Sit the new slide to the left
      //  animateLeft = '-33%';          // Animate the current group to the right
      // }

      // For new picture
      // Position new slide to left (if less) or right (if more) of current
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

      console.log($slides.length);

      // For old picture (== new-1)
      $group.animate( {left: animateLeft}, function() {    // Animate slides and
        $slides.eq(currentIndex).css( {left: -100,display: 'block',} ); // Hide previous slide
        $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
        $group.css( {left: 0} );               // Set position of group of slides
        currentIndex = newIndex;               // Set currentIndex to the new image
      });
    }
  
    // Timeout
    function advance() {                     // Used to set 
      clearTimeout(timeout);                 // Clear previous timeout
      timeout = setTimeout(function() {      // Set new timer
        if (currentIndex < ($slides.length - 1)) { // If slide < total slides
          move(currentIndex + 1);            // Move to next slide
        } else {                             // Otherwise
          move(0);                           // Move to the first slide
        }
      }, 2000);                              // Milliseconds timer will wait
    }
  
    // For button
    $.each($slides, function(index) {
      // Create a button element for the button
      var $button = $('<button type="button" class="slide-btn">&bull;</button>'); //&bull是點的意思
      if (index === currentIndex) {    // If index is the current item
        $button.addClass('active');    // Add the active class
      }
      $button.on('click', function() { // Create event handler for the button
        move(index);                   // It calls the move() function
      }).appendTo('.slide-buttons');   // Add to the buttons holder
      buttonArray.push($button);       // Add it to the button array
    });
  
    // Trigger
    advance();                          // Script is set up, advance() to move it
  });

