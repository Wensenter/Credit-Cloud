
var url = window.location.href;
var origin = window.location.origin;
var Title = '我是这条gai的守财高手 ';
var Desc = '看过这么多防骗秘籍还守不住自己的钱包？这里全帮你搞定！';
var Link = "".concat(origin, "/publicityDay515/pages/publicityDay515.html");
var Icon = "".concat(origin, "/publicityDay515/images/shareIcon.jpg");

function sharePage() {
  axios.get("http://wesalttech.iwesalt.com/WeixinJSSDK/JsSdk", {
  params: {
    url: url
  }
}).then(function (res) {
  var _res$data = res.data,
    AppId = _res$data.AppId,
    NonceStr = _res$data.NonceStr,
    Signature = _res$data.Signature,
    Timestamp = _res$data.Timestamp;
  wx.config({
    debug: false,
    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: AppId,
    // 必填，公众号的唯一标识
    timestamp: Timestamp,
    // 必填，生成签名的时间戳
    nonceStr: NonceStr,
    // 必填，生成签名的随机串
    signature: Signature,
    // 必填，签名
    jsApiList: ['onMenuShareTimeline', //分享到朋友圈
      'onMenuShareAppMessage', //分享给朋友
      //'onMenuShareQQ',
      //'onMenuShareWeibo',
      'hideMenuItems', 'hideAllNonBaseMenuItem'] // 必填，需要使用的JS接口列表
  });
wx.ready(function () {
  //需在用户可能点击分享按钮前就先调用
  wx.onMenuShareAppMessage({
    title: Title,
    // 分享标题
    desc: Desc,
    // 分享描述
    link: Link,
    // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: Icon, // 分享图标
    success: function () {
      if(vm.swiper.realIndex ===10 && vm.shareBtn === true) {
        window.location.href="http://shake617ae78e45.wesaltmall.com/Home/Index?Id=61"
      }
      },
  });
  wx.onMenuShareTimeline({
    title: Title,
    // 分享标题
    link: Link,
    // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: Icon, // 分享图标
    desc: Desc,
    success: function () {
      if(vm.swiper.realIndex ===10 && vm.shareBtn === true) {
        window.location.href="http://shake617ae78e45.wesaltmall.com/Home/Index?Id=61"
      }
      },
  });
  // 相机
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    }
    });
});
});
}
sharePage()

