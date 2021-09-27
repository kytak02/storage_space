$(function(){
	//핫클릭 이벤트 마우스 오버
	$(".ct1_navlist > li:nth-of-type(2)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$("#contain_1_wrap").css("background","#1993A8");
		$(".ct1_navlist > li:nth-of-type(3)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(4)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(5)").css("border-top","none");
		$(".ct1_slidelist > li:nth-of-type(1)").stop().fadeIn(0);
		$(".ct1_slidelist > li:nth-of-type(2)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(3)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(4)").stop().fadeOut(0);
	});	

	//밀라논나의 인생내공 마우스 오버
	$(".ct1_navlist > li:nth-of-type(3)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$("#contain_1_wrap").css("background","#fff");
		$(".ct1_navlist > li:nth-of-type(4)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(5)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(2)").css("border-top","none");
		$(".ct1_slidelist > li:nth-of-type(1)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(2)").stop().fadeIn(0);
		$(".ct1_slidelist > li:nth-of-type(3)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(4)").stop().fadeOut(0);
	});	

	//추천 이벤트 마우스 오버
	$(".ct1_navlist > li:nth-of-type(4)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$("#contain_1_wrap").css("background","rgb(226, 242, 211)");
		$(".ct1_navlist > li:nth-of-type(5)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(2)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(3)").css("border-top","none");
		$(".ct1_slidelist > li:nth-of-type(1)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(2)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(3)").stop().fadeIn(0);
		$(".ct1_slidelist > li:nth-of-type(4)").stop().fadeOut(0);
	});	
	
	//화제의 책 마우스 오버
	$(".ct1_navlist > li:nth-of-type(5)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$("#contain_1_wrap").css("background","#8CFADF");
		$(".ct1_navlist > li:nth-of-type(2)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(3)").css("border-top","none");
		$(".ct1_navlist > li:nth-of-type(4)").css("border-top","none");
		$(".ct1_slidelist > li:nth-of-type(1)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(2)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(3)").stop().fadeOut(0);
		$(".ct1_slidelist > li:nth-of-type(4)").stop().fadeIn(0);
	});	
});	