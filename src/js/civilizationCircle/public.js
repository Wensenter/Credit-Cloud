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
// 操作栏
let actionIconSrc ={
  star:'../../images/civilizationCircle/icon_start.png',
  unStar:'../../images/civilizationCircle/icon_unstart.png',
  like:'../../images/civilizationCircle/icon_like.png',
  unLike:'../../images/civilizationCircle/icon_unLike.png'
}
// 是否收藏
$('.star').on('click',function(){
  let img = $(this).find('img')
  let alt = img.attr('alt')
  if(alt === '未收藏') {
    img.attr('alt','已收藏')
    img.attr('src',actionIconSrc.star)
  }
  if(alt === '已收藏') {
    img.attr('alt','未收藏')
    img.attr('src',actionIconSrc.unStar)
  }
})
// 是否点赞
$('.like').on('click',function(){
  let img = $(this).find('img')
  let alt = img.attr('alt')
  if(alt === '未点赞') {
    img.attr('alt','已点赞')
    img.attr('src',actionIconSrc.like)
  }
  if(alt === '已点赞') {
    img.attr('alt','未点赞')
    img.attr('src',actionIconSrc.unLike)
  }
})

