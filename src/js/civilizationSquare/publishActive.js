window.onload = function () {
    var picSwiper = new Swiper('#picSwiper', {
        autoplay: false,
        loop: true
    });    
    var d = getFormat()
    $("#bt").val(d);

    $('.content button').click(function(){
        $('.bg').show();
    })

    $('.bg').on('touchmove',function(e){
        e.preventDefault();
    })
};

function getFormat() {
    var format = "";
    var nTime = new Date();
    format += nTime.getFullYear() + "-";
    format += (nTime.getMonth() + 1) < 10 ? "0" + (nTime.getMonth() + 1) : (nTime.getMonth() + 1);
    format += "-";
    format += nTime.getDate() < 10 ? "0" + (nTime.getDate()) : (nTime.getDate());
    format += "T";
    format += nTime.getHours() < 10 ? "0" + (nTime.getHours()) : (nTime.getHours());
    format += ":";
    format += nTime.getMinutes() < 10 ? "0" + (nTime.getMinutes()) : (nTime.getMinutes());
    format += ":00";
    return format;
}