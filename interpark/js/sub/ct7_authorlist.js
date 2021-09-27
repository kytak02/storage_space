//저자 소개 json
  $(function(){//이치조 미사키 json
    $(function(){
      $.get("./json/sub/ct7_author1.txt", function(data){
        $(".ct7_author2").html(data);
      });
    });
    $(function(){//권영주 json
      $.get("./json/sub/ct7_author2.txt", function(data){
        $(".ct7_author4").html(data);
      });
    });
  });