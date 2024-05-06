$(function() {
  // id属性がchange-colorの要素をクリックしたら
  $('#change-color').on('click', function() {
    // id属性がtargetの要素の色を変える
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素をクリックしたら
  $('#change-text').on('click', function() {
    // id属性がtargetの要素の文字内容を変える
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素をクリックしたら
  $('#fade-out').on('click', function() {
    // id属性がtargetの要素をフェードアウトする
    $('#target').fadeOut();
  }); 
  // id属性がfade-inの要素をクリックしたら
  $('#fade-in').on('click', function() {
    // id属性がtargetの要素をフェードインする
    $('#target').fadeIn();
  }); 
});