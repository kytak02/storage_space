$(function(){
	//트렌드&이슈 슬라이드
	function prev (){				
		$(".ct2_trend_slide_list > li:last").prependTo(".ct2_trend_slide_list");
		$(".ct2_trend_slide_list").css("margin-left",-260);
		$(".ct2_trend_slide_list").stop().animate({marginLeft:0});

	}
	function next (){
		$(".ct2_trend_slide_list").stop().animate({marginLeft:-260}, function(){
			$(".ct2_trend_slide_list > li:first").appendTo(".ct2_trend_slide_list");
			$(".ct2_trend_slide_list").css({marginLeft:0});
		});
	}
	function slide (){
		$(".ct2_trend_slide_list").stop().animate({marginLeft:-260}, function(){
			$(".ct2_trend_slide_list > li:first").appendTo(".ct2_trend_slide_list");
			$(".ct2_trend_slide_list").css({marginLeft:0});
		});
	}

	setInterval(slide,20000);

	$(".ct2_trend_prev").click(function(){
		prev();
	});
	$(".ct2_trend_next").click(function(){
		next();
	});
});