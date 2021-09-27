      $(function(){
        //루프탑 아이폰 이미지 슬라이드
        $(".phone_wrap").mouseover(function(){// 마우스 오버 시 위로 슬라이드
          $(this).find(".phoneimg1").stop().animate({marginTop: -7660},15000);					
        });
        $(".phone_wrap").mouseleave(function(){// 마우스 리브 시 원상복구
          $(this).find(".phoneimg1").stop().animate({marginTop:0},1000);
        });
      });

      $(function(){
        //매트로폴리탄 미술관 아이폰 이미지 슬라이드
        $(".phone_wrap").mouseover(function(){// 마우스 오버 시 위로 슬라이드
          $(this).find(".phoneimg2").stop().animate({marginTop: -6660},15000);				
        });
        $(".phone_wrap").mouseleave(function(){// 마우스 리브 시 원상복구
          $(this).find(".phoneimg2").stop().animate({marginTop:0},1000);
        });
      });

      $(function(){	
        //	인터파크 도서 이미지 슬라이드
        $(".main").mouseover(function(){// 마우스 오버 시 위로 슬라이드
          $(this).find(".a").stop().animate({marginTop: -1058},5000);					
        });
        $(".main").mouseleave(function(){// 마우스 리브 시 원상복구 
          $(this).find(".a").stop().animate({marginTop:0},1000);
        });

      });
      // 루프탑 이미지 슬라이드
      $(function(){
        $(".main").mouseover(function(){// 마우스 오버 시 위로 슬라이드
          $(this).find(".b").stop().animate({marginTop: -2000},5000);					
        });
        $(".main").mouseleave(function(){// 마우스 리브 시 원상복구
          $(this).find(".b").stop().animate({marginTop:0},1000);
        });
      });

      // 매트로폴리탄 미술관 이미지 슬라이드
      $(function(){
        $(".main").mouseover(function(){// 마우스 오버 시 위로 슬라이드
          $(this).find(".c").stop().animate({marginTop: -2550},5000);					
        });
        $(".main").mouseleave(function(){// 마우스 리브 시 원상복구
          $(this).find(".c").stop().animate({marginTop:0},1000);
        });
      });

      // 히트조명 이미지 슬라이드
      $(function(){
        $(".main").mouseover(function(){// 마우스 오버 시 위로 슬라이드
          $(this).find(".d").stop().animate({marginTop: -1830},5000);					
        });
        $(".main").mouseleave(function(){// 마우스 리브 시 원상복구
          $(this).find(".d").stop().animate({marginTop:0},1000);
        });
      });