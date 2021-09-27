  $(function(){
    $(function(){  
      //책 소개 json    
      $.ajax({
        url:"./json/sub/ct5_first.json",
        dataType:"json",
        success:function(data){
          if(data.length>0){

            for(var i in data){          
              var title = data[i].title;
              var always = data[i].always;
              var hide = data[i].hide;

              $(".ct5_book1").eq(i).append("<h2>"+data[i].title+"</h2>");
              $(".ct5_book1").eq(i).append("<p class='ct5_always'>"+data[i].always+"</p>");
              $(".ct5_book1").eq(i).append("<p class='ct5_book_hidden'>"+data[i].hide+"</p>");
            }
          }
        }
      });     
    }); 

    $(function(){
      //책 소개 스크립트
      $(".ct5_btn1").click(function(){//책 소개 펼쳐보기
        $(this).stop().hide();
        $(".ct5_btn2").stop().show();
        $(".ct5_book_hidden").stop().show();
      });
      $(".ct5_btn2").click(function(){//책 소개 접어보기
        $(this).stop().hide();
        $(".ct5_btn1").stop().show();
        $(".ct5_book_hidden").stop().hide();
      });
    });  

    $(function(){ 
      //출판사 서평 json    
      $.ajax({
        url:"./json/sub/ct5_second.json",
        dataType:"json",
        success:function(data){
          if(data.length>0){

            for(var i in data){          
              var title = data[i].title;
              var always = data[i].always;
              var hide = data[i].hide;              

              $(".ct5_publisher1").eq(i).append("<h2>"+data[i].title+"</h2>");
              $(".ct5_publisher1").eq(i).append("<p class='ct5_always'>"+data[i].always+"</p>");
              $(".ct5_publisher1").eq(i).append("<p class='ct5_publisher_hidden'>"+data[i].hide+"</p>");

            }
          }
        }
      });     
    });

    $(function(){
      //출판사 서평 스크립트
      $(".ct5_btn3").click(function(){//출판사 서평 펼쳐보기
        $(this).stop().hide();
        $(".ct5_btn4").stop().show();
        $(".ct5_publisher_hidden").stop().show();
      });
      $(".ct5_btn4").click(function(){//출판사 서평 접어보기
        $(this).stop().hide();
        $(".ct5_btn3").stop().show();
        $(".ct5_publisher_hidden").stop().hide();
      });
    });

    $(function(){ 
      //본문 중에서 json    
      $.ajax({
        url:"./json/sub/ct5_third.json",
        dataType:"json",
        success:function(data){
          if(data.length>0){

            for(var i in data){          
              var title = data[i].title;
              var always = data[i].always;
              var hide = data[i].hide;              

              $(".ct5_maintext1").eq(i).append("<h2>"+data[i].title+"</h2>");
              $(".ct5_maintext1").eq(i).append("<p class='ct5_always'>"+data[i].always+"</p>");
              $(".ct5_maintext1").eq(i).append("<p class='ct5_maintext_hidden'>"+data[i].hide+"</p>");

            }
          }
        }
      });     
    }); 

    $(function(){
      //본문 중에서 스크립트
      $(".ct5_btn5").click(function(){//본문 중에서 펼쳐보기
        $(this).stop().hide();
        $(".ct5_btn6").stop().show();
        $(".ct5_maintext_hidden").stop().show();
      });
      $(".ct5_btn6").click(function(){//본문 중에서 접어보기
        $(this).stop().hide();
        $(".ct5_btn5").stop().show();
        $(".ct5_maintext_hidden").stop().hide();
      });
    });
  });