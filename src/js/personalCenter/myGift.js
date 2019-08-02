let rule_html = `
<!-- 兑换须知 -->
<div class="rule_box">
  <h1>兑换须知</h1>
  <div class="text">
    <p>兑换线下礼品时必须在工作人员面前
      点击“兑换”。</p>
    <span> “已兑换”为无效卡券。</span>
  </div>
  <div class="know_btn">
    我知道了
  </div>
</div>
`
let exChange_html = `
<div class="rule_box exChange">
<h1>兑换须知</h1>
<div class="text">
  <p>兑换线下礼品时必须在工作人员面前
    点击“兑换”。</p>
  <span> “已兑换”为无效卡券。</span>
</div>
<div class="bottom_btn ">
  <div class="btn canel"></div>
  <div class="btn confirm"></div>
</div>
</div>
`
let grey_html = `
<!-- 兑换须知 -->
<div class="rule_box">
  <h1>已兑换</h1>
  <div class="text">
    <span> “已兑换”为无效卡券。</span>
  </div>
  <div class="know_btn">
    我知道了
  </div>
</div>
`
{// 页面进入显示规则
$('.mask_box').empty().append(rule_html).fadeIn()
// 点击我知道了
$('.know_btn').on('click',function() {
  $('.mask_box').fadeOut()
})}
// 点击兑换/已兑换
$('.right').on('click',function() {
  let this_right = $(this)
  let text = this_right.get(0).innerText
  console.log(this_right.get(0).innerText)
  if(text === '兑换') {
    $('.mask_box').empty().append(exChange_html).fadeIn()
    console.log($('.mask_box'))
  }
  if(text === '已兑换') {
    $('.mask_box').empty().append(grey_html).fadeIn()
  }
  // 点击我知道了
  $('.know_btn').on('click',function() {
    $('.mask_box').fadeOut()
  })
  // 点击确定兑换
  $('.confirm').on('click',function() {
    this_right.addClass('active')
    this_right.text('已兑换')
    $('.mask_box').fadeOut()
  })
  // 点击确定兑换
  $('.canel').on('click',function() {
    $('.mask_box').fadeOut()
  })
})
