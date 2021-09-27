$(function(){
	/* 문학/인문 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(1)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(2)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(3)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(4)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(5)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(6)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(7)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeIn(0);
		$(".ct4_mainbox2").fadeOut(0);
		$(".ct4_mainbox3").fadeOut(0);
		$(".ct4_mainbox4").fadeOut(0);
		$(".ct4_mainbox5").fadeOut(0);
		$(".ct4_mainbox6").fadeOut(0);
		$(".ct4_mainbox7").fadeOut(0);
	});
	/* 유아/아동 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(2)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(3)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(4)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(5)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(6)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(7)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(1)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeOut(0);
		$(".ct4_mainbox2").fadeIn(0);
		$(".ct4_mainbox3").fadeOut(0);
		$(".ct4_mainbox4").fadeOut(0);
		$(".ct4_mainbox5").fadeOut(0);
		$(".ct4_mainbox6").fadeOut(0);
		$(".ct4_mainbox7").fadeOut(0);
	});
	/* 경제/교양/실용 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(3)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(4)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(5)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(6)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(7)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(1)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(2)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeOut(0);
		$(".ct4_mainbox2").fadeOut(0);
		$(".ct4_mainbox3").fadeIn(0);
		$(".ct4_mainbox4").fadeOut(0);
		$(".ct4_mainbox5").fadeOut(0);
		$(".ct4_mainbox6").fadeOut(0);
		$(".ct4_mainbox7").fadeOut(0);
	});
	/* 학습/어힉 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(4)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(5)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(6)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(7)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(1)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(2)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(3)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeOut(0);
		$(".ct4_mainbox2").fadeOut(0);
		$(".ct4_mainbox3").fadeOut(0);
		$(".ct4_mainbox4").fadeIn(0);
		$(".ct4_mainbox5").fadeOut(0);
		$(".ct4_mainbox6").fadeOut(0);
		$(".ct4_mainbox7").fadeOut(0);
	});
	/* 외국도서 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(5)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(6)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(7)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(1)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(2)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(3)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(4)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeOut(0);
		$(".ct4_mainbox2").fadeOut(0);
		$(".ct4_mainbox3").fadeOut(0);
		$(".ct4_mainbox4").fadeOut(0);
		$(".ct4_mainbox5").fadeIn(0);
		$(".ct4_mainbox6").fadeOut(0);
		$(".ct4_mainbox7").fadeOut(0);
	});
	/* eBook 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(6)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(7)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(1)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(2)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(3)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(4)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(5)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeOut(0);
		$(".ct4_mainbox2").fadeOut(0);
		$(".ct4_mainbox3").fadeOut(0);
		$(".ct4_mainbox4").fadeOut(0);
		$(".ct4_mainbox5").fadeOut(0);
		$(".ct4_mainbox6").fadeIn(0);
		$(".ct4_mainbox7").fadeOut(0);
	});
	/* CD/DVD 마우스 오버 */
	$(".ct4_navwrap > nav:nth-of-type(7)").mouseover(function(){
		$(this).css("border-bottom","2px solid #f4511e");
		$(".ct4_navwrap > nav:nth-of-type(1)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(2)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(3)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(4)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(5)").css("border-bottom","none");
		$(".ct4_navwrap > nav:nth-of-type(6)").css("border-bottom","none");
		$(".ct4_mainbox1").fadeOut(0);
		$(".ct4_mainbox2").fadeOut(0);
		$(".ct4_mainbox3").fadeOut(0);
		$(".ct4_mainbox4").fadeOut(0);
		$(".ct4_mainbox5").fadeOut(0);
		$(".ct4_mainbox6").fadeOut(0);
		$(".ct4_mainbox7").fadeIn(0);
	});

	/* 문학/인문 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"문학"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox1 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,8);

			$(".ct4_bookbox1 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox1 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");
		}				
	});

	/* 유아/아동 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"아동"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox2 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,8);

			$(".ct4_bookbox2 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox2 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");				

		}				
	});

	/* 경제/교양/실용 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"경제"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox3 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,8);

			$(".ct4_bookbox3 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox3 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");				

		}				
	});

	/* 학습/어학 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"학습"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox4 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,7);

			$(".ct4_bookbox4 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox4 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");				

		}				
	});

	/* 외국도서 */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"외국"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox5 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,7);

			$(".ct4_bookbox5 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox5 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");				

		}				
	});

	/* eBook */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"eBook"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox6 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,8);

			$(".ct4_bookbox6 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox6 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");				

		}				
	});

	/* CD/DVD */
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"방탄소년단"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){				
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct4_bookbox7 > .ct4_booklist").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");	

			var str = msg.documents[i].title;
			var str2 = str.substring(0,8);

			$(".ct4_bookbox7 > .ct4_booklist").eq(i).append("<span>"+str2+"..."+"</span>");
			$(".ct4_bookbox7 > .ct4_booklist").eq(i).append("<br>"+"<p>"+msg.documents[i].price+"원"+"</p>");				

		}				
	});
});