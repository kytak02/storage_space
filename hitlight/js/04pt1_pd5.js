$.ajax({
      url: "./json/04pt1_pd5.json",
      dataType: "json",
      success: function(data){
        if (data.length>0){

          for (var i in data){

            var top = data[i].top;
            var middle = data[i].middle;
            var bottom = data[i].bottom;

            $(".pdbox6").eq(i).append('<h3>'+data[i].top+'</h3>');
            $(".pdbox6").eq(i).append('<h5>'+data[i].middle+'</h5>');
            $(".pdbox6").eq(i).append('<p>'+data[i].bottom+'</p>');
          }
        }
      }
    });