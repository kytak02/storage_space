$.ajax({
      url: "./json/04pt1_pd2.json",
      dataType: "json",
      success: function(data){
        if (data.length>0){

          for(var i in data){
            var title = data[i].title;
            var review = data[i].review;
            var url = data[i].url;

            $(".pdbox3").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
            $(".pdbox3").eq(i).append('<br>'+'<a href="#"><h3>'+data[i].title+'</h3></a>');
            $(".pdbox3").eq(i).append('<br>'+'<a href="#"><h5>'+data[i].review+'</h5></a>');
          }
        }
      }
    });