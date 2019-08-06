class PreviewImg {
  constructor(img_class) {
    this.img_class = img_class
    this.swiper = null
    this.initSwiper()
    this.imgClick()
    this.closeMask()
  }
  initSwiper () {
    let img_html = `
    <!-- 图片蒙层 -->
    <div class="imgs_mask_box">
      <div class="imgs_content_box">
          <div class="swiper-container">
            <div class="swiper-wrapper">
            
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
      </div>
    </div>
    `
    $('body').append(img_html)
    this.swiper = new Swiper ('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      observer:true,
      observeParents:true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    }) 
  }
  imgClick() {
    // 点击图片
    let that = this
    $(this.img_class).on('click',function(e) {
      e.stopPropagation()
      let img_Html= ''
      let img_index = $(this).index()
      $(this).parent().find('img').each(function(index,el){
        // img_src.push(el.src)
        img_Html += `
        <div class="swiper-slide">
        <img src="${el.src}" alt="">
        </div>`
      });
      $('.swiper-wrapper').empty().append(img_Html)
      that.swiper.slideTo(img_index, 1000, false);
      $('.imgs_mask_box').fadeIn()
      console.log(img_Html)
    })
  }
  closeMask() {
    $('.imgs_mask_box').on('click',function() {
      $('.imgs_mask_box').fadeOut()
    })
  }
}