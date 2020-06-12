$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
    e.preventDefault();                    // Prevent(停止) default action of button
    $(this)                                // Get the element the user clicked on
      .next('.accordion-panel')            // Select following panel(面板) 
      .not(':animated')                    // If it is not currently animating(如果目前並未設定動畫展示)
      .slideToggle();                      // Use slide toggle to show or hide it
  });