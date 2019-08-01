// 点击播放按钮
$('.playBtn').on('click',function() {
  $('#video').get(0).play()
  $('#video').attr('controls',true)
  $(this).fadeOut()
})