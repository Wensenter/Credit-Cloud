// 点击切换导航栏
$('.nav_item').on('click',function() {
  $('.nav-active').removeClass('nav-active')
  $(this).addClass('nav-active')
})

// 操作栏
{let actionIcon ={
  star:'../../images/civilizationCircle/icon_start.png',
  unStar:'../../images/civilizationCircle/icon_unstart.png',
  like:'../../images/civilizationCircle/icon_like.png',
  unLike:'../../images/civilizationCircle/icon_unLike.png'
}
// 是否收藏
$('.star').on('click',function(){
  let starImg = $(this).find('img')
  let starAlt = starImg.attr('alt')
  if(starAlt === '未收藏') {
    starImg.attr('alt','已收藏')
    starImg.attr('src',isStar.star)
    console.log(starImg.attr('src'))
  }
  if(starAlt === '已收藏') {
    starImg.attr('alt','未收藏')
    starImg.attr('src',isStar.unStar)
  }
})}