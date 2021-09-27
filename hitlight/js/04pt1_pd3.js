$.ajax({
  url: "./json/04pt1_pd3.json",
  dataType: "json",
  success: function(data){
    if(data.length>0){

      for(var i in data){
        var name = data[i].name;
        var subtitle = data[i].subtitle;
        var price = data[i].price;           
        var url = data[i].url;

        $(".pdbox4").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
        $(".pdbox4").eq(i).append('<br>'+'<a href="#"><h3>'+data[i].name+'</h3></a>');
        $(".pdbox4").eq(i).append('<a href="#"><h4>'+data[i].subtitle+'</h4></a>');
        $(".pdbox4").eq(i).append('<a href="#"><h5>'+data[i].price+'</h5></a>');            
      }
    }
  }
});