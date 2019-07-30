// 搜索
{
  $('.search-input').focus(function(){
    $('.canel').fadeIn()
    $('.circle').fadeOut()
    $('.search_list_box').fadeIn()
  });
// 取消
$('.canel').on('click',function() {
  $('.canel').fadeOut()
  $('.circle').fadeIn()
  $('.search_list_box').fadeOut()
})
}

// 点击切换导航栏
$('.nav_item').on('click',function() {
  $('.nav-active').removeClass('nav-active')
  $(this).addClass('nav-active')
})

// 点击每一天动态
$('.list_item').on('click',function() {
  location.href='./recommendDetail.html'
})