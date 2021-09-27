$(function(){
	//이 책 어때 슬라이드
	function prev (){				
		$(".ct3_pb_how_slide_list > li:last").prependTo(".ct3_pb_how_slide_list");
		$(".ct3_pb_how_slide_list").css("margin-left",-260);
		$(".ct3_pb_how_slide_list").stop().animate({marginLeft:0},0);

	}
	function next (){
		$(".ct3_pb_how_slide_list").stop().animate({marginLeft:-260},0, function(){
			$(".ct3_pb_how_slide_list > li:first").appendTo(".ct3_pb_how_slide_list");
			$(".ct3_pb_how_slide_list").css({marginLeft:0});
		});
	}				

	$(".ct3_pb_how_prev").click(function(){
		prev();
	});
	$(".ct3_pb_how_next").click(function(){
		next();
	});
});	