$(function(){
	/* CD */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"OST"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct7_main_st").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str1 = msg.documents[i].title;
			var str2 = str1.substring(0,20);
			var str3 = msg.documents[i].price;
			var str4 = msg.documents[i].sale_price;

			$(".ct7_main_st").eq(i).append("<br>"+'<a href="sub.html">'+"<h4>"+str2+"..."+"</h4>"+"</a>");
			$(".ct7_main_st").eq(i).append("<br>"+'<a href="sub.html">'+"<p>"+str3+"원"+"</p>"+"<span>"+str4+"원"+"</span>"+"</a>");
			
		}
	});
	/* DVD */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"OST"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct7_sub_st").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str1 = msg.documents[i].title;
			var str2 = str1.substring(0,10);						

			$(".ct7_sub_st").eq(i).append('<a href="sub.html">'+"<h4>"+str2+"..."+"</h4>"+"</a>");
			
			
		}
	});
	/* eBook */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"ELLE"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct7_contents_list2").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str1 = msg.documents[i].title;
			var str2 = str1.substring(0,10);						
			var str3 = msg.documents[i].price;
			var str4 = msg.documents[i].sale_price;

			$(".ct7_contents_list2").eq(i).append("<br>"+'<a href="sub.html">'+"<h4>"+str2+"..."+"</h4>"+"</a>");
			$(".ct7_contents_list2").eq(i).append("<br>"+'<a href="sub.html">'+"<p>"+str3+"원"+"</p>"+"<span>"+str4+"원"+"</span>"+"</a>");
			
			
		}
	});
	/* CD/DVD/eBook 슬라이드 */
	function prev (){				
		$(".ct7_contents_li > li:last").prependTo(".ct7_contents_li");
		$(".ct7_contents_li").css("margin-left",-360);
		$(".ct7_contents_li").stop().animate({marginLeft:0},0);

	}
	function next (){
		$(".ct7_contents_li").stop().animate({marginLeft:-360},0, function(){
			$(".ct7_contents_li > li:first").appendTo(".ct7_contents_li");
			$(".ct7_contents_li").css({marginLeft:0});
		});
	}				

	$(".ct7_multibox:nth-of-type(3)>.ct7_prev").click(function(){
		prev();
	});
	$(".ct7_multibox:nth-of-type(3)>.ct7_next").click(function(){
		next();
	});
});