//coffee bean Index jQuery



$(document).ready(function () {
    //1.GNB
    $('.menu').click(function () {
        $('nav').animate({
            left: 0
        }, 600); //.animate()
    }); //menu .click()


    $('.close').click(function (e) {
        e.preventDefault(); //a태그 기본이동 막기
        $('nav').animate({
            left: '-90%'
        }, 600); //.animate()
    }); //close .click()

    //2. MD's pick
    $('.md-box').hide();
    $('.md-box').slice(0, 2).show();

    $('#more').click(function (e) {
        e.preventDefault(); //기본이벤트제거
        //숨겨진 박스중 2개씩 슬라이드 다운되게함
        $('.md-box:hidden').slice(0, 2).slideDown();


        //숨겨진 box가 더이사 없을때 more 버튼을 없앰

        if ($('.md-box:hidden').length == 0) {
            $('#more').fadeOut('slow');
        }

        //자연스럽게 scrol
        $('html,body').animte({
            scrollTop: $(this).offset().top - 120
        }, 1500);
    }); //more .click()
    
    //3.What's new slider
    
    

}) //jQuery