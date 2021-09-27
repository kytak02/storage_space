$(function(){
	//전체 카테고리 클릭 시 슬라이드 토글
	$(".nav_3_allcategory").click(function(){
		$(".nav_3_allcategory_menu").stop().slideToggle("fast");
	});
	//전체 카테고리 안 X 닫힘 버튼
	$(".nav3_closeX").click(function(){		
		$(".nav_3_allcategory_menu").stop().slideUp("fast");
	});
});