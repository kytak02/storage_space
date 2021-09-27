//역자의 다른 책 api
  $(function(){
    $.ajax({
      method:"GET",
      url:"https://dapi.kakao.com/v3/search/book?target=title",
      data:{query:"세상의 봄"},
      headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
    })
      .done(function(msg){
      console.log(msg.documents[1].thumbnail);

      var divs = document.getElementsByTagName('div');

      for (var i=0; i<divs.length; i++){

        $(".ct8_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

        var str1 = msg.documents[i].title;
        var str2 = str1.substring(0,12);
        var str3 = msg.documents[i].price;
        var str4 = msg.documents[i].sale_price;

        $(".ct8_book").eq(i).append("<br>"+"<h5>"+'<a href="#">'+str2+"..."+"</a>"+"</h5>");
        $(".ct8_book").eq(i).append("<br>"+"<p>"+'<a href="#">'+str3+"원"+"<span>"+str4+"원"+"</span>"+"</a>"+"</p>");                                            
      }
    });
  });