class inputImgShow{
  constructor(img_class) {
    this.img_class = img_class
    this.initHtml ()
    this.imgClick ()
    this.close ()
  }
  initHtml () {
    let img_html = `
    <!-- img_mask -->
    <div class="img_mask">
      <div class="big_img">
          <img src="" alt="">
      </div>
    </div>
    `
    $('body').append(img_html)
  }
  imgClick () {
    let that =this
    $(this.img_class).on('click',function() {
      $('.img_mask').show()
      $('.big_img').find('img').attr('src',$(this).attr('src'))
    })
  }
  close () {
    $('.img_mask').on('click',function() {
      $('.img_mask').hide()
    })
  }
}