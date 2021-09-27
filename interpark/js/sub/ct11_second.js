//이 책을 조회한 회원들이 같이 본 책 api
  $(function(){
    $.ajax({
      method:"GET",
      url:"https://dapi.kakao.com/v3/search/book?target=title",
      data:{query:"사랑"},
      headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
    })
      .done(function(msg){        
      console.log(msg.documents[1].thumbnail);

      var divs = document.getElementsByTagName('div');

      for(var i=0; i<divs.length; i++){

        $(".ct11_bookwrap2 > li").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>"); 

        var str = msg.documents[i].title;
        var str2 = str.substring(0,10);

        $(".ct11_bookwrap2 > li").eq(i).append("<br>"+"<br>"+"<h5>"+str2+"..."+"</h5>");

      }       
    });
  });
  //이 책을 조회한 회원들이 같이 본 책 클릭 슬라이드
  $(function(){

    function prev (){
      $(".ct11_mainwrap2 > .ct11_bookwrap2:last").prependTo(".ct11_mainwrap2");
      $(".ct11_mainwrap2").css({marginLeft:-1000});
      $(".ct11_mainwrap2").stop().animate({marginLeft:0});
    }

    function next (){
      $(".ct11_mainwrap2").stop().animate({marginLeft:-1000}, function(){
        $(".ct11_mainwrap2 > .ct11_bookwrap2:first").appendTo(".ct11_mainwrap2");
        $(".ct11_mainwrap2").css({marginLeft:0});
      });
    }

    $(".ct11_prev2").click(function(){
      prev();
    });

    $(".ct11_next2").click(function(){
      next();
    });

  });