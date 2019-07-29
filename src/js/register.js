var doc = document;
    $community = doc.getElementById('community'),
    $school = doc.getElementById('school'),
    $communityRadio = doc.getElementsByClassName('community')[0],
    $shcoolRadio = doc.getElementsByClassName('school')[0];

    $community.addEventListener('click',function(e){
        $communityRadio.classList.add('active');
        $shcoolRadio.classList.remove('active');
    },);

    $school.addEventListener('click', function (e) {
        $shcoolRadio.classList.add('active');
        $communityRadio.classList.remove('active');
    }, );