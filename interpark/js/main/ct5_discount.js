$(function(){
	/* 단독혜택 마우스 오버 */
	$(".ct5_discount_title > nav:nth-of-type(1)").click(function(){
		$(this).css({"color":"#f4511e","border":"1px solid #424242","border-bottom":"1px solid #fff"});
		$(".ct5_discount_title > nav:nth-of-type(2),.ct5_discount_title > nav:nth-of-type(3),.ct5_discount_title > nav:nth-of-type(4)").css({"color":"#000","border":"none"});
		
		$(".ct5_discount_li1").stop().fadeIn(0);
		$(".ct5_discount_li2").stop().fadeOut(0);
		$(".ct5_discount_li3").stop().fadeOut(0);
		$(".ct5_discount_li4").stop().fadeOut(0);
	});
	/* 특가할인 마우스 오버 */
	$(".ct5_discount_title > nav:nth-of-type(2)").click(function(){
		$(this).css({"color":"#f4511e","border":"1px solid #424242","border-bottom":"1px solid #fff"});
		$(".ct5_discount_title > nav:nth-of-type(3),.ct5_discount_title > nav:nth-of-type(4),.ct5_discount_title > nav:nth-of-type(1)").css({"color":"#000","border":"none"});
		
		$(".ct5_discount_li1").stop().fadeOut(0);
		$(".ct5_discount_li2").stop().fadeIn(0);
		$(".ct5_discount_li3").stop().fadeOut(0);
		$(".ct5_discount_li4").stop().fadeOut(0);
	});
	/* 정가인하 마우스 오버 */
	$(".ct5_discount_title > nav:nth-of-type(3)").click(function(){
		$(this).css({"color":"#f4511e","border":"1px solid #424242","border-bottom":"1px solid #fff"});
		$(".ct5_discount_title > nav:nth-of-type(4),.ct5_discount_title > nav:nth-of-type(1),.ct5_discount_title > nav:nth-of-type(2)").css({"color":"#000","border":"none"});
		
		$(".ct5_discount_li1").stop().fadeOut(0);
		$(".ct5_discount_li2").stop().fadeOut(0);
		$(".ct5_discount_li3").stop().fadeIn(0);
		$(".ct5_discount_li4").stop().fadeOut(0);
	});
	/* 어린이전집 마우스 오버 */
	$(".ct5_discount_title > nav:nth-of-type(4)").click(function(){
		$(this).css({"color":"#f4511e","border":"1px solid #424242","border-bottom":"1px solid #fff"});
		$(".ct5_discount_title > nav:nth-of-type(1),.ct5_discount_title > nav:nth-of-type(2),.ct5_discount_title > nav:nth-of-type(3)").css({"color":"#000","border":"none"});

		$(".ct5_discount_li1").stop().fadeOut(0);
		$(".ct5_discount_li2").stop().fadeOut(0);
		$(".ct5_discount_li3").stop().fadeOut(0);
		$(".ct5_discount_li4").stop().fadeIn(0);
	});


	/* 단독혜택 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"어린이"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);
		

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct5_discount_li1 > .ct5_discount_book").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0,10);
			var str3 = msg.documents[0].price;
			var str4 = msg.documents[0].sale_price;						

			$(".ct5_discount_li1 > .ct5_discount_book").eq(i).append("<h5>"+str2+"..."+"</h5>");
			$(".ct5_discount_li1 > .ct5_discount_book").eq(i).append("<br>"+"<span>정가 "+str3+"원</span>")
			$(".ct5_discount_li1 > .ct5_discount_book").eq(i).append("<p> 할인 "+str4+"원</p>")						
		}
	});
	/* 특가할인 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"사운드북"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);					

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct5_discount_li2 > .ct5_discount_book").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0,20);					
			var str3 = msg.documents[0].price;
			var str4 = msg.documents[0].sale_price;						

			$(".ct5_discount_li2 > .ct5_discount_book").eq(i).append("<h5>"+str2+"..."+"</h5>");
			$(".ct5_discount_li2 > .ct5_discount_book").eq(i).append("<br>"+"<span>정가 "+str3+"원</span>")
			$(".ct5_discount_li2 > .ct5_discount_book").eq(i).append("<p> 할인 "+str4+"원</p>")
			
		}
	});
	/* 정가인하 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"팝업북세트"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);					

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct5_discount_li3 > .ct5_discount_book").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0,20);						
			var str3 = msg.documents[0].price;
			var str4 = msg.documents[0].sale_price;						

			$(".ct5_discount_li3 > .ct5_discount_book").eq(i).append("<h5>"+str2+"..."+"</h5>");
			$(".ct5_discount_li3 > .ct5_discount_book").eq(i).append("<br>"+"<span>정가 "+str3+"원</span>")
			$(".ct5_discount_li3 > .ct5_discount_book").eq(i).append("<p> 할인 "+str4+"원</p>")					
		}
	});
	/* 어린이전집 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"어린이동화세트"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);					

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct5_discount_li4 > .ct5_discount_book").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0,20);
			var str3 = msg.documents[0].price;
			var str4 = msg.documents[0].sale_price;						

			$(".ct5_discount_li4 > .ct5_discount_book").eq(i).append("<h5>"+str2+"..."+"</h5>");
			$(".ct5_discount_li4 > .ct5_discount_book").eq(i).append("<br>"+"<span>정가 "+str3+"원</span>")
			$(".ct5_discount_li4 > .ct5_discount_book").eq(i).append("<p> 할인 "+str4+"원</p>")						
		}
	});
});