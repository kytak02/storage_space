$(function(){	
	//출판사 초이스 슬라이드 
	function prev (){				
		$(".ct3_pb_choicewrap > section:last").prependTo(".ct3_pb_choicewrap");
		$(".ct3_pb_choicewrap").css({marginLeft:-410});
		$(".ct3_pb_choicewrap").stop().animate({marginLeft:0},0);			
	}
	function next (){				
		$(".ct3_pb_choicewrap").stop().animate({marginLeft:-410},0,function(){
			$(".ct3_pb_choicewrap > section:first").appendTo(".ct3_pb_choicewrap");
			$(".ct3_pb_choicewrap").css({marginLeft:0});
		});
	}
	$(".ct3_pd_prev").click(function(){
		prev();
	});
	$(".ct3_pd_next").click(function(){
		next();
	});
	// 츨판사 초이스 api
	$.ajax({
		url: "./json/main/ct3_pb_choice_main.json",
		dataType:"json",
		success:function(data){
			if(data.length>0){

				for(var i in data){
					var url = data[i].url;
					var title = data[i].title;
					var p = data[i].p;
					var publish = data[i].publish;	

					$(".ct3_pb_choice_main>.ct3_pb_choice_thumbnail").eq(i).append("<img src='"+data[i].url+"'/>");
					$(".ct3_pb_choice_main>.ct3_pb_choice_ct").eq(i).append('<a href="sub.html">'+"<h3>"+data[i].title+"</h3>"+'</a>');
					$(".ct3_pb_choice_main>.ct3_pb_choice_ct").eq(i).append('<a href="sub.html">'+"<p>"+data[i].p+"</p>"+'</a>');
					$(".ct3_pb_choice_main>.ct3_pb_choice_ct").eq(i).append("<h5>"+data[i].publish+"</h5>");
				}
			} 
		}
	});

	// 1 번 째 책 마우스 오버 //
	$(".ct3_pb_choice_sub > div:nth-of-type(1)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$(".ct3_pb_choice_sub > div:nth-of-type(2)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(3)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(4)").css("border-top","none");
		$(".ct3_pb_choice_main:nth-of-type(1)").stop().fadeIn(0);
		$(".ct3_pb_choice_main:nth-of-type(2)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(3)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(4)").stop().fadeOut(0);
	});
	// 2 번 째 책 마우스 오버 //
	$(".ct3_pb_choice_sub > div:nth-of-type(2)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$(".ct3_pb_choice_sub > div:nth-of-type(3)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(4)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(1)").css("border-top","none");
		$(".ct3_pb_choice_main:nth-of-type(1)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(2)").stop().fadeIn(0);
		$(".ct3_pb_choice_main:nth-of-type(3)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(4)").stop().fadeOut(0);
	});
	// 3 번 째 책 마우스 오버 //
	$(".ct3_pb_choice_sub > div:nth-of-type(3)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$(".ct3_pb_choice_sub > div:nth-of-type(4)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(1)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(2)").css("border-top","none");
		$(".ct3_pb_choice_main:nth-of-type(1)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(2)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(3)").stop().fadeIn(0);
		$(".ct3_pb_choice_main:nth-of-type(4)").stop().fadeOut(0);
	});
	// 4 번 째 책 마우스 오버 //
	$(".ct3_pb_choice_sub > div:nth-of-type(4)").mouseover(function(){
		$(this).css("border-top","3px solid #f4511e");
		$(".ct3_pb_choice_sub > div:nth-of-type(1)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(2)").css("border-top","none");
		$(".ct3_pb_choice_sub > div:nth-of-type(3)").css("border-top","none");
		$(".ct3_pb_choice_main:nth-of-type(1)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(2)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(3)").stop().fadeOut(0);
		$(".ct3_pb_choice_main:nth-of-type(4)").stop().fadeIn(0);
	});
});	