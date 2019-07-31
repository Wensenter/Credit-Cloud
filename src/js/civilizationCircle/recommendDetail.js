// 是否点赞
$('.comment_link').on('click',function(){
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

// 回复
$('.comment_text').on('click',function() {
  let name = $(this).attr('data-name')
  $('.publish_input').attr('placeholder',name).val('').focus()
})