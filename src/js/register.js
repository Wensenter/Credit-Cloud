window.onload = function(){
    var doc = document,
        $community = doc.getElementById('community'),
        $school = doc.getElementById('school'),
        $communityRadio = doc.getElementsByClassName('community')[0],
        $shcoolRadio = doc.getElementsByClassName('school')[0],
        $name = doc.getElementById('community')

    $community.addEventListener('click', function (e) {
        $communityRadio.classList.add('active');
        $shcoolRadio.classList.remove('active');
    });

    $school.addEventListener('click', function (e) {
        $shcoolRadio.classList.add('active');
        $communityRadio.classList.remove('active');
    });

    var numArr = ['测试1', '测试2', '测试3', '测试4', '测试5'];

    var mobileSelect3 = new MobileSelect({
        trigger: '#trigger3',
        title: '所属社区',
        wheels: [
            { data: numArr },
            { data: numArr },
            { data: numArr }
        ],
        position: [0, 0, 0, 0, 0],
        transitionEnd: function (indexArr, data) {
            //console.log(data);
        },
        callback: function (indexArr, data) {
            console.log(data);
        }
    });
}

