//이 책을 구매한 회원들이 구매한 책 api
  $(function(){
    $.ajax({
      method:"GET",
      url:"https://dapi.kakao.com/v3/search/book?target=title",
      data:{query:"로멘스"},
      headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
    })
      .done(function(msg){        
      console.log(msg.documents[1].thumbnail);

      var divs = document.getElementsByTagName('div');

      for(var i=0; i<divs.length; i++){

        $(".ct11_bookwrap3 > li").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>"); 

        var str = msg.documents[i].title;
        var str2 = str.substring(0,10);

        $(".ct11_bookwrap3 > li").eq(i).append("<br>"+"<br>"+"<h5>"+str2+"..."+"</h5>");

      }       
    });
  });
  //이 책을 구매한 회원들이 구매한 책 클릭 슬라이드
  $(function(){

    function prev (){
      $(".ct11_mainwrap3 > .ct11_bookwrap3:last").prependTo(".ct11_mainwrap3");
      $(".ct11_mainwrap3").css({marginLeft:-1000});
      $(".ct11_mainwrap3").stop().animate({marginLeft:0});
    }

    function next (){
      $(".ct11_mainwrap3").stop().animate({marginLeft:-1000}, function(){
        $(".ct11_mainwrap3 > .ct11_bookwrap3:first").appendTo(".ct11_mainwrap3");
        $(".ct11_mainwrap3").css({marginLeft:0});
      });
    }

    $(".ct11_prev3").click(function(){
      prev();
    });

    $(".ct11_next3").click(function(){
      next();
    });

  });