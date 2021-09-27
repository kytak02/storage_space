$.ajax({
  url: "./json/04pt1_contents.json",
  dataType: "json",
  success: function(data){
    if (data.length>0){

      for (var i in data){
        var name = data[i].name;            
        var p = data[i].p;
        var url = data[i].url;

        $(".contentbox").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
        $(".contentbox").eq(i).append('<a href="#"><h3>'+data[i].name+'</h3></a>');
        $(".contentbox").eq(i).append('<a href="#"><p>'+data[i].p+'</p></a>');            
      }
    }
  }
});

