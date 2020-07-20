//panel
$(document).ready(function(){
    var pBtn = '.panelBtn'; 
    var panel = '.panel';
    var bg = '.blackBg';
    
    //panelBtn + click = panel+BG
    $(pBtn).click(function(){
        $(bg).fadeIn(100, function(){
            $('html, body').css('overflow', 'hidden');
        });
        $(panel).addClass('active');
    });
    //bg + click = panel remove 
    $(bg).click(function(){
        $(bg).fadeOut(100, function(){
            $('html, body').css('overflow', 'visible');
        });
        $(panel).removeClass('active');
    });
});

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