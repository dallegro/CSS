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

        //자연스럽게 scroll
        $('html,body').animte({
            sc
            rollTop: $(this).offset().top - 120
        }, 1500);

    }); //more .click()

    //3.What's new slider

    var slider = $('.slider');
    $('.slider>.box:last-child').insertBefore('.slider>.box:first-child');
    slider.css('margin-left', '-100%');

    //슬라이딩 함수 만들기
    function move() {
        slider.animate({
            marginLeft: '-200%'
        }, 800, function () {
            $('.slider>.box:first').insertAfter('.slider>.box:last');
            slider.css('margin-left','-100%');
        });
        
        //블릿변경함수
        var chgB = function(bseq){
            $('.new-pager li').eq(bseq).addClass('on').siblings().removeClass('on');
        }
        
        
        var bseq= $('.slider').find('.box').eq(2).attr('data-seq');
        console.log(bseq);
        chgB(Number(bseq));
        //alert(bseq);
    }
    
    //함수호출 - 실행 확인 (1회 실행)
    //move();
    
    //자동슬라이드 함수
    function autoplay(){
        setInterval(move,3000);
    }
    
    autoplay();
    //블릿변경함수
    
    
}) //jQuery