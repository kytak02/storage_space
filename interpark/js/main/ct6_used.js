$(function(){
	//HOT 중고도서 api
	$.ajax({
		method:"GET",
		url:"https://dapi.kakao.com/v3/search/book?target=title",
		data:{query:"한국사세트"},
		headers:{Authorization:"KakaoAK cc9c2b08504a502c7e5b7fdf651bcec7"}
	})
	.done(function(msg){
		console.log(msg.documents[1].thumbnail);

		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			$(".ct6_book").eq(i).append('<a href="sub.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

			var str1 = msg.documents[i].title;
			var str2 = str1.substring(0,26);
			var str3 = msg.documents[i].price;
			var str4 = msg.documents[i].sale_price;

			$(".ct6_book").eq(i).append("<br><br>"+'<a href="#">'+"<h4>"+str2+"</h4>"+"</a>");
			$(".ct6_book").eq(i).append("<br>"+'<a href="sub.html">'+"<p>"+str3+"원"+"</p>"+"</a>");
			$(".ct6_book").eq(i).append('<a href="#">'+"<span>"+str4+"원"+"</span>"+"</a>");
		}
	});
});