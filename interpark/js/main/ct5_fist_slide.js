$(function(){
	//주목 이달 이책 api
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"자바스크립트"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);
		console.log(msg.documents[1].price);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct5_fist_thumbnail").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str1 = msg.documents[i].title;
			var str2 = str1.substring(0,15);
			var str3 = msg.documents[i].contents;
			var str4 = str3.substring(0,18);

			$(".ct5_fist_contents").eq(i).append("<h4>"+str2+"..."+"</h4>");
			$(".ct5_fist_contents").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");
			$(".ct5_fist_contents").eq(i).append("<br>"+"<h5>"+str4+"..."+"</h5>");

		}
	});
	//주목 이달 이책 슬라이드
	function prev (){						
		$(".ct5_slidewrap > li:last").prependTo(".ct5_slidewrap");
		$(".ct5_slidewrap").css({marginLeft:-480});
		$(".ct5_slidewrap").stop().animate({marginLeft:0});
		
	}
	function next (){
		$(".ct5_slidewrap").stop().animate({marginLeft:-480},function(){
			$(".ct5_slidewrap > li:first").appendTo(" .ct5_slidewrap");
			$(".ct5_slidewrap").css({marginLeft:0});
		});
	}
	function slide (){
		$(".ct5_slidewrap").stop().animate({marginLeft:-480},function(){
			$(".ct5_slidewrap > li:first").appendTo(" .ct5_slidewrap");
			$(".ct5_slidewrap").css({marginLeft:0});
		});
	}
	setInterval(slide,10000);

	$(".ct5_fist_prev").click(function(){
		prev();
	});
	$(".ct5_fist_next").click(function(){
		next();
	});
});