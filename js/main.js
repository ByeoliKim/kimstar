/* popup */
$(document).ready(function(){
    var black_bg = $('.black_bg_popup');
    
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };


    $('.popup .popup_bottom a.close').click(function(){
        
        $('.popup').slideUp(0);
        black_bg.fadeOut(0);
    });
    $('.popup .popup_bottom a.today').click(function(){
        setCookie('maindiv','done',1);
        
        $('.popup').slideUp(0);
        black_bg.fadeOut(0);
    });



    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){  
        $('.popup').css('display','block');
        black_bg.css('display','block');  
    }else{                                  
        $('.popup').css('display','none');  
        black_bg.css('display','none');  
    }
});


/* main */
$(document).ready(function(){
    var swiper = new Swiper('main .swiper-container', {
        loop: true,
        pagination: {
            el: 'main .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});

/* board */
$(document).ready(function(){
        //문서 객체를 변수에 담기
        var btn = '.boardbox .boardBtn a';  /*버튼은 a 태그에게 줘야 합니당*/
        var content = '.boardbox .board_wrap > div';

        //초기 실행 - 문서가 시작하자마자 발생시킬 코드
        $(btn).first().addClass('active');   /*첫번째 버튼 활성화*/
        $(content).first().fadeIn(0); /*첫번째 컨텐츠만 보임*/

        //버튼 클릭
        $(btn).click(function(){
        //버튼 홯성
        $(btn).removeClass('active'); //모든 버튼의 클래스 제거 후
        $(this).addClass('active'); //현재 클릭한 버튼의 클래스 추가

        //컨텐츠 보이게 처리
        var index = $(this).parent().index(); //클릭한 버튼의 부모(li)의 인덱스 번호를 담는 변수

        $(content).fadeOut(0); //모든 컨텐츠를 안 보이게 처리
        $(content).eq(index).fadeIn(0); //클릭한 버튼 부모의 배열 번호와 같은 컨텐츠 박스를 보이게 처리
    });
});

/* store */
$(document).ready(function(){
    var swiper = new Swiper('#store .swiper-container', {
        loop: true,
        pagination: {
            el: '#store .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});

