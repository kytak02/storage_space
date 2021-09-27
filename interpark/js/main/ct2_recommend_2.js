$(function(){
	//인터파크 추천 슬라이드 스크립트
	function prev (){
		$(".ct2_wrap > li:last").prependTo(".ct2_wrap");
		$(".ct2_wrap").css({marginLeft:-523});
		$(".ct2_wrap").stop().animate({marginLeft:0});
	}

	function next (){
		$(".ct2_wrap").stop().animate({marginLeft:-523}, function(){
			$(".ct2_wrap > li:first").appendTo(".ct2_wrap");
			$(".ct2_wrap").css({marginLeft:0});
		});
	}

	function slide (){
		$(".ct2_wrap").stop().animate({marginLeft:-523}, function(){
			$(".ct2_wrap > li:first").appendTo(".ct2_wrap");
			$(".ct2_wrap").css({marginLeft:0});
		});
	}

	setInterval(slide,50000);

	$(".contain2_main_prev").click(function(){
		prev();
	});

	$(".contain2_main_next").click(function(){
		next();
	});

});