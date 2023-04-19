$(document).ready(function(){
    //ul의 너비 = ul의 너비 * li의 개수
    var slideBoxW = $('ul.slide_box').width(),    //1200
        slideLiLength = $('ul.slide_box li').length,
        autoSlide;

    //기본모습세팅
    $('.slide_box').width(slideBoxW * slideLiLength);
    $('.slide_box li:last').prependTo('.slide_box');
    $('.slide_box').css({marginLeft:-1200});

    
    //next 버튼
    $('.btn_next').click(function(){    //3)
        clearTimeout(autoSlide)
        $('.slide_box:not(:animated)').animate({marginLeft:'-='+1200}, 500, function(){     //marginLeft = marginLeft - 1200        marginLeft -=1200
            $('.slide_box li:first').appendTo('.slide_box');   //첫째를 맨뒤로 보내고
            $('.slide_box').css({marginLeft:-1200});   //위치 재정비
        });
        autoSlide = setTimeout(autoClick, 2000);    //4)
    });

    
    //prev 버튼
    $('.btn_prev').click(function(){
        clearTimeout(autoSlide)
        $('.slide_box:not(:animated)').animate({marginLeft:'+='+1200}, 500, function(){ 
            $('.slide_box li:last').prependTo('.slide_box'); 
            $('.slide_box').css({marginLeft:-1200});
        });
        autoSlide = setTimeout(autoClick, 2000);
    });

    
    
    autoSlide = setTimeout(autoClick, 2000);    //1) 예약명령어   2초뒤에 한번실행   

    function autoClick(){  //    2) 
        $('.btn_next').click();
    }
        

})