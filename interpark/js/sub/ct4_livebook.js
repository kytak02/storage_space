//라이브북 버튼 클릭 시 넘어가는 슬라이드
    $(function(){
        function prev (){                                
            $(".ct4_mainpic > li:last").prependTo(".ct4_mainpic");
            $(".ct4_mainpic").css({marginLeft:-400});
            $(".ct4_mainpic").stop().animate({marginLeft:0});                                                                    
        }
        function next (){
            $(".ct4_mainpic").stop().animate({marginLeft:-400},function(){
                $(".ct4_mainpic > li:first").appendTo(".ct4_mainpic");
                $(".ct4_mainpic").css({marginLeft:0});
            });
        }
        $(".ct4_prev").click(function(){
            prev();
        });
        $(".ct4_next").click(function(){
            next();
        });
    });