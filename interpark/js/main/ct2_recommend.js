$(function(){
	//인터파크 추천 api 스크립트	
	$.ajax({
		url:"./json/main/ct2_recommend.json",
		dataType:"json",
		success:function(data){
			if(data.length>0){

				for(var i in data){
					var url = data[i].url;
					var title = data[i].title;
					var mdrc = data[i].mdrc;
					var pbox = data[i].pbox;

					$(".contain_2_thumbnail").eq(i).append("<img src='img/"+data[i].url+"'/>");
					$(".ct2_pbox:nth-of-type(1)").eq(i).append('<a href="sub.html">'+"<h3>"+data[i].title+"</h3>"+'</a>');
					$(".ct2_pbox:nth-of-type(1)").eq(i).append('<a href="sub.html">'+"<h5>"+data[i].mdrc+"</h5>"+'</a>');
					$(".ct2_pbox:nth-of-type(2)").eq(i).append("<p>"+data[i].pbox+"</p>");
				}
			}
		}
	});			
});