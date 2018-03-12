;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var right = parseInt($(".mobileNav").css("right"));
			if(right == -240){
				$(this).animate({
					right:240
				}, 300);
				$(".mobileNav").animate({
					right:0
				}, 300);
			}
			else{
				$(this).animate({
					right:0
				}, 300);
				$(".mobileNav").animate({
					right:-240
				}, 300);	
			}
		});
	}

	function fixHeader(){
		var logoWhite = $("#logo").attr("data-white");
		var logoRed = $("#logo").attr("data-red");
		if(!$('body').hasClass("index")){
			$(".header").addClass("fixHeader");
			$(".topNav").addClass("fixNav");
			$("#logo").attr("src", logoRed);
		}
		else{
			$("#logo").attr("src", logoWhite);
		}

		if($("body").hasClass("index")){
			$(window).on("scroll", function(){
				var topScroll = $(window).scrollTop();
				if($(window).width() > 1024){
					if(topScroll >= 100){
						$(".header").addClass("fixHeader");
						$(".topNav").addClass("fixNav");
						$("#logo").attr("src", logoRed);
					}
					else{
						$(".header").removeClass("fixHeader");
						$("#logo").attr("src", logoWhite);
						$(".topNav").removeClass("fixNav");
					}
				}
			});

			if($(this).width() <= 1024){
				$(".header").addClass("fixHeader");
				$(".topNav").addClass("fixNav");
				$("#logo").attr("src", logoRed);
			}
			$(window).on("resize", function(){
				if($(this).width() <= 1024){
					$(".header").addClass("fixHeader");
					$(".topNav").addClass("fixNav");
					$("#logo").attr("src", logoRed);
				}
			});
		}
	}

	function ourTeam(){
		$(".teamCol").each(function(){
			$(this).hover(function(){
				$(this).find(".teamDesc").stop(true, true).fadeIn(300);
			}, function(){
				$(this).find(".teamDesc").stop(true, true).fadeOut(300);
			});
		});
	}
	
	function caseStudies(){
		$(".caseStudyNav li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$("html, body").animate({
		            scrollTop:$(target).offset().top - 140
		        }, 1000);
		        return false;
			});
		});
	}

	function news(){
		$(".newsCont").eq(0).addClass("activeNews");
		$(".newsWrap").eq(0).fadeIn(300);

		if($(window).width() <= 767){
			$(".mobileNews").eq(0).slideDown(300);
		}

		$(".newsCont").each(function(){
			$(this).on("click", function(){
				$(".activeNews").removeClass("activeNews");
				$(this).addClass("activeNews");
				var target = $(this).attr("data-href");
				$(".newsWrap").fadeOut(300);
				$(target).fadeIn(300);

				var _this = $(this);
				if($(window).width() <= 767){
					$(".mobileNews").slideUp(300);
					$(_this).next(".mobileNews").slideDown(300);
				}
				return false;
			});
		});

		$(window).on("resize", function(){
			if($(window).width() >= 768){
				$(".mobileNews").removeAttr("style");
			}
		});
	}

	function stickyCaseStudyNav(){
		if($(window).width() > 1024){
			$(window).on("scroll", function(){
				var topScroll = $(this).scrollTop();
				if(topScroll >= 330){
					$(".caseStudyNavOuter").addClass("fixed");
				}
				else{
					$(".caseStudyNavOuter").removeClass("fixed");
				}
			});
		}
		
	}

	function theAppDifference(){
		$(".stepCol").css({opacity:0});
        $('.stepOuter').waypoint(function() {
            $(".stepCol").css({opacity:1});
            
            TweenMax.staggerFrom($(".stepCol"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}

	function ourTeamEffect(){
		$(".teamCol").css({opacity:0});
        $('#ourTeam').waypoint(function() {
            $(".teamCol").css({opacity:1});
            
            TweenMax.staggerFrom($(".teamCol"), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}

	function textEffectLeft(){
		$(".txtEffectLeft").css({opacity:0});
		$(".txtEffectLeft").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {left:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}
	function textEffectRight(){
		$(".txtEffectRight").css({opacity:0});
		$(".txtEffectRight").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {right:-300, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}


	$(function(){
		mobileNav();
		fixHeader();
		ourTeam();
		caseStudies();
		news();
		stickyCaseStudyNav();
		if(!device){
			theAppDifference();	
			ourTeamEffect();
			textEffectLeft();
			textEffectRight();
		}
		
	});

})(jQuery);




