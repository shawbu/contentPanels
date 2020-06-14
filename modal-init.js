(function(){
    var $content = $('#share-options').detach();   // Remove modal from page
  
    $('#share').on('click', function() {           // 點擊按鈕開起懸浮視窗
      modal.open({content: $content, width:340, height:300});
    });
  }());