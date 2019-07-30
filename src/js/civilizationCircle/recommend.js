// 点击切换导航栏
$('.nav_item').on('click',function() {
  $('.nav-active').removeClass('nav-active')
  $(this).addClass('nav-active')
})

// 操作栏
{let actionIconSrc ={
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
}
