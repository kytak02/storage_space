$(function(){
                                    //클릭시 넘어가는 중간 슬라이드
                                    $(function(){
                                        function prev (){                                    
                                            $(".ct3_middle > li:last").prependTo(".ct3_middle");
                                            $(".ct3_middle").css({marginLeft:-245});
                                            $(".ct3_middle").stop().animate({marginLeft:0});                                    
                                        }

                                        function next (){
                                            $(".ct3_middle").stop().animate({marginLeft:-245},function(){
                                                $(".ct3_middle > li:first").appendTo(".ct3_middle");
                                                $(".ct3_middle").css({marginLeft:0});
                                            });
                                        }

                                        $(".ct3_prev").click(function(){
                                            prev();
                                        });
                                        $(".ct3_next").click(function(){
                                            next();
                                        });
                                    });
                                    //자동으로 넘어가는 오른쪽 슬라이드
                                    $(function(){
                                        var i = 0;

                                        function slide (){
                                            i++;
                                            if (i > $(".ct3_autobook > li:last").index()){
                                                i = 0;
                                            }
                                            $(".ct3_autobook > li").eq(i).stop().fadeIn();
                                            $(".ct3_autobook > li").eq(i-1).stop().fadeOut();
                                        }
                                        setInterval(slide,5000);
                                    });
                                });