      $(function(){
        //menu 클릭 시 페이지 슬라이드다운//
        function fnMove(seq) {

          var offset = $("#fullpage>div" + seq).offset();

          $('html, body').animate({
            scrollTop: offset.top
          }, 400);

        };

        //menu 색상변경//
        $(function(){
          $("#menu>li").click(function () {
            $("#menu>li").removeClass();
            $(this).addClass("active");
          });
        });

        $(function () {
          var nav = $("#menu>li");
          var contents = $("#fullpage>div");

          nav.click(function (e) {
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            var section = contents.eq(index);
            var offset = section.offset().top;
            $("html,body").animate({
              scrollTop: offset
            }, 600);
          });

          $(window).scroll(function () {
            var wScroll = $(this).scrollTop();

            if (wScroll >= contents.eq(0).offset().top) {
              nav.css({
                "background": "#DFDCDC"
              });
              nav.removeClass("active");
              nav.eq(0).addClass("active");
              nav.eq(0).css({
                "background": "#F9F6F6"
              });			
            }

            if (wScroll >= contents.eq(1).offset().top) {
              nav.css({
                "background": "#DFDCDC"
              });		
              nav.removeClass("active");
              nav.eq(1).addClass("active");
              nav.eq(1).css({
                "background": "#F9F6F6"
              });
            }

            if (wScroll >= contents.eq(2).offset().top) {
              nav.removeClass("active");
              nav.css({
                "background": "#DFDCDC"
              });
              nav.eq(2).addClass("active");
              nav.eq(2).css({
                "background": "#F9F6F6"
              });
            }

            if (wScroll >= contents.eq(3).offset().top) {
              nav.removeClass("active");
              nav.css({
                "background": "#DFDCDC"
              });
              nav.eq(3).addClass("active");
              nav.eq(3).css({
                "background": "#F9F6F6"
              });
            }

            if (wScroll >= contents.eq(4).offset().top) {
              nav.removeClass("active");
              nav.css({
                "background": "#DFDCDC"
              });
              nav.eq(4).addClass("active");
              nav.eq(4).css({
                "background": "#F9F6F6"
              });
            }

            if (wScroll >= contents.eq(5).offset().top) {
              nav.removeClass("active");
              nav.css({
                "background": "#DFDCDC"
              });
              nav.eq(5).addClass("active");
              nav.eq(5).css({
                "background": "#F9F6F6"
              });
            }
          });
          return false;
        });
      });