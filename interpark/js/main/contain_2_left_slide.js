$(function(){
	//인터파크 추천 왼쪽 작은 슬라이드
	function prev (){				
		$(".contain_2_left_slide_list > li:last").prependTo(".contain_2_left_slide_list");
		$(".contain_2_left_slide_list").css("margin-left",-92);
		$(".contain_2_left_slide_list").stop().animate({marginLeft:0});
		
	}
	function next (){
		$(".contain_2_left_slide_list > li:first").appendTo(".contain_2_left_slide_list");
		$(".contain_2_left_slide_list").css("margin-left",0);
		$(".contain_2_left_slide_list").stop().animate({marginLeft:-92});
	}
	function slide (){
		$(".contain_2_left_slide_list").stop().animate({marginLeft:-92}, function(){
			$(".contain_2_left_slide_list > li:first").appendTo(".contain_2_left_slide_list");
			$(".contain_2_left_slide_list").css({marginLeft:-92});
		});
	}

	setInterval(slide,10000);

	$(".contain_2_left_slide_btn > span:nth-of-type(1)").click(function(){
		prev();
	});
	$(".contain_2_left_slide_btn > span:nth-of-type(2)").click(function(){
		next();
	});
});