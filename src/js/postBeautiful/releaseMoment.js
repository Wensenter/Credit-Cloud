
// 删除标签
$('.close').on('click',function() {
  $(this).parent().remove()
})
// 删除图片
$('.closeImg').on('click',function() {
  $(this).parent().remove()
})

// 点击添加标签
$('.release_tip_item_add').on('click',function() {
  $('.release_post_box').fadeOut()
  $('.release_tip_page').fadeIn()
})
// 点击确认添加标签
$('.confirm_add').on('click',function() {
  $('.release_post_box').fadeIn()
  $('.release_tip_page').fadeOut()
})
// 点击你在哪里按钮
$('.release_addr_add').on('click',function() {
  $('.release_post_box').fadeOut()
  $('.release_addr_page').fadeIn()
})
// 点击地址列表
$('.search_addr_list').on('click',function() {
  $('.release_post_box').fadeIn()
  $('.release_addr_page').fadeOut()
})

// 清除历史标签
$('.del_list_box').on('click',function() {
  $('.history_lists').find('.search_tip_items').empty()
})