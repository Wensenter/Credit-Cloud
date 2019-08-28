// 点击播放按钮
$('.list_videos').on('click',function(e) {
  e.stopPropagation()
  let src = $(this).find('video')[0].src
  $('.video_mask_box').fadeIn()
  $('#mask_video').attr('src',src).attr('controls',true)
  $('#mask_video').get(0).play()
})
// 关闭蒙层
$('.video_mask_box').on('click',function() {
  $(this).fadeOut()
  $('#mask_video').get(0).pause()
  $('#mask_video').attr('src','')
})