$.ajax({
      url: "./json/04pt1_pd4.json",
      dataType: "json",
      success: function(data){
        if(data.length>0){

          for(var i in data){

            var url = data[i].url;

            $(".pdbox5").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
          }
        }        
      }
    });