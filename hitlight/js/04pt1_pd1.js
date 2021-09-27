$.ajax({
  url:"./json/04pt1_pd1.json",
  dataType: "json",
  success: function(data){
    if(data.length>0){

      for(var i in data){
        var hover = data[i].hover;
        var url = data[i].url;

        $(".pdbox2").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
        $(".pdbox2").eq(i).append('<a href="#"><div class="pdbox2hover">'+data[i].hover+'</div></a>');           
      }
    }
  }
});    