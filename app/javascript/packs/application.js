// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("../calendar")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(function(){
  // ウィンドウを開く
  $('#modal_open_day_add').on('click', function(){
    $('#modal').fadeIn(300);
    return false;
  });
  // ウィンドウを閉じる
  $('#modal_close').on( 'click', function() {
  $( '#modal' ).fadeOut( 300 );
  return false;
  }); 
});

// コンテンツの表示（仮）
// $(function(){
//     // コンテンツの表示
//     $('#calendar_day_item').on('click', function(){
//       $('').
//       return false;
//     });
//     // コンテンツの非表示
//     $('#calendar_day_item').on( 'click', function() {
//     $( '#modal' ).
//     return false;
//     }); 
// });
