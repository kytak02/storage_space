$(function(){
	//오늘 순위
	$(".today").click(function(){
		$(".today").css("border-bottom","none");
		$(".today_list").stop().fadeIn(0,function(){
			$(".weekend").css("border-bottom","1px solid #fff");
		});
		$(".weekend_list").stop().fadeOut(0);
	});
//주간 순위
$(".weekend").click(function(){
	$(".weekend").css("border-bottom","none");
	$(".weekend_list").stop().fadeIn(0,function(){
		$(".today").css("border-bottom","1px solid #fff");
	});
	$(".today_list").stop().fadeOut(0);
});
});